const connection = require('../config/db');


exports.saveScore = async (req, res) => {
    const { pontuacao, user_id, level, topic } = req.body;

    if (!pontuacao || !user_id || !level || !topic) {
        return res.status(400).json({ error: 'Dados inválidos.' });
    }

    const query = "INSERT INTO pontuation (pontuacao, user_id, level, topic) VALUES (?, ?, ?, ?)";

    connection.query(query, [pontuacao, user_id, level, topic], (err, results) => {
        if (err) {
            console.error('Erro ao salvar a pontuação:', err);
            return res.status(500).json({ error: 'Erro ao salvar a pontuação.' });
        }

        res.status(200).json({
            success: true,
            message: 'Pontuação salva com sucesso.',
            data: results
        });
    });
};


exports.getRanking = (req, res) => {
    const { level, topic } = req.query;

    const query = `
        SELECT users.name, pontuation.pontuacao 
        FROM pontuation 
        JOIN users ON pontuation.user_id = users.id 
        WHERE pontuation.level = ? AND pontuation.topic = ?
        ORDER BY pontuacao DESC LIMIT 10
    `;

    connection.query(query, [level, topic], (err, results) => {
        if (err) {
            console.error('Erro ao recuperar o ranking:', err);
            return res.status(500).json({ error: 'Erro ao recuperar o ranking.' });
        }

        res.json(results);
    });
};





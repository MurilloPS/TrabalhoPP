const { response } = require('express');
const connection = require('../config/db');


exports.saveScore = async (req, res) => {
    const { pontuacao, userName } = req.body; 

    if (!pontuacao || !userName) {
        console.log("Dados inválidos recebidos:", req.body); 
        return res.status(400).json({ error: 'Dados inválidos.' });
    }


    const query ="INSERT INTO pontuation (pontuacao, user_name) VALUES (?, ?)";
    
    try {
        connection.query(query, [pontuacao, userName], (err, results) => {
            console.log(err, results)
            if(results)
                response
                    .status(200)
                    .json({ 
                        success: true,
                        message: 'Pontuação salva com sucesso.',
                        data: results
                    })
            else {
                response
                .status(401)
                .json({ 
                    success: true,
                    message: 'Erro fatal',
                    data: results
                })
            }
        })


        // const db = await connection();
        // const [results] = await db.execute(query, [pontuacao, userName]);
        // await db.end();

        // res.json({ success: true });
    } catch (err) {
        console.error('Erro ao salvar a pontuação:', err); 
        res.status(500).json({ error: 'Erro ao salvar a pontuação.' });
    }
};



exports.getRanking = async (req, res) => {
    const query = 'SELECT user_name, pontuacao FROM pontuation ORDER BY pontuacao DESC LIMIT 10';

    try {
        const db = await connection();
        const [results] = await db.execute(query);
        await db.end();

        res.json(results); 
    } catch (err) {
        console.error('Erro ao recuperar o ranking:', err); 
        res.status(500).json({ error: 'Erro ao recuperar o ranking.' });
    }
};


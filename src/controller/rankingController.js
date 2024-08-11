app.get('/api/ranking', authenticateToken, (req, res) => {
    const query = 'SELECT nome, pontuacao FROM ranking ORDER BY pontuacao DESC LIMIT 10';

    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao recuperar o ranking.' });
        }
        res.json(results);
    });
});

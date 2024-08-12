const db = require('../config/database');

exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT id, nome FROM usuarios WHERE email = ? AND senha = ?', [email, password], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const user = results[0];

        // Armazenar informações do usuário na sessão
        req.session.userId = user.id;
        req.session.userName = user.nome;

        res.json({ success: true });
    });
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao encerrar a sessão.' });
        }
        res.json({ success: true });
    });
};

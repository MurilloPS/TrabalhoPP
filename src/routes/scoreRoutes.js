const express = require('express');
const scoreController = require('../controllers/scoreController');

const router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    return res.status(401).json({ success: false, message: 'Você precisa estar logado para acessar esta rota.' });
}

router.post('/enviar-pontuacao', ensureAuthenticated, scoreController.saveScore);
router.get('/ranking', ensureAuthenticated, scoreController.getRanking);

module.exports = router;

const express = require('express');
const scoreController = require('../controller/scoreController')

const router = express.Router();


router.post('/score/routes', scoreController.saveScore);
router.get('/ranking', scoreController.getRanking);

module.exports = router;

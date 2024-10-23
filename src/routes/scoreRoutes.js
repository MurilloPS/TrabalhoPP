const express = require('express');
const scoreController = require('../controller/scoreController')

const router = express.Router();

/**
* @swagger
* /scoreroutes:
*   post:
*     summary: Rota para pontuação
*     responses:
*       200:
*         description: Rota para armazenar a pontuação
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/score/routes', scoreController.saveScore);
/**
* @swagger
* /Rank:
*   get:
*     summary: Retorna os rankings
*     responses:
*       200:
*         description: Rota necessária para a lista de rankeamento
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.get('/ranking', scoreController.getRanking);

module.exports = router;

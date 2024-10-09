const express = require('express');
const scoreController = require('../controller/scoreController')

const router = express.Router();

/**
* @swagger
* /scoreroutes:
*   get:
*     summary: Posta a pontuação
*     responses:
*       200:
*         description: Pontuação
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
*         description: Uma lista de rankeamento
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.get('/ranking', scoreController.getRanking);

module.exports = router;

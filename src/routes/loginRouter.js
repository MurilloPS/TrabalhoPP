const {Router}=require('express');
const router=Router();

const {login}=require("../controller/loginController");
/**
* @swagger
* /loginRouter:
*   post:
*     summary: Rota para login
*     responses:
*       200:
*         description: Serve como ponto de entrada para a autenticação de usuários

*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/login', login);
module.exports = router;
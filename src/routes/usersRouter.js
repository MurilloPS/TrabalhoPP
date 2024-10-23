const {Router}=require('express');
const router=Router();
const {storeUser}=require('../controller/usersController');

/**
* @swagger
* /usercreate:
*   post:
*     summary: Rota para criação de usuário
*     responses:
*       200:
*         description: Serve para criar um novo usuário
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/user/create', storeUser);
module.exports = router;
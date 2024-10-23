const { Router } = require('express');
const router = Router();
const {storeTask}=require('../controller/gamihis');
router.post('/enviar-pontuacao', storeTask);
const {storeUser}=require('../controller/usersController');

router.post('user/create', storeUser);
module.exports= router;
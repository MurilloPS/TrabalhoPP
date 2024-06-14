const { Router } = require('express');
const router = Router();
const {storeTask}=require('../controller/gamihis');
router.post('/enviar-pontuacao', storeTask);
module.exports= router;
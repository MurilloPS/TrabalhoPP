const express=require('express');
const dotenv=require('dotenv').config();
const gamihisRouter=require('./routes/gamihisRouter');
const cors =require('cors');

const app=express();
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());
app.use('/api', gamihisRouter);
module.exports=app;
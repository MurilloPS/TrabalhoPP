const connection=require('../config/db');
const dotenv=require('dotenv').config();
async function storeUser(request, response){
  const params =Array(
    request.body.name,
    request.body.email,
    request.body.password
    
  );
  const query = "INSERT INTO users(name,email,password) VALUES(?,?,?)"
  connection.query(query, params, (err, results)=>{
    if(results){
      response
        .status(201)
        .json({
          success: true,
          message: "Sucesso!",
          data: results
         })

  }else{
      response
        .status(400)
        .json({
          success: false,
          message: "Ops, deu problema!",
          sql: err
        })
  }
  })
}
async function storeTask(request, response){
    const pontuation=(request.body.pontuacao);
   
    const query="INSERT INTO pontuation(pontuacao) VALUES(?)";
    connection.query(query, params, (err, results)=>{
        if(results){
            response
              .status(201)
              .json({
                success: true,
                message: "Sucesso!",
                data: results
               })

        }else{
            response
              .status(400)
              .json({
                success: false,
                message: "Ops, deu problema!",
                sql: err
              })
        }
    })
}
module.exports={
    storeTask
    
}

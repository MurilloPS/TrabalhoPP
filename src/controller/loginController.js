// const connection=require('../config/db');

// async function login(request, response){
//     const email=request.body.email;
//     const query="SELECT email, password FROM users WHERE email=?";
//     connection.query(query, email, (err, results)=>{
//         if(results.length > 0){
//             const password=request.body.password;
//             const passwordQuery=results[0].password;
//             if (password===passwordQuery){
//                 response
//             .status(200)
//             .json({
//               success: true,
//               message: "Sucesso!",
//               data: results
//              })
                
//             }else{
//                 response
//                   .status(400)
//                   .json({
//                   success: false,
//                   message: "Senha incorreta",
              
//                   })
                
//             }
          
    
//        }else{

//           response
//             .status(400)
//             .json({
//               success: false,
//               message: "Ops, deu problema!",
//               data: err
//             })
//       }
//       })
// }
// module.exports={
//     login
    
//   }
const connection = require('../config/db');

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Certifique-se de que a consulta SQL está correta e verificando o email e senha
    const query = 'SELECT id, name FROM users WHERE email = ? AND password = ?';

    connection.query(query, [email, password], (err, results) => {
        if (err || results.length === 0) {
            // Retorna 401 (Unauthorized) se as credenciais forem inválidas
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const user = results[0];

        // Retorna os dados do usuário em caso de sucesso
        res.json({ success: true, data: results });
    });
};

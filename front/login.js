// let button = document.getElementById("handleSubmit");

// button.onclick = async function () {
  
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
  
//     let data = {  email, password };

//     console.log("Dados do formulário:", data); 

//     const response = await fetch('http://localhost:3001/api/login', {
//         method: "POST",
//         headers: { "Content-Type": "application/json;charset=UTF-8" },
//         body: JSON.stringify(data)
//     });

//     try {
//         const content = await response.json();
//         console.log("Resposta do servidor:", content); 
//         if (content.success) {
//             alert("Sucesso");
//             window.location.href = "landing.html"; 
//         } else {
//             alert("Erro ao enviar os dados.");
//         }
//     } catch (error) {
//         console.error("Erro ao processar a resposta do servidor:", error);
//         alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
//     }
// };
// function landing() {
//     window.location.href = "landing.html";
// }
// 
let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let data = { email, password };

    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        const content = await response.json();

        if (content.success) {
            // Verifique se o 'id' está presente nos dados retornados
            const userId = content.data[0].id;

            // Salva o 'user_id' no localStorage
            localStorage.setItem('userId', userId);

            alert("Login bem-sucedido");
            window.location.href = "landing.html";  // Redireciona para o quiz
        } else {
            alert("Erro ao fazer login.");
        }
    } catch (error) {
        console.error("Erro ao processar a resposta do servidor:", error);
        alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
    }
};

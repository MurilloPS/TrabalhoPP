let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Certifique-se de que o email e a senha não estão vazios
    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let data = { email, password };

    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        const content = await response.json();

        if (response.status === 401) {
            alert("Email ou senha incorretos.");
        } else if (content.success) {
            const userId = content.data[0].id;
            localStorage.setItem('userId', userId);
            alert("Login bem-sucedido");
            window.location.href = "index.html";
        }
    } catch (error) {
        console.error("Erro ao processar a resposta do servidor:", error);
        alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
    }
};

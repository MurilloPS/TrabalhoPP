let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


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
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                
              });
        } else if (content.success) {
            const userId = content.data[0].id;
            localStorage.setItem('userId', userId);
            Swal.fire({
                icon: "success",
                title: "Sucesso no login!",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = 'landing.html';
            });

        }
    } catch (error) {
        console.error("Erro ao processar a resposta do servidor:", error);
        alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
    }
};

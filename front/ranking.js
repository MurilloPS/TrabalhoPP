document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('http://localhost:3001/api/ranking', {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao carregar o ranking.');
        }

        const content = await response.json();
        console.log("Resposta do servidor:", content);

        if (Array.isArray(content)) {
            const rankingBody = document.getElementById('ranking-body');
            rankingBody.innerHTML = '';

            content.forEach((user, index) => {
                const row = document.createElement('tr');

                const positionCell = document.createElement('td');
                positionCell.innerText = index + 1;

                const nameCell = document.createElement('td');
                nameCell.innerText = user.name;

                const scoreCell = document.createElement('td');
                scoreCell.innerText = user.pontuacao;

                row.appendChild(positionCell);
                row.appendChild(nameCell);
                row.appendChild(scoreCell);

                rankingBody.appendChild(row);
            });
        } else {
            alert("Erro ao carregar o ranking. Dados não são uma lista.");
        }

    } catch (error) {
        console.error("Erro ao processar a resposta do servidor:", error);
        alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     window.loadRanking = async function() {
//         const level = document.getElementById('level-select').value;
//         const topic = document.getElementById('topic-select').value;

//         try {
//             const response = await fetch(`http://localhost:3001/api/ranking?level=${level}&topic=${topic}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json;charset=UTF-8"
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error('Erro ao carregar o ranking.');
//             }

//             const content = await response.json();

//             const rankingBody = document.getElementById('ranking-body');
//             rankingBody.innerHTML = '';

//             content.forEach((user, index) => {
//                 const row = document.createElement('tr');
//                 const positionCell = document.createElement('td');
//                 positionCell.innerText = index + 1;

//                 const nameCell = document.createElement('td');
//                 nameCell.innerText = user.name;

//                 const scoreCell = document.createElement('td');
//                 scoreCell.innerText = user.pontuacao;

//                 row.appendChild(positionCell);
//                 row.appendChild(nameCell);
//                 row.appendChild(scoreCell);

//                 rankingBody.appendChild(row);
//             });
//         } catch (error) {
//             console.error("Erro ao processar a resposta do servidor:", error);
//             alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
//         }
//     };
// });
document.addEventListener("DOMContentLoaded", () => {
    window.loadRanking = async function () {
        const level = document.getElementById("level-select").value;
        const topic = document.getElementById("topic-select").value;
        const rankingBody = document.getElementById("ranking-body");

        rankingBody.innerHTML = ""; // Limpa as linhas existentes

        try {
            // Fetch data from the API
            const response = await fetch(`http://localhost:3001/api/ranking?level=${level}&topic=${topic}`);
            if (!response.ok) {
                throw new Error("Erro ao carregar ranking. Tente novamente mais tarde.");
            }

            const rankings = await response.json();
            console.log(rankings); // Debug para verificar a resposta da API

            rankings.forEach((entry, index) => {
                const row = document.createElement("tr");

                const positionCell = document.createElement("td");
                positionCell.textContent = index + 1;

                const nameCell = document.createElement("td");
                nameCell.textContent = entry.name;

                const scoreCell = document.createElement("td");
                scoreCell.textContent = entry.pontuacao; // Use 'pontuacao' conforme a API

                row.appendChild(positionCell);
                row.appendChild(nameCell);
                row.appendChild(scoreCell);

                rankingBody.appendChild(row);
            });
        } catch (error) {
            console.error(error);
            rankingBody.innerHTML = `<tr><td colspan="3" style="color: red; text-align: center;">${error.message}</td></tr>`;
        }
    };

    // Initial load of the ranking data
    loadRanking();
});

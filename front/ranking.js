document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3001/api/ranking', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        const rankingBody = document.getElementById('ranking-body');
        rankingBody.innerHTML = '';

        data.forEach((user, index) => {
            const row = document.createElement('tr');

            const positionCell = document.createElement('td');
            positionCell.innerText = index + 1;

            const nameCell = document.createElement('td');
            nameCell.innerText = user.nome;

            const scoreCell = document.createElement('td');
            scoreCell.innerText = user.pontuacao;

            row.appendChild(positionCell);
            row.appendChild(nameCell);
            row.appendChild(scoreCell);

            rankingBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar o ranking:', error);
        alert("Erro ao carregar o ranking. Por favor, tente novamente.");
    });
});

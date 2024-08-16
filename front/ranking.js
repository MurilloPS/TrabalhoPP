document.addEventListener("DOMContentLoaded", () => {
    fetch('http://loacalhost:3001/api/ranking', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o ranking.');
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new TypeError('Dados do ranking não são um array.');
        }

        const rankingBody = document.getElementById('ranking-body');
        rankingBody.innerHTML = '';

        data.forEach((user, index) => {
            const row = document.createElement('tr');

            const positionCell = document.createElement('td');
            positionCell.innerText = index + 1;

            const nameCell = document.createElement('td');
            nameCell.innerText = user.user_name; // Certifique-se de usar o campo correto

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

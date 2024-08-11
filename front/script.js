let pontuacao = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "Qual o ano de descobrimento do Brasil?",
        answers: [
            { text: "1500", correct: true },
            { text: "1400", correct: false },
            { text: "1492", correct: false },
            { text: "1550", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        answers: [
            { text: "Getúlio Vargas", correct: false },
            { text: "Juscelino Kubitschek", correct: false },
            { text: "Deodoro da Fonseca", correct: true },
            { text: "Tancredo Neves", correct: false }
        ]
    },
    {
        question: "Qual o tratado que determinou as terras do Brasil e de Portugal?",
        answers: [
            { text: "Tratado de Madri", correct: false },
            { text: "Tratado de Tordesilhas", correct: true },
            { text: "Tratado de Versalhes", correct: false },
            { text: "Tratado de Petrópolis", correct: false }
        ]
    },
    {
        question: "Em que ano ocorreu a Proclamação da República no Brasil?",
        answers: [
            { text: "1822", correct: false },
            { text: "1889", correct: true },
            { text: "1930", correct: false },
            { text: "1964", correct: false }
        ]
    },
    {
        question: "Quem foi o último imperador do Brasil?",
        answers: [
            { text: "Dom Pedro I", correct: false },
            { text: "Dom Pedro II", correct: true },
            { text: "Dom João VI", correct: false },
            { text: "Dom Pedro III", correct: false }
        ]
    }
];

// Função para inicializar a exibição da primeira pergunta ao carregar a página
document.addEventListener("DOMContentLoaded", showQuestion);

// Função para exibir a pergunta atual
function showQuestion() {
    const questionElement = document.getElementById('pergunta');
    const answersElement = document.getElementById('respostas');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    answersElement.innerHTML = '';

    // Criar botões para cada resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => checkAnswer(answer.correct);
        answersElement.appendChild(button);
    });
}

// Função para verificar a resposta escolhida
function checkAnswer(isCorrect) {
    if (isCorrect) {
        pontuacao++;
        alert("Você acertou!");
    } else {
        alert("Você errou!");
    }
    updateScore();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Você completou o quiz! Sua pontuação final é: " + pontuacao);
        submitScore(pontuacao);
    }
}

// Função para atualizar a pontuação na tela
function updateScore() {
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
}

// Função para enviar a pontuação final ao servidor
function submitScore(pontuacao) {
    fetch('/enviar-pontuacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pontuacao })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Pontuação salva com sucesso!");
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao salvar a pontuação.");
    });
}
function submitScore(pontuacao) {
    console.log("Enviando pontuação:", pontuacao);
    fetch('/enviar-pontuacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pontuacao })
    })
    .then(response => {
        console.log("Resposta da API:", response);
        return response.text();
    })
    .then(data => {
        console.log("Dados da resposta:", data);
        alert("Pontuação salva com sucesso!");
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao salvar a pontuação.");
    });
}


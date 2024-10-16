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


document.addEventListener("DOMContentLoaded", showQuestion);


function showQuestion() {
    const questionElement = document.getElementById('pergunta');
    const answersElement = document.getElementById('respostas');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    answersElement.innerHTML = '';

 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => checkAnswer(answer.correct);
        answersElement.appendChild(button);
    });
}


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


function updateScore() {
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
}




async function submitScore(pontuacao) {
    // Recupera o 'user_id' do localStorage
    const user_id = localStorage.getItem('userId');

    if (!user_id) {
        alert("Erro: ID do usuário não encontrado.");
        return;
    }

    console.log("Enviando pontuação:", pontuacao, "ID do usuário:", user_id);

    try {
        const response = await fetch('http://localhost:3001/api/score/routes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({ pontuacao, user_id })  // Envia a pontuação e o 'user_id'
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro ao salvar a pontuação:', errorText);
            throw new Error('Erro ao enviar a pontuação.');
        }

        const data = await response.json();
        alert("Pontuação salva com sucesso!");
        window.location.href = "ranking.html";  // Redireciona para o ranking após salvar a pontuação
    } catch (error) {
        console.error('Erro ao salvar a pontuação:', error);
        alert("Erro ao salvar a pontuação.");
    }
}




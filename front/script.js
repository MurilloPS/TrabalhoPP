// let pontuacao = 0;
// let currentQuestionIndex = 0;

// const questions = [
//     {
//         question: "Qual o ano de descobrimento do Brasil?",
//         answers: [
//             { text: "1500", correct: true },
//             { text: "1400", correct: false },
//             { text: "1492", correct: false },
//             { text: "1550", correct: false }
//         ]
//     },
//     {
//         question: "Quem foi o primeiro presidente do Brasil?",
//         answers: [
//             { text: "Getúlio Vargas", correct: false },
//             { text: "Juscelino Kubitschek", correct: false },
//             { text: "Deodoro da Fonseca", correct: true },
//             { text: "Tancredo Neves", correct: false }
//         ]
//     },
//     {
//         question: "Qual o tratado que determinou as terras do Brasil e de Portugal?",
//         answers: [
//             { text: "Tratado de Madri", correct: false },
//             { text: "Tratado de Tordesilhas", correct: true },
//             { text: "Tratado de Versalhes", correct: false },
//             { text: "Tratado de Petrópolis", correct: false }
//         ]
//     },
//     {
//         question: "Em que ano ocorreu a Proclamação da República no Brasil?",
//         answers: [
//             { text: "1822", correct: false },
//             { text: "1889", correct: true },
//             { text: "1930", correct: false },
//             { text: "1964", correct: false }
//         ]
//     },
//     {
//         question: "Quem foi o último imperador do Brasil?",
//         answers: [
//             { text: "Dom Pedro I", correct: false },
//             { text: "Dom Pedro II", correct: true },
//             { text: "Dom João VI", correct: false },
//             { text: "Dom Pedro III", correct: false }
//         ]
//     }
// ];


// document.addEventListener("DOMContentLoaded", showQuestion);


// function showQuestion() {
//     const questionElement = document.getElementById('pergunta');
//     const answersElement = document.getElementById('respostas');
//     const currentQuestion = questions[currentQuestionIndex];

//     questionElement.innerText = currentQuestion.question;
//     answersElement.innerHTML = '';

 
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.onclick = () => checkAnswer(answer.correct);
//         answersElement.appendChild(button);
//     });
// }


// function checkAnswer(isCorrect) {
//     if (isCorrect) {
//         pontuacao++;
//         alert("Você acertou!");
//     } else {
//         alert("Você errou!");
//     }
//     updateScore();
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         alert("Você completou o quiz! Sua pontuação final é: " + pontuacao);
//         submitScore(pontuacao);
//     }
// }


// function updateScore() {
//     document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
// }




// async function submitScore(pontuacao) {
//     // Recupera o 'user_id' do localStorage
//     const user_id = localStorage.getItem('userId');

//     if (!user_id) {
//         alert("Erro: ID do usuário não encontrado.");
//         return;
//     }

//     console.log("Enviando pontuação:", pontuacao, "ID do usuário:", user_id);

//     try {
//         const response = await fetch('http://localhost:3001/api/score/routes', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8'
//             },
//             body: JSON.stringify({ pontuacao, user_id })  // Envia a pontuação e o 'user_id'
//         });

//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error('Erro ao salvar a pontuação:', errorText);
//             throw new Error('Erro ao enviar a pontuação.');
//         }

//         const data = await response.json();
//         alert("Pontuação salva com sucesso!");
//         window.location.href = "ranking.html";  // Redireciona para o ranking após salvar a pontuação
//     } catch (error) {
//         console.error('Erro ao salvar a pontuação:', error);
//         alert("Erro ao salvar a pontuação.");
//     }
// }
let pontuacao = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "Em que ano começou a Ditadura Militar no Brasil?",
        answers: [
            { text: "1964", correct: true },
            { text: "1970", correct: false },
            { text: "1954", correct: false },
            { text: "1985", correct: false }
        ]
    },
    {
        question: "Qual presidente foi deposto pelo golpe militar em 1964?",
        answers: [
            { text: "Jânio Quadros", correct: false },
            { text: "João Goulart", correct: true },
            { text: "Juscelino Kubitschek", correct: false },
            { text: "Tancredo Neves", correct: false }
        ]
    },
    {
        question: "Qual órgão de repressão foi criado para combater opositores do regime militar?",
        answers: [
            { text: "DOI-CODI", correct: true },
            { text: "UNE", correct: false },
            { text: "OAB", correct: false },
            { text: "FUNAI", correct: false }
        ]
    },
    {
        question: "O que foi o Ato Institucional Número 5 (AI-5)?",
        answers: [
            { text: "Um ato que extinguiu o Exército", correct: false },
            { text: "Ato que limitou liberdades e aumentou a repressão", correct: true },
            { text: "A criação do SUS", correct: false },
            { text: "A extinção das eleições", correct: false }
        ]
    },
    {
        question: "Qual presidente militar ficou mais tempo no poder durante a ditadura?",
        answers: [
            { text: "Castelo Branco", correct: false },
            { text: "Costa e Silva", correct: false },
            { text: "Ernesto Geisel", correct: false },
            { text: "Emílio Garrastazu Médici", correct: true }
        ]
    },
    {
        question: "Em que ano ocorreu o movimento 'Diretas Já'?",
        answers: [
            { text: "1984", correct: true },
            { text: "1979", correct: false },
            { text: "1964", correct: false },
            { text: "1985", correct: false }
        ]
    },
    {
        question: "Qual foi o último presidente militar do regime?",
        answers: [
            { text: "Ernesto Geisel", correct: false },
            { text: "João Figueiredo", correct: true },
            { text: "Costa e Silva", correct: false },
            { text: "Médici", correct: false }
        ]
    },
    {
        question: "Qual era o nome do jornal alternativo que denunciava abusos do regime militar?",
        answers: [
            { text: "Folha de São Paulo", correct: false },
            { text: "O Estado de S. Paulo", correct: false },
            { text: "O Pasquim", correct: true },
            { text: "Correio da Manhã", correct: false }
        ]
    },
    {
        question: "Qual foi a principal lei criada para censurar a imprensa durante o regime?",
        answers: [
            { text: "Lei da Anistia", correct: false },
            { text: "Lei de Segurança Nacional", correct: true },
            { text: "Lei Maria da Penha", correct: false },
            { text: "Lei de Defesa da Democracia", correct: false }
        ]
    },
    {
        question: "Em que ano a Ditadura Militar no Brasil chegou ao fim?",
        answers: [
            { text: "1984", correct: false },
            { text: "1985", correct: true },
            { text: "1990", correct: false },
            { text: "1982", correct: false }
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
            body: JSON.stringify({ pontuacao, user_id })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro ao salvar a pontuação:', errorText);
            throw new Error('Erro ao enviar a pontuação.');
        }

        const data = await response.json();
        alert("Pontuação salva com sucesso!");
        window.location.href = "ranking.html";
    } catch (error) {
        console.error('Erro ao salvar a pontuação:', error);
        alert("Erro ao salvar a pontuação.");
    }
}




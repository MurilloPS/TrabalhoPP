
const quizzes = {
    fundamental: {
        descobrimento: [
            { question: "Qual o ano de descobrimento do Brasil?", answers: [{ text: "1400", correct: false }, { text: "1500", correct: true }, { text: "1492", correct: false }, { text: "1550", correct: false }] },
            { question: "Quem liderou a frota portuguesa em 1500?", answers: [{ text: "Pedro Álvares Cabral", correct: true }, { text: "Vasco da Gama", correct: false }, { text: "Cristóvão Colombo", correct: false }, { text: "Fernão de Magalhães", correct: false }] },
            { question: "Em que local chegaram primeiro no Brasil?", answers: [{ text: "Ilha de Vera Cruz", correct: true }, { text: "Rio de Janeiro", correct: false }, { text: "Pernambuco", correct: false }, { text: "São Vicente", correct: false }] },
            { question: "Qual a origem dos povos que chegaram ao Brasil em 1500?", answers: [{ text: "Espanhóis", correct: false }, { text: "Portugueses", correct: true }, { text: "Italianos", correct: false }, { text: "Ingleses", correct: false }] },
            { question: "Qual era o objetivo da frota de Pedro Álvares Cabral?", answers: [{ text: "Colonizar a América", correct: false }, { text: "Explorar a África", correct: false }, { text: "Encontrar novas rotas comerciais", correct: true }, { text: "Conquistar o Oriente Médio", correct: false }] },
            { question: "Que tipo de árvore deu nome ao Brasil?", answers: [{ text: "Jequitibá", correct: false }, { text: "Pau-brasil", correct: true }, { text: "Ipê", correct: false }, { text: "Carvalho", correct: false }] },
            { question: "Qual foi a principal atividade econômica no Brasil colonial?", answers: [{ text: "Mineração", correct: false }, { text: "Cultivo de pau-brasil", correct: true }, { text: "Fabricação de tecidos", correct: false }, { text: "Fabricação de armas", correct: false }] },
            { question: "Quem assumiu o trono de Portugal na época do descobrimento?", answers: [{ text: "D. João I", correct: false }, { text: "D. Manuel I", correct: true }, { text: "D. Pedro I", correct: false }, { text: "D. João VI", correct: false }] },
            { question: "Como era chamada a divisão administrativa no Brasil colonial?", answers: [{ text: "Capitanias hereditárias", correct: true }, { text: "Municípios", correct: false }, { text: "Províncias", correct: false }, { text: "Estados", correct: false }] },
            { question: "O que o Tratado de Tordesilhas estabelecia?", answers: [{ text: "Divisão de terras entre Portugal e Espanha", correct: true }, { text: "Fim da escravidão", correct: false }, { text: "Conquista do Brasil", correct: false }, { text: "Chegada de Pedro Álvares Cabral", correct: false }] }
        ],
        ditadura: [
            { question: "Em que ano começou a Ditadura Militar no Brasil?", answers: [{ text: "1964", correct: true }, { text: "1985", correct: false }, { text: "1954", correct: false }, { text: "1970", correct: false }] },
            { question: "Quem foi o presidente deposto em 1964?", answers: [{ text: "João Goulart", correct: true }, { text: "Juscelino Kubitschek", correct: false }, { text: "Getúlio Vargas", correct: false }, { text: "Tancredo Neves", correct: false }] },
            { question: "O que foi o AI-5?", answers: [{ text: "Ato que aumentou a repressão política", correct: true }, { text: "Lei que garantiu direitos civis", correct: false }, { text: "Fim da Ditadura", correct: false }, { text: "Início da Ditadura", correct: false }] },
            { question: "Qual órgão realizava a repressão política?", answers: [{ text: "DOPS", correct: true }, { text: "IBGE", correct: false }, { text: "INSS", correct: false }, { text: "CNPq", correct: false }] },
            { question: "Qual foi o presidente mais marcante da Ditadura?", answers: [{ text: "Castelo Branco", correct: false }, { text: "Ernesto Geisel", correct: false }, { text: "João Figueiredo", correct: true }, { text: "Costa e Silva", correct: false }] },
            { question: "Quem criou o AI-5?", answers: [{ text: "Costa e Silva", correct: true }, { text: "João Goulart", correct: false }, { text: "Juscelino Kubitschek", correct: false }, { text: "Tancredo Neves", correct: false }] },
            { question: "Em que ano terminou a Ditadura Militar?", answers: [{ text: "1985", correct: true }, { text: "1964", correct: false }, { text: "1970", correct: false }, { text: "1990", correct: false }] },
            { question: "Qual presidente encerrou a Ditadura Militar?", answers: [{ text: "João Figueiredo", correct: true }, { text: "Castelo Branco", correct: false }, { text: "Costa e Silva", correct: false }, { text: "Ernesto Geisel", correct: false }] },
            { question: "Qual evento marcou o fim da Ditadura?", answers: [{ text: "Diretas Já", correct: true }, { text: "Revolução de 1930", correct: false }, { text: "Independência do Brasil", correct: false }, { text: "Abolição da escravatura", correct: false }] },
            { question: "O que foi a 'luta armada' durante a Ditadura?", answers: [{ text: "Movimento de resistência à ditadura", correct: true }, { text: "Luta pela independência", correct: false }, { text: "Repressão aos militares", correct: false }, { text: "Guerra contra o Paraguai", correct: false }] }
        ]
    },
    medio: {
        descobrimento: [
            { question: "Qual tratado garantiu Portugal sobre o Brasil?", answers: [{ text: "Tratado de Tordesilhas", correct: true }, { text: "Tratado de Madri", correct: false }, { text: "Tratado de Petrópolis", correct: false }, { text: "Tratado de Versalhes", correct: false }] },
            { question: "Qual foi uma das motivações para as Grandes Navegações?", answers: [{ text: "Busca por novas rotas comerciais", correct: true }, { text: "Conquista de territórios africanos", correct: false }, { text: "Conquistar o Oriente Médio", correct: false }, { text: "Colonizar a América", correct: false }] },
            { question: "Qual navegador descobriu o caminho marítimo para a Índia?", answers: [{ text: "Vasco da Gama", correct: true }, { text: "Pedro Álvares Cabral", correct: false }, { text: "Cristóvão Colombo", correct: false }, { text: "Fernão de Magalhães", correct: false }] },
            { question: "Que recurso natural interessava aos portugueses?", answers: [{ text: "Pau-brasil", correct: true }, { text: "Diamante", correct: false }, { text: "Petróleo", correct: false }, { text: "Ouro", correct: false }] },
            { question: "Como eram chamadas as expedições de exploração?", answers: [{ text: "Bandeiras", correct: true }, { text: "Caravelas", correct: false }, { text: "Tribo", correct: false }, { text: "Capitanias", correct: false }] },
            { question: "Quem financiou as navegações portuguesas?", answers: [{ text: "Rei de Portugal", correct: true }, { text: "Papa", correct: false }, { text: "Rei da Espanha", correct: false }, { text: "Imperador Romano", correct: false }] },
            { question: "Qual a importância da Expedição de Cabral?", answers: [{ text: "Descoberta do Brasil", correct: true }, { text: "Conquista da América", correct: false }, { text: "Encontro com os indígenas", correct: false }, { text: "Trocas comerciais", correct: false }] },
            { question: "Em que ano foi assinado o Tratado de Tordesilhas?", answers: [{ text: "1494", correct: true }, { text: "1500", correct: false }, { text: "1600", correct: false }, { text: "1550", correct: false }] },
            { question: "Por que os portugueses exploraram o pau-brasil?", answers: [{ text: "Pelo corante vermelho", correct: true }, { text: "Para a construção", correct: false }, { text: "Para aquecimento", correct: false }, { text: "Como combustível", correct: false }] },
            { question: "Como os indígenas viam a chegada dos europeus?", answers: [{ text: "De forma hostil", correct: true }, { text: "Como aliados", correct: false }, { text: "Indiferentes", correct: false }, { text: "Com medo", correct: false }] }
        ],
        ditadura: [
            { question: "Quem assumiu o governo após o golpe de 1964?", answers: [{ text: "Castelo Branco", correct: true }, { text: "João Goulart", correct: false }, { text: "Tancredo Neves", correct: false }, { text: "Getúlio Vargas", correct: false }] },
            { question: "Qual foi um dos objetivos da ditadura?", answers: [{ text: "Reprimir movimentos comunistas", correct: true }, { text: "Abolir o AI-5", correct: false }, { text: "Instituir o comunismo", correct: false }, { text: "Liberdade política", correct: false }] },
            { question: "O que significava o AI-5?", answers: [{ text: "Repressão política aumentada", correct: true }, { text: "Aumento da liberdade civil", correct: false }, { text: "Fim da ditadura", correct: false }, { text: "Declaração de guerra", correct: false }] },
            { question: "Qual presidente encerrou a ditadura?", answers: [{ text: "João Figueiredo", correct: true }, { text: "Costa e Silva", correct: false }, { text: "Ernesto Geisel", correct: false }, { text: "Tancredo Neves", correct: false }] },
            { question: "Qual movimento exigiu eleições diretas?", answers: [{ text: "Diretas Já", correct: true }, { text: "Movimento dos Trabalhadores", correct: false }, { text: "Nova República", correct: false }, { text: "Partido dos Trabalhadores", correct: false }] },
            { question: "Quem sofreu repressão na ditadura?", answers: [{ text: "Estudantes e artistas", correct: true }, { text: "Atores de TV", correct: false }, { text: "Políticos", correct: false }, { text: "Professores", correct: false }] },
            { question: "Quando foi criado o AI-5?", answers: [{ text: "1968", correct: true }, { text: "1970", correct: false }, { text: "1964", correct: false }, { text: "1978", correct: false }] },
            { question: "Qual o papel dos militares na ditadura?", answers: [{ text: "Controlar o governo", correct: true }, { text: "Introduzir democracia", correct: false }, { text: "Liderar revoltas", correct: false }, { text: "Restabelecer o Senado", correct: false }] },
            { question: "Qual a duração da ditadura?", answers: [{ text: "21 anos", correct: true }, { text: "10 anos", correct: false }, { text: "7 anos", correct: false }, { text: "15 anos", correct: false }] },
            { question: "Qual o impacto do AI-5?", answers: [{ text: "Repressão e censura aumentadas", correct: true }, { text: "Liberdade de imprensa", correct: false }, { text: "Fim da censura", correct: false }, { text: "Expansão dos direitos civis", correct: false }] }
        ]
    }
};


let pontuacao = 0;
let currentQuestionIndex = 0;
let questions = [];

// Configuração do quiz com base na escolha
document.addEventListener("DOMContentLoaded", () => {
    const level = localStorage.getItem('quizLevel');
    const topic = localStorage.getItem('quizTopic');
    questions = quizzes[level][topic];
    showQuestion();
});

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
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Acertou",
            showConfirmButton: false,
            timer: 1300
          });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Errou",
            showConfirmButton: false,
            timer: 1300
          });
    }
    updateScore();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        submitScore(pontuacao);
        Swal.fire({
            icon: "success",
            title: "Parabéns sua pontuação é : " + pontuacao,
            text: "Você completou o quiz com sucesso!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'ranking.html';
        });
    }
}

function updateScore() {
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
}

async function submitScore(pontuacao) {
    const user_id = localStorage.getItem('userId');
    const level = localStorage.getItem('quizLevel');
    const topic = localStorage.getItem('quizTopic');

    if (!user_id) {
        alert("Erro: ID do usuário não encontrado.");
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/api/score/routes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify({ pontuacao, user_id, level, topic })
        });

        if (!response.ok) throw new Error('Erro ao enviar a pontuação.');

        const data = await response.json();

    } catch (error) {
        console.error('Erro ao salvar a pontuação:', error);
        alert("Erro ao salvar a pontuação.");
    }
}




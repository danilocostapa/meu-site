const questions = [
   // { question: "Nova pergunta?", answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"], correct: Índice_da_resposta_correta }

    { question: "Qual é o maior planeta do sistema solar?", answers: ["Terra", "Marte", "Júpiter", "Saturno"], correct: 2 },
    { question: "Quem foi o primeiro homem a pisar na Lua?", answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], correct: 2 },
    { question: "Quantas Copas do Mundo a Seleção Brasileira de Futebol já venceu?", answers: ["3", "4", "5", "6"], correct: "5" },
    { question: "Qual é o nome do vocalista da banda Queen?", answers: ["Mick Jagger", "Freddie Mercury", "Elton John", "David Bowie"], correct: 1 },
    { question: "Qual é o metal mais abundante na crosta terrestre?", answers: ["Ferro", "Cobre", "Alumínio", "Ouro"], correct: 2 },
    { question: "Em que ano foi lançado o primeiro iPhone?", answers: ["2005", "2007", "2010", "2012"], correct: 1 },
    { question: "Qual destes filmes ganhou o Oscar de Melhor Filme em 1994?", answers: ["Titanic", "Forrest Gump", "Pulp Fiction", "O Rei Leão"], correct: 1 },
    { question: "Qual é o maior oceano do mundo?", answers: ["Atlântico", "Índico", "Ártico", "Pacífico"], correct: 3 },
    { question: "Quem escreveu a teoria da relatividade?", answers: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"], correct: 1 },
    { question: "Qual é o nome do protagonista da série Breaking Bad?", answers: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"], correct: 0},
    { question: "Quantos ossos tem o corpo humano adulto?", answers: ["206", "210", "185", "198"], correct: 0 },
    { question: "Qual país sediou a Copa do Mundo de 2018?", answers: ["Brasil", "Rússia", "França", "Alemanha"], correct: 1 },
    { question: "Qual animal é conhecido por sua habilidade de mudar de cor?", answers: ["Polvo", "Camaleão", "Arraia", "Lula"], correct: 1 },
    { question: "Qual é o símbolo químico do ouro?", answers: ["Au", "Ag", "Hg", "Fe"], correct: 0 },
    { question: "Qual é o nome do maior deserto do mundo?", answers: ["Sahara", "Kalahari", "Atacama", "Gobi"], correct: 0 },
    { question: "Quem pintou a Mona Lisa?", answers: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Van Gogh"], correct: 0 },
    { question: "Qual planeta é conhecido como Estrela D'Alva?", answers: ["Vênus", "Marte", "Mercúrio", "Netuno"], correct: 0 },
    { question: "Quem é o autor de 'Dom Quixote'?", answers: ["Machado de Assis", "William Shakespeare", "Miguel de Cervantes", "Eça de Queirós"], correct: 2 },
    { question: "Qual é a moeda oficial do Japão?", answers: ["Yuan", "Won", "Iene", "Rupia"], correct: 2 },
    { question: "Em que ano o Titanic afundou?", answers: ["1910", "1912", "1914", "1920"], correct: 1 },
    { question: "Quantos lados tem um hexágono?", answers: ["4", "5", "6", "8"], correct: 2 },
    { question: "Qual foi a primeira rede social a se tornar popular?", answers: ["Facebook", "Orkut", "MySpace", "Twitter"], correct: 2 },
    { question: "Quem descobriu o Brasil?", answers: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães", "Vasco da Gama"], correct: 0 },
    { question: "Qual país é conhecido como a Terra do Sol Nascente?", answers: ["China", "Coreia do Sul", "Japão", "Tailândia"], correct: 2 },
    { question: "Quem inventou a lâmpada elétrica?", answers: ["Nikola Tesla", "Benjamin Franklin", "Thomas Edison", "Alexander Graham Bell"], correct: 2 },
    { question: "Qual é o animal mais rápido do mundo?", answers: ["Guepardo", "Falcão-peregrino", "Leopardo", "Águia"], correct: 1 },
    { question: "Qual é o nome do protagonista de 'O Senhor dos Anéis'?", answers: ["Frodo", "Gandalf", "Aragorn", "Sam"], correct: 0 },
    { question: "Quantas cores tem um arco-íris?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Qual é o maior osso do corpo humano?", answers: ["Fêmur", "Tíbia", "Úmero", "Radio"], correct: 0 },
    { question: "Qual país venceu a Copa do Mundo de 2014?", answers: ["Brasil", "Argentina", "Alemanha", "Espanha"], correct: 2 },
    { question: "Qual é o nome do processo pelo qual as plantas produzem seu alimento?", answers: ["Respiração", "Fermentação", "Fotossíntese", "Germinação"], correct: 2 },
    { question: "Quem escreveu 'O Pequeno Príncipe'?", answers: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Machado de Assis", "Hans Christian Andersen"], correct: 0 },
    { question: "Qual é o maior mamífero do mundo?", answers: ["Elefante", "Baleia-azul", "Hipopótamo", "Rinoceronte"], correct: 1 },
    { question: "Quem foi o primeiro presidente do Brasil?", answers: ["Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek"], correct: 0 },
    { question: "Qual elemento químico é essencial para a respiração celular?", answers: ["Hidrogênio", "Oxigênio", "Nitrogênio", "Carbono"], correct: 1 },
    { question: "Qual a capital do Canadá?", answers: ["Toronto", "Montreal", "Ottawa", "Vancouver"], correct: 2 },
    { question: "Quem descobriu a penicilina?", answers: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Galileu Galilei"], correct: 1 },
    { question: "Quem fundou a Microsoft?", answers: ["Steve Jobs", "Mark Zuckerberg", "Elon Musk", "Bill Gates"], correct: 3 },
    { question: "Qual é a montanha mais alta do mundo?", answers: ["K2", "Everest", "Monte McKinley", "Kilimanjaro"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Função para gerar perguntas aleatórias
function getRandomQuestions() {
    selectedQuestions = [];
    const shuffled = questions.sort(() => 0.5 - Math.random()); // Embaralha as perguntas
    selectedQuestions = shuffled.slice(0, 10); // Seleciona 10 perguntas aleatórias
}

// Função para carregar a pergunta atual no modal
function loadQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = `
        <p><strong>${question.question}</strong></p>
        ${question.answers.map((answer, index) => `
            <div>
                <input type="radio" name="answer" id="answer${index}" value="${index}">
                <label for="answer${index}">${answer}</label>
            </div>
        `).join('')}
    `;
}

// Função para mostrar a pontuação
function showResults() {
    let message = '';
    const percentage = (score / selectedQuestions.length) * 100;
    if (percentage >= 80) {
        message = 'Parabéns! Você fez um ótimo trabalho!';
    } else {
        message = 'Você pode melhorar. Tente novamente!';
    }

    document.getElementById('quizContent').innerHTML = `
        <p><strong>Você acertou ${score} de ${selectedQuestions.length} perguntas!</strong></p>
        <p>${message}</p>
    `;
    document.getElementById('nextBtn').style.display = 'none'; // Esconde o botão "Próxima" no final
}

// Função para verificar a resposta e passar para a próxima pergunta
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        const question = selectedQuestions[currentQuestionIndex];
        if (answerIndex === question.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

// Inicializa o quiz
document.getElementById('quizBtn').addEventListener('click', () => {
    getRandomQuestions();
    loadQuestion();
    const quizModal = new bootstrap.Modal(document.getElementById('quizModal'));
    quizModal.show();
});

document.getElementById('nextBtn').addEventListener('click', checkAnswer);
// Lista de perguntas completa (50 perguntas, já existente)
const perguntas = [
    { pergunta: "Qual é o maior planeta do sistema solar?", opcoes: ["Terra", "Marte", "Júpiter", "Saturno"], resposta: "Júpiter" },
    { pergunta: "Quem foi o primeiro homem a pisar na Lua?", opcoes: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], resposta: "Neil Armstrong" },
    { pergunta: "Quantas Copas do Mundo a Seleção Brasileira de Futebol já venceu?", opcoes: ["3", "4", "5", "6"], resposta: "5" },
    { pergunta: "Qual é o nome do vocalista da banda Queen?", opcoes: ["Mick Jagger", "Freddie Mercury", "Elton John", "David Bowie"], resposta: "Freddie Mercury" },
    { pergunta: "Qual é o metal mais abundante na crosta terrestre?", opcoes: ["Ferro", "Cobre", "Alumínio", "Ouro"], resposta: "Alumínio" },
    { pergunta: "Em que ano foi lançado o primeiro iPhone?", opcoes: ["2005", "2007", "2010", "2012"], resposta: "2007" },
    { pergunta: "Qual destes filmes ganhou o Oscar de Melhor Filme em 1994?", opcoes: ["Titanic", "Forrest Gump", "Pulp Fiction", "O Rei Leão"], resposta: "Forrest Gump" },
    { pergunta: "Qual é o maior oceano do mundo?", opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"], resposta: "Pacífico" },
    { pergunta: "Quem escreveu a teoria da relatividade?", opcoes: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"], resposta: "Albert Einstein" },
    { pergunta: "Qual é o nome do protagonista da série Breaking Bad?", opcoes: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"], resposta: "Walter White" },
    { pergunta: "Quantos ossos tem o corpo humano adulto?", opcoes: ["206", "210", "185", "198"], resposta: "206" },
    { pergunta: "Qual país sediou a Copa do Mundo de 2018?", opcoes: ["Brasil", "Rússia", "França", "Alemanha"], resposta: "Rússia" },
    { pergunta: "Qual animal é conhecido por sua habilidade de mudar de cor?", opcoes: ["Polvo", "Camaleão", "Arraia", "Lula"], resposta: "Camaleão" },
    { pergunta: "Qual é o símbolo químico do ouro?", opcoes: ["Au", "Ag", "Hg", "Fe"], resposta: "Au" },
    { pergunta: "Qual é o nome do maior deserto do mundo?", opcoes: ["Sahara", "Kalahari", "Atacama", "Gobi"], resposta: "Sahara" },
    { pergunta: "Quem pintou a Mona Lisa?", opcoes: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Van Gogh"], resposta: "Leonardo da Vinci" },
    { pergunta: "Qual planeta é conhecido como Estrela D'Alva?", opcoes: ["Vênus", "Marte", "Mercúrio", "Netuno"], resposta: "Vênus" },
    { pergunta: "Quem é o autor de 'Dom Quixote'?", opcoes: ["Machado de Assis", "William Shakespeare", "Miguel de Cervantes", "Eça de Queirós"], resposta: "Miguel de Cervantes" },
    { pergunta: "Qual é a moeda oficial do Japão?", opcoes: ["Yuan", "Won", "Iene", "Rupia"], resposta: "Iene" },
    { pergunta: "Em que ano o Titanic afundou?", opcoes: ["1910", "1912", "1914", "1920"], resposta: "1912" },
    { pergunta: "Quantos lados tem um hexágono?", opcoes: ["4", "5", "6", "8"], resposta: "6" },
    { pergunta: "Qual foi a primeira rede social a se tornar popular?", opcoes: ["Facebook", "Orkut", "MySpace", "Twitter"], resposta: "MySpace" },
    { pergunta: "Quem descobriu o Brasil?", opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães", "Vasco da Gama"], resposta: "Pedro Álvares Cabral" },
    { pergunta: "Qual país é conhecido como a Terra do Sol Nascente?", opcoes: ["China", "Coreia do Sul", "Japão", "Tailândia"], resposta: "Japão" },
    { pergunta: "Quem inventou a lâmpada elétrica?", opcoes: ["Nikola Tesla", "Benjamin Franklin", "Thomas Edison", "Alexander Graham Bell"], resposta: "Thomas Edison" },
    { pergunta: "Qual é o animal mais rápido do mundo?", opcoes: ["Guepardo", "Falcão-peregrino", "Leopardo", "Águia"], resposta: "Falcão-peregrino" },
    { pergunta: "Qual é o nome do protagonista de 'O Senhor dos Anéis'?", opcoes: ["Frodo", "Gandalf", "Aragorn", "Sam"], resposta: "Frodo" },
    { pergunta: "Quantas cores tem um arco-íris?", opcoes: ["5", "6", "7", "8"], resposta: "7" },
    { pergunta: "Qual é o maior osso do corpo humano?", opcoes: ["Fêmur", "Tíbia", "Úmero", "Radio"], resposta: "Fêmur" },
    { pergunta: "Qual país venceu a Copa do Mundo de 2014?", opcoes: ["Brasil", "Argentina", "Alemanha", "Espanha"], resposta: "Alemanha" },
    { pergunta: "Qual é o nome do processo pelo qual as plantas produzem seu alimento?", opcoes: ["Respiração", "Fermentação", "Fotossíntese", "Germinação"], resposta: "Fotossíntese" },
    { pergunta: "Quem escreveu 'O Pequeno Príncipe'?", opcoes: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Machado de Assis", "Hans Christian Andersen"], resposta: "Antoine de Saint-Exupéry" },
    { pergunta: "Qual é o maior mamífero do mundo?", opcoes: ["Elefante", "Baleia-azul", "Hipopótamo", "Rinoceronte"], resposta: "Baleia-azul" },
    { pergunta: "Quem foi o primeiro presidente do Brasil?", opcoes: ["Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek"], resposta: "Deodoro da Fonseca" },
    { pergunta: "Qual elemento químico é essencial para a respiração celular?", opcoes: ["Hidrogênio", "Oxigênio", "Nitrogênio", "Carbono"], resposta: "Oxigênio" },
    { pergunta: "Qual a capital do Canadá?", opcoes: ["Toronto", "Montreal", "Ottawa", "Vancouver"], resposta: "Ottawa" },
    { pergunta: "Quem descobriu a penicilina?", opcoes: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Galileu Galilei"], resposta: "Alexander Fleming" },
    { pergunta: "Quem fundou a Microsoft?", opcoes: ["Steve Jobs", "Mark Zuckerberg", "Elon Musk", "Bill Gates"], resposta: "Bill Gates" },
    { pergunta: "Qual é a montanha mais alta do mundo?", opcoes: ["K2", "Everest", "Monte McKinley", "Kilimanjaro"], resposta: "Everest" }
];


// Função para sortear 10 perguntas aleatórias
function sortearPerguntas(perguntas, quantidade) {
    let perguntasSorteadas = [];
    let indicesUsados = new Set();

    while (perguntasSorteadas.length < quantidade) {
        let index = Math.floor(Math.random() * perguntas.length);
        if (!indicesUsados.has(index)) {
            perguntasSorteadas.push(perguntas[index]);
            indicesUsados.add(index);
        }
    }
    return perguntasSorteadas;
}

// Armazena as 10 perguntas para esta rodada
let perguntasRodada = sortearPerguntas(perguntas, 10);
let indiceAtual = 0;
let pontuacao = 0;

// Função para exibir a pergunta atual
function exibirPergunta() {
    if (indiceAtual < perguntasRodada.length) {
        let perguntaAtual = perguntasRodada[indiceAtual];
        document.getElementById("pergunta").innerText = perguntaAtual.pergunta;

        let opcoesHtml = "";
        perguntaAtual.opcoes.forEach(opcao => {
            opcoesHtml += `<button onclick="verificarResposta('${opcao}')">${opcao}</button>`;
        });

        document.getElementById("opcoes").innerHTML = opcoesHtml;
    } else {
        exibirResultado();
    }
}

// Função para verificar a resposta do usuário
function verificarResposta(respostaEscolhida) {
    let perguntaAtual = perguntasRodada[indiceAtual];

    if (respostaEscolhida === perguntaAtual.resposta) {
        pontuacao++;
    }

    indiceAtual++;
    exibirPergunta();
}

// Exibe a pontuação final
function exibirResultado() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>Você acertou ${pontuacao} de 10 perguntas!</p>
        <button onclick="reiniciarQuiz()">Tentar novamente</button>
    `;
}

// Reinicia o quiz com novas perguntas
function reiniciarQuiz() {
    perguntasRodada = sortearPerguntas(perguntas, 10);
    indiceAtual = 0;
    pontuacao = 0;
    exibirPergunta();
}

// Inicia o quiz
exibirPergunta();

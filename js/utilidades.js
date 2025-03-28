//Função conversor de moedas

async function converter() {
    let valorReais = parseFloat(document.getElementById('valorReais').value);
    let moeda = document.getElementById('moeda').value;

    if (!valorReais || valorReais <= 0) {
        alert("Por favor, insira um valor válido em Reais.");
        return;
    }

    let cotacaoDolar = 0.18; // Default em caso de falha na API
    let cotacaoEuro = 0.16; // Default para Euro

    // Fazendo requisição para a API de câmbio
    if (moeda === "dolar" || moeda === "euro") {
        try {
            const resposta = await fetch('https://v6.exchangerate-api.com/v6/633a9c470ef2bc46424a0d2e/latest/BRL');
            const dados = await resposta.json();
            if (dados.result === "success") {
                cotacaoDolar = dados.conversion_rates.USD;
                cotacaoEuro = dados.conversion_rates.EUR;
            }
        } catch (erro) {
            console.error("Erro ao obter a cotação:", erro);
        }
    }

    let resultado = 0;
    if (moeda === 'dolar') {
        resultado = valorReais * cotacaoDolar;
    } else if (moeda === 'euro') {
        resultado = valorReais * cotacaoEuro;
    }

    document.getElementById('resultadoConversao').innerHTML = `Resultado: ${resultado.toFixed(2)} ${moeda.toUpperCase()}`;
    mostrarMensagemAgradecimento();

    // Exibir a mensagem de agradecimento
    document.getElementById('mensagemAgradecimento').style.display = 'block';
}


// Função para gerar uma senha aleatória
function gerarSenha() {
    const tamanhoSenha = document.getElementById('tamanhoSenha').value;

    // Caracteres base para a senha
    let caracteresPermitidos = '';

    // Adicionar letras maiúsculas se o usuário marcar a opção
    if (document.getElementById('usarLetrasMaiusculas').checked) {
        caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // Adicionar letras minúsculas se o usuário marcar a opção
    if (document.getElementById('usarLetrasMinusculas').checked) {
        caracteresPermitidos += 'abcdefghijklmnopqrstuvwxyz';
    }

    // Adicionar números se o usuário marcar a opção
    if (document.getElementById('usarNumeros').checked) {
        caracteresPermitidos += '0123456789';
    }

    // Adicionar caracteres especiais se o usuário marcar a opção
    if (document.getElementById('usarCaracteresEspeciais').checked) {
        caracteresPermitidos += '!@#$%^&*()_+-=[]{}|;:,.<>?/`~\\';
    }

    // Verificar se ao menos uma opção foi selecionada
    if (caracteresPermitidos === '') {
        alert('Por favor, selecione ao menos uma opção para a senha!');
        return;
    }

    // Gerar a senha aleatória
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos.charAt(indiceAleatorio);
    }

    // Exibir a senha gerada no campo de texto
    document.getElementById('senhaGerada').value = senha;

    // Exibir a mensagem de agradecimento
    document.getElementById('mensagemAgradecimento').style.display = 'block';
}



// Função para calcular e exibir resultado
function calcular() {
    // Pega os valores dos campos num1 e num2
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    let resultado = 0;
    let mensagem = '';

    // Lógica para realizar a operação escolhida
    switch (operacao) {
        case 'somar':
            resultado = num1 + num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: Divisão por zero!';
            }
            break;
        case 'raiz':
            resultado = Math.sqrt(num1);
            break;
        case 'mmc':
            resultado = calcularMMC(num1, num2); // Lógica para MMC
            break;
        case 'mdc':
            resultado = calcularMDC(num1, num2); // Lógica para MDC
            break;
        default:
            resultado = 'Selecione uma operação válida!';
    }

    // Exibir o resultado
    document.getElementById('resultadoCalculadora').innerText = 'Resultado: ' + resultado;

   
}

// Função para calcular o MDC (Máximo Divisor Comum)
function calcularMDC(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// Função para calcular o MMC (Mínimo Múltiplo Comum)
function calcularMMC(a, b) {
    return (a * b) / calcularMDC(a, b);
}

// Exibir a mensagem de agradecimento
document.getElementById('mensagemAgradecimento').style.display = 'block';

// mensagem na tela
function mostrarMensagemAgradecimento() {
    document.getElementById('mensagemFinal').style.display = 'block';
    setTimeout(() => {
        document.getElementById('mensagemFinal').style.display = 'none';
    }, 3000); // A mensagem some após 3 segundos
}



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-text");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Verifica ao carregar a página
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-text, .slide-in");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Verifica ao carregar a página
});

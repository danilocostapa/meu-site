
$(document).ready(function () {
    // Botão para subir ao topo
    $('#btn-topo').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});



// Aguarda o DOM carregar para garantir que os elementos existem
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleTheme');

    // Função para alternar entre os temas
    function toggleTheme() {
        document.body.classList.toggle('light-theme');

        // Salva o tema no localStorage
        const isLightTheme = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    }

    // Aplica o tema salvo no localStorage ao carregar
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }

    // Ativa o evento de clique no botão
    toggleThemeBtn.addEventListener('click', toggleTheme);
});



const curiosidades = [
    "O primeiro computador pesava mais de 27 toneladas.",
    "Você sabia que o Google foi originalmente chamado de 'Backrub'?",
    "O primeiro e-mail foi enviado em 1971.",
    "Programadores passam 70% do tempo depurando código.",
    "O primeiro bug de computador foi um inseto real preso em um hardware.",
    "Mais de 90% das moedas digitais do mundo são controladas por apenas 10% dos investidores.",
    "A senha mais comum no mundo ainda é '123456'.",
    "O primeiro domínio registrado foi 'symbolics.com' em 1985.",
    "Mais de 500 horas de vídeo são carregadas no YouTube a cada minuto.",
    "A internet mundial pesa aproximadamente o mesmo que um morango médio.",
    "O primeiro telefone celular pesava mais de 1 kg.",
    "O emoji mais usado do mundo é 😂 (rosto chorando de rir).",
    "A Apple vendeu 300 mil iPads no primeiro dia de lançamento em 2010.",
    "A linguagem de programação Python foi nomeada em homenagem ao grupo de comédia Monty Python.",
    "O primeiro site da história ainda está online: info.cern.ch.",
    "A Wikipédia tem mais de 6 milhões de artigos em inglês.",
    "O nome 'Bluetooth' vem de um rei viking chamado Harald Bluetooth.",
    "O primeiro tweet da história foi publicado por Jack Dorsey em 2006: 'just setting up my twttr'.",
    "O Windows XP foi lançado em 2001 e ainda é usado em alguns lugares críticos.",
    "Cerca de 8 bilhões de dispositivos estão conectados à Internet atualmente.",
    "A NASA ainda usa disquetes em alguns sistemas antigos.",
    "A primeira câmera digital foi inventada em 1975 e tinha apenas 0,01 megapixels.",
    "O Google processa mais de 8,5 bilhões de pesquisas por dia.",
    "O primeiro vírus de computador se chamava 'Creeper' e foi criado em 1971.",
    "Mais de 5 bilhões de emojis são enviados todos os dias no Facebook Messenger.",
    "As primeiras mensagens SMS foram enviadas em 1992.",
    "O iPhone original não tinha suporte a copiar e colar.",
    "O Facebook foi originalmente chamado de 'TheFacebook'.",
    "A primeira senha de computador conhecida foi criada nos anos 60 no MIT.",
    "Mais de 80% do código do Android é baseado em Linux.",
    "A primeira webcam foi criada para monitorar uma cafeteira.",
    "Bill Gates escreveu um programa de 'jogo da velha' aos 13 anos.",
    "O logotipo do Android foi inspirado em um banheiro público.",
    "O primeiro mouse de computador era feito de madeira.",
    "A primeira loja online foi lançada em 1992 e vendia pizza.",
    "A Lua tem Wi-Fi em algumas áreas graças a satélites.",
    "O Google Earth já mapeou mais de 98% do planeta.",
    "A senha '123456' ainda é usada por milhões de pessoas.",
    "O iPhone foi inspirado no iPod.",
    "A primeira transmissão de rádio foi em 1906.",
    "Elon Musk planeja levar humanos a Marte até 2030.",
    "A Samsung começou como uma empresa de exportação de peixes.",
    "A Netflix começou como um serviço de aluguel de DVDs.",
    "Existem mais de 1,8 bilhão de sites na internet.",
    "O primeiro código de barras foi escaneado em 1974.",
    "Os primeiros laptops pesavam mais de 10 kg.",
    "A Amazon começou como uma livraria online.",
    "Existem mais de 4 bilhões de usuários de internet no mundo.",
    "A senha mais longa já usada tinha 63 caracteres.",
    "A tecnologia Wi-Fi foi baseada em um experimento de ondas de rádio.",
    "As impressoras 3D já imprimiram casas inteiras.",
    "O Google tradutor suporta mais de 100 idiomas.",
    "O TikTok foi lançado em 2016 e já tem bilhões de usuários.",
    "A primeira calculadora mecânica foi inventada em 1642 por Blaise Pascal."
];

function exibirCuriosidade() {
    const random = Math.floor(Math.random() * curiosidades.length);
    document.getElementById('curiosidade').textContent = curiosidades[random];
}

// Atualiza a cada 5 segundos
setInterval(exibirCuriosidade, 9000);
exibirCuriosidade();



function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let startTime = null;
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}
animateValue("projetos", 0, 50, 3000);
animateValue("clientes", 0, 150, 3000);
animateValue("anos", 0, 5, 3000);



$(document).ready(function() {
    // Botão para subir ao topo
    $('#btn-topo').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
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
        "Programadores passam 70% do tempo depurando código."
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


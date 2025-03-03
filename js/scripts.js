
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


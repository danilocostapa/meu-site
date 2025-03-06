        
    // Sua chave da NewsAPI
    const apiKey = '5e8543eaed144748b72c29a391942e8a';
    
    document.addEventListener('DOMContentLoaded', () => {
        const openNewsBtn = document.getElementById('openNewsBtn');
        const newsCategory = document.getElementById('newsCategory');
        const newsContent = document.getElementById('newsContent');
        const newsModal = new bootstrap.Modal(document.getElementById('newsModal'));

        // Função para buscar notícias da API
        async function fetchNews(category = 'general') {
            newsContent.innerHTML = 'Carregando notícias...';
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=${apiKey}`);
                const data = await response.json();

                if (!data.articles || data.articles.length === 0) {
                    newsContent.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
                    return;
                }

                // Renderizar as notícias
                newsContent.innerHTML = data.articles.map(article => `
                    <div class="mb-3">
                        <h6>${article.title}</h6>
                        <p>${article.description || 'Sem descrição disponível.'}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-sm btn-primary">Ler mais</a>
                        <hr>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Erro ao buscar notícias:', error);
                newsContent.innerHTML = '<p>Erro ao carregar notícias. Tente novamente mais tarde.</p>';
            }
        }

        // Abrir modal e carregar notícias ao clicar no botão
        openNewsBtn.addEventListener('click', () => {
            fetchNews();
            newsModal.show();
        });

        // Atualizar notícias ao selecionar uma nova categoria
        newsCategory.addEventListener('change', () => {
            fetchNews(newsCategory.value);
        });
    });

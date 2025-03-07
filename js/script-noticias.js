document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '00d2095bb94511259d83608726a14328';
    const openNewsBtn = document.getElementById('openNewsBtn');
    const newsCategory = document.getElementById('newsCategory');
    const newsContent = document.getElementById('newsContent');
    const newsModal = new bootstrap.Modal(document.getElementById('newsModal'));

    // Função para buscar notícias
    async function fetchNews(category = 'general') {
        if (!newsContent) return;

        newsContent.innerHTML = '<p>🔎 Carregando notícias...</p>';
        try {
            const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=pt&category=${category}&apikey=${apiKey}`);
            if (!response.ok) throw new Error('Falha na resposta da API');
            
            const data = await response.json();

            if (!data.articles || data.articles.length === 0) {
                newsContent.innerHTML = '<p>❌ Nenhuma notícia encontrada.</p>';
                return;
            }

            // Renderizar as notícias no modal
            newsContent.innerHTML = data.articles.map(article => `
                <div class="mb-4">
                    <h5>${article.title}</h5>
                    ${article.image ? `<img src="${article.image}" alt="Imagem da notícia" class="img-fluid mb-2">` : ''}
                    <p>${article.description || '📌 Sem descrição disponível.'}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-sm btn-primary">📰 Ler mais</a>
                    <hr>
                </div>
            `).join('');
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
            newsContent.innerHTML = '<p>⚠️ Erro ao carregar notícias. Tente novamente mais tarde.</p>';
        }
    }

    // Evento para abrir o modal e carregar as notícias
    openNewsBtn?.addEventListener('click', () => {
        fetchNews();
        newsModal.show();
    });

    // Atualizar as notícias ao mudar a categoria
    newsCategory?.addEventListener('change', () => {
        fetchNews(newsCategory.value);
    });
});

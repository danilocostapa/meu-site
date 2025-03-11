// Função para abrir o modal
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openReviewModal');
    const reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'));

    // Abrir o modal ao clicar no botão
    openModalBtn.addEventListener('click', function () {
        reviewModal.show();
    });

    // Capturar e enviar a avaliação (Exemplo - adaptar com Firebase depois)
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value || 'Anônimo';
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        if (rating < 1 || rating > 5) {
            alert('A avaliação deve ser entre 1 e 5 estrelas.');
            return;
        }

        console.log('Enviando avaliação:', { name, rating, comment });
        alert('Avaliação enviada com sucesso!');
        reviewModal.hide();
        reviewForm.reset();
    });
});

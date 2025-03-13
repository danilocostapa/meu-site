// Inicializar o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAstetZ5BwxBZIuWtz9iJgLVneja-IIzOY",
    authDomain: "site-danilo-be7df.firebaseapp.com",
    projectId: "site-danilo-be7df",
    storageBucket: "site-danilo-be7df.firebasestorage.app",
    messagingSenderId: "728725082864",
    appId: "1:728725082864:web:720f7fcfd223b1d9c8a835"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Enviar avaliação para o Firestore
function enviarAvaliacao() {
    const nome = document.getElementById('nome').value || 'Anônimo';
    const mensagem = document.getElementById('mensagem').value;
    const estrelas = document.querySelector('input[name="estrelas"]:checked')?.value || 5;

    if (!mensagem.trim()) {
        alert('Por favor, insira uma mensagem antes de enviar.');
        return;
    }

    db.collection('avaliacoes').add({
        nome: nome,
        mensagem: mensagem,
        estrelas: parseInt(estrelas),
        aprovado: false, // Somente avaliações aprovadas serão exibidas
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert('Avaliação enviada com sucesso! Aguarde aprovação.');
        document.getElementById('formAvaliacao').reset();
    }).catch((error) => {
        console.error('Erro ao enviar avaliação:', error);
    });
}

// Exibir avaliações aprovadas
function carregarAvaliacoes() {
    const listaAvaliacoes = document.getElementById('listaAvaliacoes');
    listaAvaliacoes.innerHTML = '';

    db.collection('avaliacoes')
        .where('aprovado', '==', true)
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
            listaAvaliacoes.innerHTML = '';
            snapshot.forEach((doc) => {
                const { nome, mensagem, estrelas } = doc.data();
                listaAvaliacoes.innerHTML += `
                    <div class="card mb-3" style="background-color: #1a1a1a; color: white; border: 1px solid #0d6efd;">
                        <div class="card-body">
                            <h5 class="card-title">${nome}</h5>
                            <p class="card-text">${mensagem}</p>
                            <p class="card-text">${'⭐'.repeat(estrelas)}</p>
                        </div>
                    </div>
                `;
            });
        });
}

document.addEventListener('DOMContentLoaded', carregarAvaliacoes);

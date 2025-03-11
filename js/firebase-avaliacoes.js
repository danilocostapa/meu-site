// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCvq_G-o42i22M8n6ymGmA6MKQ43DVD8tk",
    authDomain: "site-danilo-4fa65.firebaseapp.com",
    projectId: "site-danilo-4fa65",
    storageBucket: "site-danilo-4fa65.firebasestorage.app",
    messagingSenderId: "262680998215",
    appId: "1:262680998215:web:3dd16de079fa5827c11c62"
  };
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Função para enviar a avaliação para o Firebase
  function enviarAvaliacao(nome, avaliacao, estrelas) {
    db.collection("avaliacoes").add({
      nome: nome || "Anônimo",
      avaliacao: avaliacao,
      estrelas: estrelas,
      aprovado: false, // Inicia como não aprovado
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      alert("Avaliação enviada com sucesso! Aguarde a aprovação.");
      document.getElementById('avaliacaoForm').reset();
    })
    .catch((error) => {
      console.error("Erro ao enviar a avaliação: ", error);
      alert("Erro ao enviar a avaliação. Tente novamente.");
    });
  }
  
  // Evento para capturar e enviar a avaliação
  document.getElementById('enviarAvaliacao').addEventListener('click', (e) => {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const avaliacao = document.getElementById('avaliacao').value.trim();
    const estrelas = document.querySelector('input[name="rating"]:checked')?.value || 0;
  
    if (!avaliacao) {
      alert("Por favor, escreva sua avaliação.");
      return;
    }
  
    enviarAvaliacao(nome, avaliacao, parseInt(estrelas));
  });
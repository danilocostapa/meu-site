// Certifique-se de que o Firebase está inicializado no firebase-avaliacoes.js

document.addEventListener("DOMContentLoaded", () => {
    const avaliacoesContainer = document.getElementById("avaliacoes-container");

    // Referência ao Firestore
    const db = firebase.firestore();

    // Buscar avaliações aprovadas
    db.collection("avaliacoes")
      .where("aprovado", "==", true) // Apenas as avaliações aprovadas
      .get()
      .then((querySnapshot) => {
          if (querySnapshot.empty) {
              avaliacoesContainer.innerHTML = "<p>Sem avaliações no momento.</p>";
              return;
          }

          querySnapshot.forEach((doc) => {
              const { nome, avaliacao, estrelas } = doc.data();
              const nomeExibido = nome || "Anônimo";

              // Criar o elemento da avaliação
              const avaliacaoHTML = `
                <div class="avaliacao-card">
                    <p><strong>${nomeExibido}</strong></p>
                    <p>${avaliacao}</p>
                    <p>⭐ ${"⭐".repeat(estrelas)}</p>
                </div>
              `;
              
              avaliacoesContainer.innerHTML += avaliacaoHTML;
          });
      })
      .catch((error) => {
          console.error("Erro ao buscar avaliações: ", error);
          avaliacoesContainer.innerHTML = "<p>Erro ao carregar avaliações.</p>";
      });
});
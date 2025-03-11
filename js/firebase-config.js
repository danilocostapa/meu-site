// firebase-config.js

// Importando as funções necessárias do SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvq_G-o42i22M8n6ymGmA6MKQ43DVD8tk",
  authDomain: "site-danilo-4fa65.firebaseapp.com",
  projectId: "site-danilo-4fa65",
  storageBucket: "site-danilo-4fa65.appspot.com",
  messagingSenderId: "262680998215",
  appId: "1:262680998215:web:3dd16de079fa5827c11c62"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = getFirestore(app);

export { db };

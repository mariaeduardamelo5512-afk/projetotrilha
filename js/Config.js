// Importa o Firebase pela internet
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlPWkjOJ3dzRFhgISHyASVqMCoYdTniho",
  authDomain: "projetotrilha-861da.firebaseapp.com",
  projectId: "projetotrilha-861da",
  storageBucket: "projetotrilha-861da.firebasestorage.app",
  messagingSenderId: "187839105843",
  appId: "1:187839105843:web:51007f1777b38131448c46"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o banco de dados Firestore
const db = getFirestore(app);

// Exporta para outros arquivos
export { db };
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "projetotrilha-861da.firebaseapp.com",
    projectId: "projetotrilha-861da",
    storageBucket: "projetotrilha-861da.firebasestorage.app",
    messagingSenderId: "187839105843",
    appId: "1:187839105843:web:51007f1777b38131448c46"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
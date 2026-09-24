// Importe os módulos necessários do SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Credenciais do seu projeto Firebase (nragenda-193db)
const firebaseConfig = {
    apiKey: "AlzaSyCgnseZiq_mJ6JNIFMwgyn9KNQbR8-Fk-g",
    authDomain: "nragenda-193db.firebaseapp.com",
    projectId: "nragenda-193db",
    storageBucket: "nragenda-193db.appspot.com",
    messagingSenderId: "25625156691",
    appId: "1:25625156691:web:0dad4357f0cad2268baa6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    deleteDoc, 
    updateDoc, 
    onSnapshot 
};

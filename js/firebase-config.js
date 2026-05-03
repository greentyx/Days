// ── FIREBASE CONFIG ──
// Substitua com as suas credenciais do Firebase Console
// https://console.firebase.google.com



const firebaseConfig = {
  apiKey: "AIzaSyCS8GquSfx2zSiSxnSQo02y3iwxdQWp9ZU",
  authDomain: "days-one.firebaseapp.com",
  projectId: "days-one",
  storageBucket: "days-one.firebasestorage.app",
  messagingSenderId: "856398282137",
  appId: "1:856398282137:web:ee66ddf02e9caf55d22708",
  measurementId: "G-YL1V2MVM8J"
};

// Inicializa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, doc, setDoc, getDoc, collection, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy };

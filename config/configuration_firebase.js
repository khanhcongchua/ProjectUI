// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8ZzKiKywmKgl-7MntjPfDPLva8QIniZM",
    authDomain: "nckh-74c59.firebaseapp.com",
    projectId: "nckh-74c59",
    storageBucket: "nckh-74c59.firebasestorage.app",
    messagingSenderId: "655634424247",
    appId: "1:655634424247:web:b9a3d5d8c1049d9cc90832",
    measurementId: "G-KLQE3NCR93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const dataRef = collection(db, 'LN_DA-TNgay');
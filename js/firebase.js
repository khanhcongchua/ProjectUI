import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8ZzKiKywmKgl-7MntjPfDPLva8QIniZM",
    authDomain: "nckh-74c59.firebaseapp.com",
    projectId: "nckh-74c59",
    storageBucket: "nckh-74c59.firebasestorage.app",
    messagingSenderId: "655634424247",
    appId: "1:655634424247:web:b9a3d5d8c1049d9cc90832",
    measurementId: "G-KLQE3NCR93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addData = async (currentTime, temp, humd) => {
    await addDoc(collection(db, "sensor"), {
        temp,
        humd,
        currentTime,
        timestamp: serverTimestamp()
    });
}


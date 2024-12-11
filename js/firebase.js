import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot, getDocs, getDoc, where } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// import { highTemp7Days, lowTemp7Days } from "./weather.js";

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
const db = getFirestore(app);


const date = new Date();
const today = new Date(date.getTime());

export const addData = async (currentTime, temp, humd) => {
    await addDoc(collection(db, "sensor"), {
        temp,
        humd,
        currentTime,
        timestamp: serverTimestamp()
    });
}


export const listenToSensorData = (callback) => {
    const sensorRef = collection(db, "sensor");

    const q = query(sensorRef, orderBy('timestamp', 'desc'));

    onSnapshot(q, (querySnapshot) => {
        const sensorData = querySnapshot.docs.map(doc => doc.data()).reverse();

        callback(sensorData);
    });
}


export const addDataForWeather7days = async (maxTemp, minTemp, icon, temp, date) => {
    await addDoc(collection(db, "weather7days"), {
        maxTemp,
        minTemp,
        icon,
        temp,
        date,
        currentTime: today.getTime(),
        timestamp: today.toLocaleDateString()
    });
}


export const addDataForWeatherToday = async (maxTemp, minTemp, temp, icon, humidity, solar, titleOfWeather) => {

    await addDoc(collection(db, "weatherToday"), {
        maxTemp,
        minTemp,
        temp,
        icon,
        humidity,
        solar,
        titleOfWeather,
        currentTime: today.getTime(),
        timestamp: today.toLocaleDateString()
    });
}

export const getWeatherToday = async () => {

    let data;

    const q = query(collection(db, "weatherToday"), where('timestamp', '==', today.toLocaleDateString().toString()));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        data = doc.data();
    });

    (data == null) ? data = null : data = data;

    return data;

}


export const getWeather7days = async () => {

    let data;

    const q = query(collection(db, "weather7days"), where('timestamp', '==', today.toLocaleDateString().toString()));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data = doc.data();
    });

    (data == null) ? data = null : data = data;

    return data;

}

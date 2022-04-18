// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASV47v2oT4pCV6qEt6Tp_-PBT_wIqEimA",
    authDomain: "gym-trainer-7b30e.firebaseapp.com",
    projectId: "gym-trainer-7b30e",
    storageBucket: "gym-trainer-7b30e.appspot.com",
    messagingSenderId: "268275773185",
    appId: "1:268275773185:web:ec5506e73c7769106db500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
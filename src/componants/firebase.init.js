// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv2ta80OjxrmlKBfEHElwEQ1gOgOD8ICg",
    authDomain: "my-12th-assignment-toolsbd.firebaseapp.com",
    projectId: "my-12th-assignment-toolsbd",
    storageBucket: "my-12th-assignment-toolsbd.appspot.com",
    messagingSenderId: "863803518951",
    appId: "1:863803518951:web:8d0834691539c6e4da9742",
    measurementId: "G-1XHB0VR7KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB9hbQuLFam73pc346bDqGDWXFy5ynZy8",
    authDomain: "tv-series-project-8b330.firebaseapp.com",
    projectId: "tv-series-project-8b330",
    storageBucket: "tv-series-project-8b330.appspot.com",
    messagingSenderId: "184659302606",
    appId: "1:184659302606:web:790f07e769c046ce02189f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
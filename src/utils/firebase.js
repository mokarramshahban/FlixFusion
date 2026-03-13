// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "flixfusion-6ff84.firebaseapp.com",
  projectId: "flixfusion-6ff84",
  storageBucket: "flixfusion-6ff84.firebasestorage.app",
  messagingSenderId: "526330772280",
  appId: "1:526330772280:web:9d0f572194cbb2cf611fcd",
  measurementId: "G-3BXX47GEYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
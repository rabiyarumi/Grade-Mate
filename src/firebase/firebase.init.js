// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEf12NfJSJVoCaGFrCcanZNx5910Qz-pI",
  authDomain: "grademate-8ebe6.firebaseapp.com",
  projectId: "grademate-8ebe6",
  storageBucket: "grademate-8ebe6.firebasestorage.app",
  messagingSenderId: "568648455735",
  appId: "1:568648455735:web:04af4f99e7d253838dd1b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAix5mXKf7cvvM6Ikr5tV8GPIDQ-Pxfvzc",
    authDomain: "my-project-52ddc.firebaseapp.com",
    projectId: "my-project-52ddc",
    storageBucket: "my-project-52ddc.firebasestorage.app",
    messagingSenderId: "895168685856",
    appId: "1:895168685856:web:45eb0e4bd0bf31755f5945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  export const googleProvider = new GoogleAuthProvider();



export default app;
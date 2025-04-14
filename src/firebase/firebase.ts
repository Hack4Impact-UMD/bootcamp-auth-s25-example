// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAObkm_3EvEnfiHgJiIfpw3OOxwt4H1fqc",
  authDomain: "bootcamp-auth-s25-example.firebaseapp.com",
  projectId: "bootcamp-auth-s25-example",
  storageBucket: "bootcamp-auth-s25-example.firebasestorage.app",
  messagingSenderId: "25725756390",
  appId: "1:25725756390:web:4a057248bd12acd2136c27",
  measurementId: "G-8080S1CHQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


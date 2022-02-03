// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT6ctDaw8bSVeNaSSFUddTXSqAcaXJnCM",
  authDomain: "work2-6049e.firebaseapp.com",
  projectId: "work2-6049e",
  storageBucket: "work2-6049e.appspot.com",
  messagingSenderId: "799406624153",
  appId: "1:799406624153:web:5b0a6b05c7d9c3abe29708",
  measurementId: "G-0QYWXBSPLB"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
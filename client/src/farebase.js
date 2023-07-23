// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import "firebase/firestore";
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiXhyJgrTinlIDSzbqnchGZeqIgSAHnjA",
  authDomain: "amir-e7c35.firebaseapp.com",
  projectId: "amir-e7c35",
  storageBucket: "amir-e7c35.appspot.com",
  messagingSenderId: "832465355577",
  appId: "1:832465355577:web:3feef0aeb57731eb1f9ee8",
  measurementId: "G-1ZVKM9NLFY"
};

// // Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

// export const firebaseDatabase = getDatabase(firebaseApp);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
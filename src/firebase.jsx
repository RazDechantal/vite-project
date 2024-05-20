// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuGXGdvPyIzw_ZRM-U2o-BIbNNz2SAMt0",
  authDomain: "mediumblog-447d9.firebaseapp.com",
  projectId: "mediumblog-447d9",
  storageBucket: "mediumblog-447d9.appspot.com",
  messagingSenderId: "790070336666",
  appId: "1:790070336666:web:0659db8a72f18d1fe85323",
  measurementId: "G-M66PXFRL2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth , db };
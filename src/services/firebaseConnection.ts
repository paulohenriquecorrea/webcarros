// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhHDZGQE0-fGK6IqtqwVgGPf3KZi57awA",
  authDomain: "webcarros-f627a.firebaseapp.com",
  projectId: "webcarros-f627a",
  storageBucket: "webcarros-f627a.firebasestorage.app",
  messagingSenderId: "160984857931",
  appId: "1:160984857931:web:f08662344aeeae66d8fcce",
  measurementId: "G-XT6ZJWDDPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db ,auth, storage}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq9ySay2dlOjfJBlUVpnbBlQSJDoPWP4g",
  authDomain: "aquarum-8c3dc.firebaseapp.com",
  projectId: "aquarum-8c3dc",
  storageBucket: "aquarum-8c3dc.appspot.com",
  messagingSenderId: "250275653520",
  appId: "1:250275653520:web:0a6788563a36c0e56a3515",
  measurementId: "G-3WV1QL44SH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, db, firebase };

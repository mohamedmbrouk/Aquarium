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
  apiKey: "AIzaSyDY44AfN-rajqxhMKTk0S14t2VnRtSx7og",
  authDomain: "aquarium-c0c7f.firebaseapp.com",
  projectId: "aquarium-c0c7f",
  storageBucket: "aquarium-c0c7f.appspot.com",
  messagingSenderId: "183547354253",
  appId: "1:183547354253:web:3297e024b7f00a671b16c4",
  measurementId: "G-MFM4KS3471",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, db, firebase };

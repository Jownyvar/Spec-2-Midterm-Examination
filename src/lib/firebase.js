// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3yZFU-HOPv8Ad-uYKrO7vBlvHzF17rBo",
  authDomain: "gg1firebase-a84df.firebaseapp.com",
  projectId: "gg1firebase-a84df",
  storageBucket: "gg1firebase-a84df.firebasestorage.app",
  messagingSenderId: "1073945421241",
  appId: "1:1073945421241:web:17163b67f13f464de28268",
  measurementId: "G-RN97QNZQJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
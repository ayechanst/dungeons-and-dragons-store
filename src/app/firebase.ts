// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYjXetisxi9c5lI82kjy-v9VOPc1uLnDE",
  authDomain: "dungeons-and-dragons-store.firebaseapp.com",
  projectId: "dungeons-and-dragons-store",
  storageBucket: "dungeons-and-dragons-store.appspot.com",
  messagingSenderId: "45404693622",
  appId: "1:45404693622:web:94b43703a45ec49341ab57",
  measurementId: "G-MYEEVLV9TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

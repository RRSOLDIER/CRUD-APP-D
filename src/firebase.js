// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "vue-firebase-crud-f5598.firebaseapp.com",
  projectId: "vue-firebase-crud-f5598",
  storageBucket: "vue-firebase-crud-f5598.appspot.com",
  messagingSenderId: "539755232580",
  appId: "1:539755232580:web:d0007e70f0f3c0a75a2b11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
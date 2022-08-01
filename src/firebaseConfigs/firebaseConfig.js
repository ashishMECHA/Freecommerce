// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB9fTFUlocbQJRM5WwOMl6Uqsu90enyQoI",
  authDomain: "freecommerce-11ded.firebaseapp.com",
  projectId: "freecommerce-11ded",
  storageBucket: "freecommerce-11ded.appspot.com",
  messagingSenderId: "117410714982",
  appId: "1:117410714982:web:2927a4650f37b7210ce4a7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)

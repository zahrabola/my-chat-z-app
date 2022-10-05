import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvZbBsLNABM7iS9A6xQJbdgEcQUvJw0K4",
  authDomain: "chat-1bd3c.firebaseapp.com",
  projectId: "chat-1bd3c",
  storageBucket: "chat-1bd3c.appspot.com",
  messagingSenderId: "976109382721",
  appId: "1:976109382721:web:dc3167acceda71b5ff6ac0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
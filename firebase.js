// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP8bLIYANpFa5dn2fx-5Zx2Rl7mUF5xyw",
  authDomain: "instareelsclone-fbee9.firebaseapp.com",
  projectId: "instareelsclone-fbee9",
  storageBucket: "instareelsclone-fbee9.appspot.com",
  messagingSenderId: "357836288868",
  appId: "1:357836288868:web:10615c4a86c4048261c071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth,db};
export default app;

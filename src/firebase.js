// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Bi5P9oDRMKsMbaspmjKaeR9TzHwz0kY",
  authDomain: "disney-clone-3b0a6.firebaseapp.com",
  projectId: "disney-clone-3b0a6",
  storageBucket: "disney-clone-3b0a6.appspot.com",
  messagingSenderId: "243577178818",
  appId: "1:243577178818:web:ef5828ae0873171c91495b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getAuth = auth();

export { auth };

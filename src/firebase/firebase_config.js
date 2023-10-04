// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYGKR11nS3sr1JYfq6R5Wf7aAAglpVBjA",
  authDomain: "auth-moha-milon-5d8c2.firebaseapp.com",
  projectId: "auth-moha-milon-5d8c2",
  storageBucket: "auth-moha-milon-5d8c2.appspot.com",
  messagingSenderId: "564384261205",
  appId: "1:564384261205:web:5448947d33e7c4ef1160dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
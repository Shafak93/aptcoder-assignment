// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgWTfstNPw1sSimPSq--hnBzHh6iW5CFA",
  authDomain: "aptcoder-8b33e.firebaseapp.com",
  projectId: "aptcoder-8b33e",
  storageBucket: "aptcoder-8b33e.appspot.com",
  messagingSenderId: "28275268093",
  appId: "1:28275268093:web:59d6dc9361023c365ee194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw2s8ReBL8s-AmTvrBFS5fgCMlK4upyF4",
  authDomain: "clima-6f90e.firebaseapp.com",
  projectId: "clima-6f90e",
  storageBucket: "clima-6f90e.appspot.com",
  messagingSenderId: "18571349168",
  appId: "1:18571349168:web:096dcb62042acb3bc23f75"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)
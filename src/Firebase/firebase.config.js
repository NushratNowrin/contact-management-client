// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1KR-i5EJXhpuj5XkbgeAam01OOTYCGoU",
  authDomain: "contacts-management-d50aa.firebaseapp.com",
  projectId: "contacts-management-d50aa",
  storageBucket: "contacts-management-d50aa.appspot.com",
  messagingSenderId: "608924889553",
  appId: "1:608924889553:web:fbb0ca758f6f2397cab0f0",
  measurementId: "G-K3V09YDW9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
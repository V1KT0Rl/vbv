// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQI4GLg1IKZ62SYTOpD3GL199sCJHa4bA",
  authDomain: "vbuyv-7489d.firebaseapp.com",
  projectId: "vbuyv-7489d",
  storageBucket: "vbuyv-7489d.firebasestorage.app",
  messagingSenderId: "606367386021",
  appId: "1:606367386021:web:aa3a92af973348bbab004c",
  measurementId: "G-28P16WXPNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

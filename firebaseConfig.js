// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazHx0SF3GBsxK2TXKkNWOhAH2xoF7VHQ",
  authDomain: "dateradar-d33dd.firebaseapp.com",
  projectId: "dateradar-d33dd",
  storageBucket: "dateradar-d33dd.appspot.com",
  messagingSenderId: "317932265469",
  appId: "1:317932265469:web:02db099465b7aeb5a68394",
  measurementId: "G-QP85BY5QHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

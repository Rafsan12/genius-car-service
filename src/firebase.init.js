// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIhpk89X_qgeNGUmZW6bQQuIWyo_TLpw",
  authDomain: "genius-car-services-a53e7.firebaseapp.com",
  projectId: "genius-car-services-a53e7",
  storageBucket: "genius-car-services-a53e7.appspot.com",
  messagingSenderId: "910355983576",
  appId: "1:910355983576:web:092cdfc28b08a373c83bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

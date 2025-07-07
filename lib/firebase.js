// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNU72YI0TQkBh5uaBW5_Lk6uQh44_l-cY",
  authDomain: "images-11d47.firebaseapp.com",
  projectId: "images-11d47",
  storageBucket: "images-11d47.firebasestorage.app",
  messagingSenderId: "1096391894788",
  appId: "1:1096391894788:web:d1c58ccaa213a0bc5c9251",
  measurementId: "G-YZJYNHFP0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
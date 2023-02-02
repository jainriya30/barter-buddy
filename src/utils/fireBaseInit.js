// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeUYR2wiRGDhKFk0kioWlEr_uB5RN96gM",
  authDomain: "barterbuddy-d5711.firebaseapp.com",
  projectId: "barterbuddy-d5711",
  storageBucket: "barterbuddy-d5711.appspot.com",
  messagingSenderId: "1041225313637",
  appId: "1:1041225313637:web:12e29ff3ca3c35c326c58c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);

const db = getFirestore(app);

export { auth, db };

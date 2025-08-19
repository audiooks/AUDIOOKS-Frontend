import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase config (copied from Firebase console → Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyAM-q5BaXFYUbV5TNL2Lw0BsbYbc6Gsv5E",
    authDomain: "audiooks-41d77.firebaseapp.com",
      projectId: "audiooks-41d77",
        storageBucket: "audiooks-41d77.appspot.com", 
          messagingSenderId: "678732658840",
            appId: "1:678732658840:web:3984fde8e36328ba2538ed"
            };

            // 🔹 Initialize Firebase
            const app = initializeApp(firebaseConfig);

            // 🔹 Export auth & db
            export const auth = getAuth(app);
            export const db = getFirestore(app);

            // 🔹 Export providers (to use in Login.js)
            export const googleProvider = new GoogleAuthProvider();
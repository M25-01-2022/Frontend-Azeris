import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQu2gt4h9eYtfYz9pwFsRZsJdD-kgRKbs",
    authDomain: "azeris-c558d.firebaseapp.com",
    projectId: "azeris-c558d",
    storageBucket: "azeris-c558d.firebasestorage.app",
    messagingSenderId: "33222530594",
    appId: "1:33222530594:web:f4ce7a7bf57abf79a85c7b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
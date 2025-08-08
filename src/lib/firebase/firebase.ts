import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFRwCeBiLZFd7daFOiedIQmN6WMl33VIU",
    authDomain: "fypsite-e8819.firebaseapp.com",
    databaseURL: "https://fypsite-e8819-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fypsite-e8819",
    storageBucket: "fypsite-e8819.firebasestorage.app",
    messagingSenderId: "101673002234",
    appId: "1:101673002234:web:aadb68e3262a2e57cc9543"
  };
  

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

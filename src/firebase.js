import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJvtq7VfhpDpsv9gaMhr5gv81k159pASo",
  authDomain: "talker-31a8b.firebaseapp.com",
  projectId: "talker-31a8b",
  storageBucket: "talker-31a8b.appspot.com",
  messagingSenderId: "910681984422",
  appId: "1:910681984422:web:74824c6a297aadca1ad367",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

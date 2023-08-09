import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAQq6lYlshNqkJhb2fmFoQYBEjUSXB3wY",
  authDomain: "instagram-clone-react-375d2.firebaseapp.com",
  projectId: "instagram-clone-react-375d2",
  storageBucket: "instagram-clone-react-375d2.appspot.com",
  messagingSenderId: "526226696062",
  appId: "1:526226696062:web:15054b3f8ba81e2f2cb52f",
  measurementId: "G-CV14ZV9SV0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

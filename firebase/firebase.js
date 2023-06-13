import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCAh6kYxSNANTOOGwzK4M8DXZQaVTflxMI",
  authDomain: "fir-chat-app-8372b.firebaseapp.com",
  projectId: "fir-chat-app-8372b",
  storageBucket: "fir-chat-app-8372b.appspot.com",
  messagingSenderId: "794123413559",
  appId: "1:794123413559:web:10953bdffa87558e1ff7b2",
  measurementId: "G-GM86M0FGSG",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

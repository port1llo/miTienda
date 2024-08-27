import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHe_-TJZzWLdOTIGG8YPfIEqY8GbQEaKU",
  authDomain: "mitiendavivero.firebaseapp.com",
  projectId: "mitiendavivero",
  storageBucket: "mitiendavivero.appspot.com",
  messagingSenderId: "979831488792",
  appId: "1:979831488792:web:4be413f5673b666b301e6d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
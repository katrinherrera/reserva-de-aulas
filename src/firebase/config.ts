
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkpTKLqULeWayeg_9x9GRlsPAtZwF2SLY",
  authDomain: "reserva-de-aulas-52393.firebaseapp.com",
  projectId: "reserva-de-aulas-52393",
  storageBucket: "reserva-de-aulas-52393.appspot.com",
  messagingSenderId: "591090576570",
  appId: "1:591090576570:web:f5f5d8d41ec2dddafe2683",
  measurementId: "G-84F1QE29TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore (app);
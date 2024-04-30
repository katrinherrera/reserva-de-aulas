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

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Guarda la instancia de Firestore en una variable llamada 'db'

export { db }; // Exporta la instancia de Firestore para que esté disponible para otros archivos

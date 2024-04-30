import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const AmbientesList = () => {
  const [ambientes, setAmbientes] = useState([]);

  useEffect(() => {
    const fetchAmbientes = async () => {
      const ambientesCollection = collection(db, "ambientes");
      const data = await getDocs(ambientesCollection);
      const ambientesData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAmbientes(ambientesData);
    };

    fetchAmbientes();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Lista de Ambientes</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ambientes.map((ambiente) => (
          <li key={ambiente.id} className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mb-2">{ambiente.nombre}</h3>
              <p className="text-gray-700 mb-2">{ambiente.ubicacion}</p>
              <p className="text-gray-700">Aforo: {ambiente.aforo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmbientesList;

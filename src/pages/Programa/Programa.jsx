// src/pages/Program.jsx
import React, { useState, useEffect } from "react";
import placeholderImage from "../../../public/congreso-pasado.jpg"; // Pon aquí tu imagen real
import Proximamente from "../../components/Proximamente";
import EventSchedule from "../../components/SchedulePogram";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const generateSampleAgenda = () => {
  const speakers = ["Dr. Pérez", "Ing. López", "MSc. García", "Lic. Ramírez"];
  const topics = ["IA en Salud", "Ciberseguridad 101", "Big Data", "Análisis Predictivo"];

  return days.map((day) => ({
    day,
    sessions: Array.from({ length: 3 }).map((_, idx) => ({
      time: `${9 + idx * 2}:00 - ${11 + idx * 2}:00`,
      topic: topics[Math.floor(Math.random() * topics.length)],
      speaker: speakers[Math.floor(Math.random() * speakers.length)],
      type: "Ponencia",
    })),
  }));
};

export default function Program() {
  const [agenda, setAgenda] = useState([]);
  const [day, setDay] = useState(days[0]);

  useEffect(() => {
    setAgenda(generateSampleAgenda());
  }, []);

  const current = agenda.find((d) => d.day === day);

  return (
    <div className="mt-20 bg-white">
      <section className="py-16 px-6 lg:px-0 max-w-5xl mx-auto">

   {/* ---------------------------- Seccion Cronograma -------------------------- */}



        <EventSchedule />
        
        {/* <h1 className="text-3xl font-bold mb-6">Programa del Evento</h1> */}

        {/* Tabs de días */}
        
        {/* <div className="flex space-x-2 mb-8 overflow-x-auto">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                d === day
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {d}
            </button>
          ))}
        </div> */}

        {/* Agenda día seleccionado */}

        {/* <div className="space-y-4 mb-12">
          {current?.sessions.map((s, i) => (
            <div
              key={i}
              className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded"
            >
              <div className="flex justify-between">
                <span className="font-semibold">{s.time}</span>
                <span className="italic text-gray-600">{s.speaker}</span>
              </div>
              <p className="mt-1">{s.topic}</p>
            </div>
          ))}
        </div> */}


        {/* ---------------------- Seccion Cronograma ---------------------------- */}

        {/* Sección Ponencias */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Ponencias</h2>
          <p className="mb-4 text-gray-700">
            En esta edición contaremos con charlas magistrales que cubrirán los
            siguientes temas:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>IA en la industria alimentaria</li>
            <li>Defensa ante amenazas cibernéticas</li>
            <li>Visualización avanzada de datos</li>
          </ul>
          <img
            src={placeholderImage}
            alt="Ediciones pasadas"
            className="w-full h-auto rounded shadow"
          />
        </section>

        {/* Sección Talleres prácticos */}
        
        {/* <section className="mb-16 bg-gray-50 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Talleres Prácticos</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Qué incluyen:</strong> material didáctico, acceso a
              laboratorio virtual y certificado de participación.
            </li>
            <li>
              <strong>Cupo limitado:</strong> máximo 30 participantes por
              taller.
            </li>
            <li>
              <strong>Requiere inscripción:</strong> registro previo y pago de
              $10 USD.
            </li>
          </ul>
        </section> */}

        {/* Sección Networking */}

        {/* <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Networking</h2>
          <p className="mb-2 text-gray-700">
            Espacios programados para conectar con empresas y colegas:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>10:00 – 10:30: Coffee Break & Stands</li>
            <li>12:00 – 12:30: Speed Networking</li>
            <li>15:00 – 15:30: Demostraciones en vivo</li>
          </ul>
        </section> */}

      </section>
      
    </div>
  );
}

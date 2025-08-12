// src/pages/HowToParticipate.jsx
import React from "react";
import { Link } from "react-router-dom";

const sponsorshipLevels = ["Platino", "Oro", "Plata", "Básico"];
const benefits = [
  {
    label: "Stand en el Congreso",
    Platino: true,
    Oro: true,
    Plata: true,
    Básico: false,
  },
  {
    label: "Publicidad en Redes Sociales",
    Platino: true,
    Oro: true,
    Plata: true,
    Básico: true,
  },
  {
    label: "Incorporación en Souvenirs",
    Platino: true,
    Oro: true,
    Plata: true,
    Básico: false,
  },
  {
    label: "Presencia en Página Web",
    Platino: true,
    Oro: true,
    Plata: true,
    Básico: true,
  },
  {
    label: "Participación activa en el Congreso",
    Platino: true,
    Oro: true,
    Plata: false,
    Básico: false,
  },
];

export default function Participar() {
  return (
    <section id="participar" className="mt-20 py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-0 max-w-4xl text-center space-y-12">
        <h1 className="text-3xl font-bold">¿Cómo Participar?</h1>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Paquetes de patrocinio</th>
                {sponsorshipLevels.map((level) => (
                  <th key={level} className="px-4 py-3">
                    {level}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {benefits.map((row, idx) => (
                <tr key={idx} className="text-gray-700">
                  <td className="px-4 py-2 text-left">{row.label}</td>
                  {sponsorshipLevels.map((level) => (
                    <td key={level} className="px-4 py-2 text-center">
                      {row[level] ? (
                        <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botón Solicitar brochure */}
        <a
          href="/assets/DetallesPatrocinio.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 bg-orange-500 hover:bg-orange-400 text-white font-medium py-3 px-8 rounded-full transition">
            Descargar brochure
          </button>
        </a>

        {/* Conferencista */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">¿Eres conferencista?</h2>
          <p className="text-gray-700">
            Comparte tu experiencia y aplica para ser ponente en COECYS 2025.
          </p>
          <Link to="/registro">
            <button className="mt-8 bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-6 rounded-full transition">
              Postula como conferencista
            </button>
          </Link>
        </div>

        {/* Asistente */}
        {/* <div className="space-y-4">
          <h2 className="text-2xl font-semibold">¿Eres asistente?</h2>
          <p className="text-gray-700">
            Completa el formulario de registro para asegurar tu participación.
          </p>
          <Link to="/registro">
            <button className="mt-8 bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-6 rounded-full transition">
              Ir a registro
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

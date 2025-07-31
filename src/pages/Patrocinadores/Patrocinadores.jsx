// src/pages/Sponsors.jsx
import React from "react";
import { Link } from "react-router-dom";

// Datos de ejemplo
const platinumSponsors = [
  { name: "", color: "bg-blue-300" },
  { name: "", color: "bg-gray-400" },
  { name: "", color: "bg-gray-500" },
];

// Otros patrocinadores dummy
const otherSponsors = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  color: `bg-gray-${200 + (i % 4) * 100}`,
}));

// Sección Oro
const goldSponsors = otherSponsors.slice(0, 3);
// Sección Plata con SISAP añadido
const silverSponsors = [
  {
    id: "sisap",
    logo:
      "https://i.ibb.co/4n5YDwSb/Imagen-de-Whats-App-2025-07-25-a-las-14-31-52-eab66292.jpg",
    name: "SISAP",
  },
];
// Sección Básico
const basicSponsors = otherSponsors.slice(6, 9);

const categories = [
  { title: "Oro", items: goldSponsors },
  { title: "Plata", items: silverSponsors },
  // { title: "Básico", items: basicSponsors },
];

// Mapa de tamaños por categoría\
const sizeMap = {
  Platino: "w-32 h-32",
  Oro: "w-20 h-20",
  Plata: "w-24 h-24",
  Básico: "w-16 h-16",
};

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="mt-20 py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-4xl text-center">

        <h1 className="text-3xl font-bold mb-8">Patrocinadores</h1>

        {/* Platino */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Patrocinadores Platino</h2>
          <div className="flex justify-center items-center space-x-12">
            {platinumSponsors.map((s) => (
              <div
                key={s.name}
                className={`${sizeMap.Platino} ${s.color} rounded flex items-center justify-center shadow-lg`}
              >
                <span className="text-gray-700 font-medium text-lg">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-12">
          <div className="flex flex-col items-center space-y-8">
            {categories.map((cat) => (
              <div key={cat.title} className="w-full">
                <h3 className="font-semibold mb-4 text-lg">{cat.title}</h3>
                <div className="flex justify-center space-x-8">
                  {cat.items.map((s) => (
                    <div key={s.id} className="flex flex-col items-center">
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className={`${sizeMap[cat.title]} object-contain rounded shadow-md bg-white p-2`}
                        />
                      ) : (
                        <div
                          className={`${sizeMap[cat.title]} ${s.color} rounded shadow-md`}
                        />
                      )}
                      <span className="mt-2 text-sm font-medium">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <p className="mb-4 text-gray-700">¿Quieres ser patrocinador?</p>
          <Link to="/participar">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-full transition">
              ¿Cómo participar?
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
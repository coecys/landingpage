// src/pages/Sponsors.jsx
import React from "react";
import { Link } from "react-router-dom";

// Datos de ejemplo
const platinumSponsors = [
  { id: "facultad", name: "Facultad de Ingeniería USAC", logo: "https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png" },
  { id: "cementos", name: "Cementos Progreso", logo: "https://sinergica.org/media/com_edocman/document/document_65d96d300ed8blogo-cementos-progreso.png" },
];

const goldSponsors = [
  { id: "usac", name: "Universidad de San Carlos de Guatemala", logo: "https://virtual.usac.edu.gt/deai/wp-content/uploads/2024/08/LOGO-USAC-PUBLICA_Mesa-de-trabajo-1-copia-4.png" }
];

// Otros patrocinadores dummy
const otherSponsors = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  color: `bg-gray-${200 + (i % 4) * 100}`,
}));

// Sección Oro
//const goldSponsors = otherSponsors.slice(0, 3);
// Sección Plata con SISAP añadido
const silverSponsors = [
  {
    id: "sisap",
    logo:
      "https://i.ibb.co/4n5YDwSb/Imagen-de-Whats-App-2025-07-25-a-las-14-31-52-eab66292.jpg",

    name: "SISAP",
  },
  {
    id: "esource",
    logo: "https://i.ibb.co/vx5FR6TQ/Imagen-de-Whats-App-2025-08-12-a-las-15-57-44-fffeae22.jpg",
    name: "eSource Capital",
  },
  {
    id: "group",
    logo: "https://i.ibb.co/cSzWhnNB/Logo-Group-editable-3-2.png",
    name: "Group Technology",
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
  Platino: "w-[300px] h-[140px] md:w-[360px] md:h-[160px]", // un poco más pequeño
  Oro: "w-32 h-32 md:w-36 md:h-36",                     // un poco más grande
  Plata: "w-28 h-28 md:w-32 md:h-32",                     // igual
  Básico: "w-16 h-16 md:w-20 md:h-20",
};


export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="mt-20 py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-4xl text-center">

        <h1 className="text-3xl font-bold mb-8">Patrocinadores</h1>

        {/* Platino */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Patrocinadores Platino</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {platinumSponsors.map((s) => (
              <div
                key={s.name}
                className={`${sizeMap.Platino} rounded flex items-center justify-center shadow-lg bg-white`}
              >
                <img src={s.logo} alt={s.name} className="w-full h-full object-contain p-2" />
              </div>
            ))}
          </div>
        </div>


        {/* Categorías */}
        <div className="mb-8">
          <div className="flex flex-col items-center gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="w-full">
                <h3 className="font-semibold mb-3 text-lg">{cat.title}</h3>

                <div
                  className={`grid ${cat.items.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2 sm:grid-cols-3"
                    } gap-6 place-items-center justify-items-center`}
                >
                  {cat.items.map((s) => (
                    <div key={s.id} className="flex flex-col items-center">
                      <img
                        src={s.logo}
                        alt={s.name}
                        className={`${sizeMap[cat.title]} object-contain rounded shadow bg-white p-2`}
                      />
                      <span className="mt-2 text-sm font-medium text-center">{s.name}</span>
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
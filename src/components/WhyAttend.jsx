import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const items = [
  "Accede a conferencias con expertos nacionales e internacionales.",
  "Participa en talleres prácticos enfocados en tecnología de vanguardia.",
  "Conecta con empresas líderes y oportunidades de networking.",
  "Descubre las tendencias en ciencia de datos y ciberseguridad.",
];

export default function WhyAttend() {
  return (
    <section id="por-que-asistir" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-0 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-8">¿Por qué asistir?</h2>
        <ul className="space-y-6 text-left">
          {items.map((text, i) => (
            <li key={i} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1 mr-3" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

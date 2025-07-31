import React from "react";

export default function Sobre() {
  return (
    <section id="sobre" className="mt-20 py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-0 max-w-4xl space-y-12">
        {/* Quiénes somos */}
        <div>
          <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="text-gray-700 leading-relaxed">
            COECYS 2025 es el congreso estudiantil de ciencia y tecnología
            más innovador de Guatemala, organizado por la Facultad de
            Ingeniería de la Universidad de San Carlos. Reúne a
            estudiantes, académicos y empresas para compartir avances en
            Ciencia de Datos, Inteligencia Artificial y Ciberseguridad.
          </p>
        </div>

        {/* Misión y Visión */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Misión y Visión</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Misión:</span> Fomentar el
              intercambio de conocimiento y el desarrollo de habilidades
              tecnológicas en estudiantes mediante conferencias, talleres
              y espacios de networking.
            </p>
            <p>
              <span className="font-semibold">Visión:</span> Ser el
              evento líder en Centroamérica de vinculación academia-industria
              en áreas de ciencia de datos y seguridad digital.
            </p>
          </div>
        </div>

        {/* Exposición de la temática */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Temática 2025</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Este año nos enfocamos en <span className="font-semibold">Ciencia de Datos y Seguridad Digital</span>,
            explorando cómo la analítica avanzada y las prácticas de ciberseguridad
            se integran para proteger la información en entornos modernos.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">IA y Machine Learning: </span>  
              Modelado predictivo, Deep Learning y aplicaciones prácticas.
            </li>
            <li>
              <span className="font-semibold">Ciberseguridad: </span>  
              Estrategias de defensa, criptografía y gestión de riesgos.
            </li>
            <li>
              <span className="font-semibold">Análisis de Datos: </span>  
              Big Data, visualización y toma de decisiones basada en datos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

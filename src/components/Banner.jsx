import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Fondo con patrón sutil y degradado */}
      <div
        className="absolute inset-0 bg-blue-950"
        style={{
          backgroundImage:
            "url('/assets/circuit-pattern.svg'), linear-gradient(135deg, #0f172a, #1e293b)",
          backgroundBlendMode: "overlay, normal",
          backgroundSize: "auto, cover",
        }}
      />
      {/* Contenido */}
      <div className="relative z-10 px-6 md:px-0 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">COECYS 2025</h1>
        <p className="text-lg md:text-xl mb-8">
          Del 22 al 26 de septiembre &middot; Edificio TEC, Zona 4
        </p>
        <p className="text-2xl md:text-3xl font-semibold mb-8">
          Ciencia de Datos <br className="block md:hidden" />
          y Seguridad Digital
        </p>
        <p className="text-base md:text-lg mb-12 text-gray-300">
          El congreso estudiantil más innovador de Guatemala. Conecta con el futuro tecnológico.
        </p>
        <Link
          to={"/registro"}
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-8 rounded-full transition"
        >
          Registrarme
        </Link>
      </div>
    </header>
  );
}

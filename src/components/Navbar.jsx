// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Inicio", to: "/" },
    { name: "Sobre el Congreso", to: "/sobre" },
    { name: "Programa", to: "/programa" },
    { name: "Patrocinadores", to: "/patrocinadores" },
    { name: "¿Cómo Participar?", to: "/participar" },
    { name: "Galería", to: "/galeria" },
    { name: "Registro", to: "/registro" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#002E56] bg-opacity-95 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + título con Link */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <img 
              src="/isologo.png" 
              alt="Coecys 2025" 
              className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" 
            />
            <span className="text-white text-2xl font-bold group-hover:text-[#FE803E] transition-colors duration-300">
              COECYS 2025
            </span>
          </Link>

          {/* Hamburger móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-[#FE803E] focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg 
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Enlaces desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-200 hover:text-white hover:bg-[#FE803E] px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 relative group"
              >
                {name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden bg-[#002E56] bg-opacity-95 border-t border-[#002E56]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="block text-gray-200 hover:text-white hover:bg-[#FE803E] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#002E56] text-gray-300 py-8 border-t border-[#FE803E]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; 2025 COECYS. Todos los derechos reservados.
            </p>
            <p className="text-xs mt-1 text-gray-400">
              Universidad de San Carlos de Guatemala
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/contacto"
              className="bg-[#FE803E] hover:bg-[#E67035] text-white px-5 py-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Contáctanos
            </Link>
            <Link
              to="/registro"
              className="bg-white hover:bg-gray-100 text-[#002E56] px-5 py-2 rounded-lg transition-colors duration-300 font-medium border border-[#002E56]"
            >
              Regístrate
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#002E56]/30 text-center text-xs text-gray-400">
          <p>Edificio TEC, Zona 4, Ciudad de Guatemala</p>
          <p className="mt-1">coecys@ingenieria.usac.edu.gt</p>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/SobreCongreso/Sobre";
import Program from "./pages/Programa/Programa";
import Patrocinadores from "./pages/Patrocinadores/Patrocinadores";
import Participar from "./pages/Patrocinadores/Participar";
import Galeria from "./pages/Galeria";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/programa" element={<Program />} />
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/participar" element={<Participar />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Countdown from "../../components/Countdown";
import QuickLinks from "../../components/QuickLinks";
import WhyAttend from "../../components/WhyAttend";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Banner principal */}
        <Banner />

        {/* Cuenta regresiva */}
        <Countdown targetDate="2025-09-22T09:00:00" />

        {/* Acceso rápido */}
        <QuickLinks />

        {/* ¿Por qué asistir? */}
        <WhyAttend />

        {/* Resto de secciones: SponsorsCarousel, RegistrationForm, etc. */}
      </main>
    </>
  );
}

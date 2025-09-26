// src/pages/Registration.jsx
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import emailjs from "emailjs-com";
dayjs.extend(utc);

const participationOptions = ["Taller", "Conferencista"];

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    university: "",
    career: "",
    email: "",
    type: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vdihtot",    // tu Service ID de EmailJS
        "template_q51kkjw",   // tu Template ID de EmailJS
        {
          name: form.name,
          university: form.university,
          career: form.career,
          email: form.email,
          type: form.type,
        },
        "IqdXjL7wFz4RzNqny"        // tu User ID público de EmailJS
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log('err', err)
        console.error("Error al enviar correo:", err);
        alert("Ocurrió un error al enviar el registro. Intenta de nuevo.");
      });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#e7e4e4";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const downloadICS = () => {
    const start =
      dayjs("2025-09-22T09:00:00").utc().format("YYYYMMDDTHHmmss") + "Z";
    const end =
      dayjs("2025-09-22T10:00:00").utc().format("YYYYMMDDTHHmmss") + "Z";
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//COECYS//Evento//ES
BEGIN:VEVENT
UID:${Date.now()}@coecys2025
SUMMARY:Inicio COECYS 2025
DTSTART:${start}
DTEND:${end}
LOCATION:Edificio TEC, Zona 4, Guatemala
DESCRIPTION:Ciencia de Datos y Seguridad Digital
END:VEVENT
END:VCALENDAR`.trim();

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "COECYS2025_Inicio.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
<section id="registro" className="mt-20 py-16">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto w-full">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-[#002E56] mb-4">
          Registro COECYS
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">¿Eres asistente?</h2>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Formulario de Asistencia</h3>

            {/* Ocupa alto de la ventana */}
            <div className="w-full min-h-[70vh] rounded-xl overflow-hidden border">
              <iframe
                title="Formulario de Conferencistas COECYS 2025"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdEheyleAw2YKKuaa_0h_wLovx5TEDAInWP3jaawDtAx8KsdQ/viewform?embedded=true"
                className="w-full h-[70vh] sm:h-[75vh] lg:h-[80vh]"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
                allow="clipboard-read; clipboard-write"
              >
                Cargando…
              </iframe>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEheyleAw2YKKuaa_0h_wLovx5TEDAInWP3jaawDtAx8KsdQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm underline"
            >
              Abrir el formulario en una pestaña nueva
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

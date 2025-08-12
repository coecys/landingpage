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
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-[#002E56] mb-2">
              Registro COECYS
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Completa tus datos para participar
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre completo */}
                <div>
                  <label className="block text-sm font-medium text-[#002E56] mb-1">
                    Nombre completo<span className="text-[#FE803E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent transition"
                  />
                </div>

                {/* Universidad */}
                <div>
                  <label className="block text-sm font-medium text-[#002E56] mb-1">
                    Universidad
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={form.university}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent transition"
                  />
                </div>

                {/* Carrera */}
                <div>
                  <label className="block text-sm font-medium text-[#002E56] mb-1">
                    Carrera
                  </label>
                  <input
                    type="text"
                    name="career"
                    value={form.career}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent transition"
                  />
                </div>

                {/* Correo electrónico */}
                <div>
                  <label className="block text-sm font-medium text-[#002E56] mb-1">
                    Correo electrónico<span className="text-[#FE803E]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent transition"
                  />
                </div>

                {/* Tipo de participación */}
                <div className="relative">
                  <label className="block text-sm font-medium text-[#002E56] mb-1">
                    Tipo de participación
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent bg-white pr-8 transition"
                  >
                    {participationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Botón enviar */}
                <button
                  type="submit"
                  className="w-full bg-[#002E56] hover:bg-[#001F3D] text-white font-medium py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.01] mt-6"
                >
                  Enviar registro
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6 py-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-lg font-semibold text-green-700">
                    ¡Tu registro ha sido exitoso!
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Te hemos enviado un correo de confirmación
                  </p>
                </div>
                <button
                  onClick={downloadICS}
                  className="bg-[#FE803E] hover:bg-[#E67035] text-white font-medium py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] w-full"
                >
                  Agregar a calendario
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

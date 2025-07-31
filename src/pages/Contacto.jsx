// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/coecys",
    icon: "/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/coecys.usac",
    icon: "/facebook.svg",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@coecys",
    icon: "/tiktok.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/coecys",
    icon: "/linkedin.svg",
  },
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reemplaza estos valores con los de tu cuenta EmailJS
    const SERVICE_ID = "service_vdihtot";
    const TEMPLATE_ID = "template_unzci1o";
    const USER_ID = "IqdXjL7wFz4RzNqny";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(), // o cualquier formato que desees
        },
        USER_ID
      )
      .then(() => {
        setSent(true);
      })
      .catch((err) => {
        console.error("Error al enviar el mensaje:", err);
        alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
      });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setSent(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#e7e4e4";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section id="contacto" className="mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-[#002E56]">Contáctanos</h1>
              <p className="mt-2 text-gray-600">
                ¿Tienes dudas o deseas comunicarte con el equipo organizador?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="bg-[#002E56]/5 p-6 rounded-lg">
                  <h2 className="font-medium text-[#002E56] mb-3">Correo oficial</h2>
                  <a
                    href="mailto:coecys@ingenieria.usac.edu.gt"
                    className="text-[#002E56] hover:text-[#FE803E] font-medium transition-colors"
                  >
                    coecys@ingenieria.usac.edu.gt
                  </a>
                </div>

                <div className="bg-[#002E56]/5 p-6 rounded-lg">
                  <h2 className="font-medium text-[#002E56] mb-3">Síguenos</h2>
                  <div className="flex justify-center space-x-5">
                    {socials.map(({ name, href, icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-[#002E56] hover:text-white transition-all duration-300"
                        title={name}
                      >
                        <img
                          src={icon}
                          alt={name}
                          className="w-5 h-5 object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formulario o mensaje enviado */}
              <div>
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#002E56] mb-1">
                        Nombre completo
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
                    <div>
                      <label className="block text-sm font-medium text-[#002E56] mb-1">
                        Correo electrónico
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
                    <div>
                      <label className="block text-sm font-medium text-[#002E56] mb-1">
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E56] focus:border-transparent transition"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#002E56] hover:bg-[#001F3D] text-white font-medium py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.01]"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                ) : (
                  <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg space-y-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-green-700">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className="text-sm text-green-600">
                      Nos pondremos en contacto contigo pronto.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 bg-[#FE803E] hover:bg-[#E67035] text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

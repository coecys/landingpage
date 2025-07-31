// src/pages/Gallery.jsx
import React, { useState } from "react";

// Datos de ejemplo: cada año tiene un array de URLs de imágenes
const photoData = {
    2024: [
        "/pasado1.jpeg",
        "/pasado2.jpeg",
        "/pasado3.jpg",
        "/pasado4.jpg",
    ],
    2023: [
        "/pasado20231.jpg",
        "/pasado20232.jpg",
        "/pasado20233.jpg",
        "/pasado20234.jpg",
    ],
    2022: [
        "/pasado2022.jpg",
        "/pasado20222.jpg",
        "/pasado224.jpg",
        "/pasado225.jpg"
    ],
};

export default function Galeria() {
    const years = Object.keys(photoData).sort((a, b) => b - a);
    const [activeYear, setActiveYear] = useState(years[0]);

    return (
        <section id="galeria" className="mt-20 py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-0 max-w-4xl text-center space-y-8">
                <h1 className="text-3xl font-bold">Galería</h1>
                <p className="text-gray-600">Fotografías de congresos anteriores</p>

                {/* Tabs de años */}
                <div className="flex justify-center space-x-4">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-4 py-2 rounded-full transition ${year === activeYear
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Grid de imágenes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {photoData[activeYear].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Galería ${activeYear} #${idx + 1}`}
                            className="w-full h-48 object-cover rounded-lg shadow"
                        />
                    ))}
                </div>

                {/* Video resumen */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Video Resumen</h2>
                    <div className="mx-auto max-w-3xl">
                        <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
                            <iframe
                                title="Video Resumen COECYS"
                                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                    "https://www.facebook.com/share/r/19NaMvGoxK/"
                                )}&show_text=0&width=560`}
                                width="100%"
                                height="100%"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    border: "none",
                                    overflow: "hidden",
                                }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

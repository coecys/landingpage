import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Calendario interactivo COECYS — v3
 * - Mantiene simetría en días con 1 pista (agrega columna placeholder)
 * - Bloques especiales se expanden a 2 columnas cuando hay 1 pista
 * - Estilo refinado, accesible y responsive
 */

// ----------------------- Datos -----------------------
const DAYS = [
    {
        id: "2025-09-29",
        label: "Lunes 29",
        venue: "Torre 3, Campus Tec — Zona 4",
        tracks: [{ key: "conf", name: "Conferencia", room: "Aula Magna" }],
        slots: [
            timeBlock("08:00", "10:00", { conf: special("INAUGURACIÓN") }),
            timeBlock("10:00", "11:00", {
                conf: talk("Ciberseguridad y protección de datos críticos", "Héctor Cabrera"),
            }),
            timeBlock("11:00", "11:30", { conf: special("COFFEE BREAK") }),
            timeBlock("11:40", "12:40", {
                conf: talk(
                    "Modelos de Machine Learning en el Edge con Kubernetes y Zot",
                    "Sergio Mendez"
                ),
            }),
            timeBlock("13:00", "14:00", { conf: special("ALMUERZO") }),
            timeBlock("14:00", "15:00", {
                conf: talk(
                    "Herramientas OSINT: Herramientas de ataque o defensa",
                    "Luis Flores"
                ),
            }),
            timeBlock("15:00", "16:00", {
                conf: talk(
                    "Emprender AI First – Nunca tan fácil, nunca tan difícil",
                    "José Quan"
                ),
            }),
            timeBlock("16:00", "17:00", {
                conf: talk(
                    "¿Quieres ser hacker? el desafío eJPT te espera",
                    "Pedro Pablo Hernández",
                    "Demostración en vivo"
                ),
            }),
        ],
    },
    {
        id: "2025-09-30",
        label: "Martes 30",
        venue: "Torre 3, Campus Tec — Zona 4",
        tracks: [
            { key: "conf", name: "Conferencia", room: "Aula Magna" },
            { key: "taller", name: "Taller", room: "Salón 206" },
        ],
        slots: [
            timeBlock("08:00", "09:00", {
                conf: talk(
                    "Ciencia de datos aplicada a encuestas de hogares",
                    "Sergio Alexander Alay Arellano y Javier Alfonso de León Gómez"
                ),
            }),
            timeBlock("09:00", "10:00", {
                conf: talk("Ciberseguridad e Implicaciones sociales", "Christian Ávila"),
            }),
            timeBlock("10:00", "11:00", {
                conf: talk("Automatizaciones con Web Scrapping", "David Ramirez"),
            }),
            timeBlock("11:00", "11:30", {
                conf: special("COFFEE BREAK"),
                taller: special("COFFEE BREAK"),
            }),
            timeBlock("11:40", "12:40", {
                conf: talk(
                    "AMAZON BRAKET Y EL PODER DE LA COMPUTACIÓN CUÁNTICA EN EL ANÁLISIS DE DATOS",
                    "Dennys Emmanuel Tezén"
                ),
            }),
            timeBlock("13:00", "14:00", {
                conf: special("ALMUERZO"),
                taller: special("ALMUERZO"),
            }),
            timeBlock("14:00", "15:00", {
                conf: talk(
                    "El ciclo del hacking para principiantes",
                    "Josué Manuel de León Aguilar"
                ),
                taller: talk(
                    "MÁS ALLÁ DEL DESPLIEGUE: BALANCEO DE CARGA Y SEGURIDAD CON AMAZON WAF",
                    "Dennys Emmanuel Tezén"
                ),
            }),
            timeBlock("15:00", "16:00", {
                conf: talk(
                    "Ciberseguridad enfocada a proyectos Ágiles",
                    "Ernie Vasquez Sosa"
                ),
                taller: talk(
                    "MÁS ALLÁ DEL DESPLIEGUE: BALANCEO DE CARGA Y SEGURIDAD CON AMAZON WAF",
                    "Dennys Emmanuel Tezén"
                ),
            }),
        ],
    },
    {
        id: "2025-10-01",
        label: "Miércoles 01",
        venue: "Torre 3, Campus Tec — Zona 4",
        tracks: [
            { key: "conf", name: "Conferencia", room: "Aula Magna" },
            { key: "taller", name: "Taller", room: "Salón 206" },
        ],
        slots: [
            timeBlock("08:00", "09:00", {
                conf: talk(
                    "Monitoreo de Datos Distribuido con Raspberry Pi, OpenBalena y Grafana",
                    "Jose Pablo Recinos Guzmán"
                ),
                taller: talk(
                    "Hack The Fab: Industrial Cybersecurity.",
                    "Daniel Julio Jose Camey Hernandez"
                ),
            }),
            timeBlock("09:00", "10:00", {
                conf: talk(
                    "De Bits a Billetes: Maximizando el ROI de la IA",
                    "Erik Gerardo Flores Díaz"
                ),
                taller: talk(
                    "Hack The Fab: Industrial Cybersecurity.",
                    "Daniel Julio Jose Camey Hernandez"
                ),
            }),
            timeBlock("10:00", "11:00", {
                conf: talk(
                    "Factores Habilitadores del Open Banking: Caso de estudio Guatemala",
                    "Dra. Patricia Ramírez"
                ),
                taller: talk("Inteligenca Artificial Generativa: Gemini para Google Workspace", "Mario Gómez"),
            }),
            timeBlock("11:00", "11:30", {
                conf: special("COFFEE BREAK"),
                taller: special("COFFEE BREAK"),
            }),
            timeBlock("11:40", "12:40", {
                conf: talk(
                    "No necesitas ser genio para ser Hacker; solo curiosidad",
                    "Wilson Leonardo"
                ),
            }),
            timeBlock("13:00", "14:00", {
                conf: special("ALMUERZO"),
                taller: special("ALMUERZO"),
            }),
            timeBlock("14:00", "15:00", {
                conf: talk("Iniciando un proyecto de Lakehouse y ML", "Carlos López"),
            }),
            timeBlock("15:00", "16:00", {
                conf: talk("Machine y Deep Learning en Banca", "Samuel Ramos"),
                taller: talk(
                    "Desarrollo 2.0: Potencia tu proceso de desarrollo de software con IA",
                    "Samuel Palacios"
                ),
            }),
        ],
    },
    {
        id: "2025-10-02",
        label: "Jueves 2",
        venue: "Torre 3, Campus Tec — Zona 4",
        tracks: [{ key: "conf", name: "Conferencia", room: "Aula Magna" }],
        slots: [
            timeBlock("08:00", "09:00", {
                conf: talk(
                    "Aplicación del PLN y Webscraping para el Análisis de Precios de Insumos Estatales",
                    "Elser Adolfo López Rosa"
                ),
            }),
            timeBlock("09:00", "10:00", {
                conf: talk("Criptografía post-cuántica", "Kevin Adiel Lajpop"),
            }),
            timeBlock("10:00", "11:00", { conf: talk("Cyber Threat", "Marvin Amador") }),
            timeBlock("11:00", "11:30", { conf: special("COFFEE BREAK") }),
            timeBlock("11:40", "12:40", {
                conf: talk(
                    "Automatización de procesos con Power Automate",
                    "Marlon Orellana"
                ),
            }),
            timeBlock("13:00", "14:00", { conf: special("ALMUERZO") }),
            timeBlock("14:00", "15:00", {
                conf: talk(
                    "Defendiendo el futuro: Seguridad digital en la era de la IA",
                    "Luis Pablo Liquez"
                ),
            }),
            timeBlock("15:00", "16:00", {
                conf: talk(
                    "Del entretenimiento a la disrupción: el verdadero potencial de la IA",
                    "Juan Diego Vega"
                ),
            }),
        ],
    },
    {
        id: "2025-10-03",
        label: "Viernes 03",
        venue: "Torre 3, Campus Tec — Zona 4",
        tracks: [
            { key: "conf", name: "Conferencia", room: "Aula Magna" },
            { key: "taller", name: "Taller", room: "Salón 206" },
        ],
        slots: [
            timeBlock("08:00", "09:00", {
                conf: talk(
                    "Integración de CSF NIST 2.0 y COBIT 2019",
                    "Armando Monzón",
                    "Ciber inteligencia adaptativa"
                ),
            }),
            timeBlock("09:00", "10:00", {
                conf: talk("Cultura en la empresa de Cybersecurity", "Samantha Nanne"),
                taller: talk(
                    "¿Cómo implementar una bóveda de secretos con Hashicorp Vault?",
                    "Samuel Palacios"
                ),
            }),
            timeBlock("10:00", "11:00", {
                conf: talk("Embeddings, el Lenguaje Secreto de la IA", "Cristián Lavarrela"),
                taller: talk("Social Engineering", "Rafael Valladares"),
            }),
            timeBlock("11:00", "11:30", {
                conf: special("COFFEE BREAK"),
                taller: special("COFFEE BREAK"),
            }),
            timeBlock("11:40", "12:40", {
                conf: talk("¿Cómo iniciar mi carrera en ciberseguridad?", "Samuel Palacios"),
            }),
            timeBlock("13:00", "14:00", {
                conf: special("ALMUERZO"),
                taller: special("ALMUERZO"),
            }),
            timeBlock("14:00", "15:00", {
                conf: talk(
                    "Extracción de Datos: Scraping y Parsing en Ciencia de Datos",
                    "Erick J. Pineda Amézquita"
                ),
                taller: talk(
                    "Web scrapping, extracción de datos y dashboard con uso de IA",
                    "David Ramirez"
                ),
            }),
            timeBlock("15:00", "16:00", {
                conf: talk(
                    "Deep Learning para Traders: Predicción de Precios con LSTM y Python",
                    "Cris Patzán"
                ),
                taller: talk(
                    "Seguridad Web: Vulnerabilidad más importante",
                    "Brian Emmanuel Riad Matus Colocho"
                ),
            }),
        ],
    },
];

function talk(title, speaker, subtitle = "") {
    return { kind: "talk", title, speaker, subtitle };
}
function special(label) {
    return { kind: "special", label };
}
function timeBlock(start, end, cells) {
    return { start, end, cells };
}

const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-black/5 ${className}`}>
        {children}
    </span>
);

// ----------------------- Componente -----------------------
export default function EventSchedule() {
    const [activeDay, setActiveDay] = useState(DAYS[0].id);
    const [opened, setOpened] = useState(null);
    const day = useMemo(() => DAYS.find((d) => d.id === activeDay), [activeDay]);

    // tracks efectivos (agrega placeholder si solo hay 1)
    const trackList = useMemo(() => {
        return day.tracks.length === 1
            ? [...day.tracks, { key: "_empty", name: "—", room: "" }]
            : day.tracks;
    }, [day]);

    const singleTrack = day.tracks.length === 1;
    const mainKey = singleTrack ? day.tracks[0].key : null;

    return (
        <div className="mt-10">
            <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Calendario de Actividades</h1>
                <p className="text-gray-600">{day.venue}</p>
            </header>

            {/* Tabs */}
            <div className="mb-6">
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 pr-2 -mr-2">
                    {DAYS.map((d) => {
                        const active = d.id === activeDay;
                        return (
                            <button
                                key={d.id}
                                onClick={() => setActiveDay(d.id)}
                                aria-selected={active}
                                className={`relative whitespace-nowrap rounded-2xl border px-4 py-2 text-sm md:text-base shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${active
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent"
                                        : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
                                    }`}
                            >
                                {d.label}
                                {active && (
                                    <span className="absolute -bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-blue-600" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Leyenda */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-blue-600/10 text-blue-700">Conferencia</Badge>
                <Badge className="bg-emerald-600/10 text-emerald-700">Taller</Badge>
                <Badge className="bg-violet-600 text-white">COFFEE BREAK / ALMUERZO</Badge>
            </div>

            {/* Grid */}
            <div className={`hidden md:grid gap-3 relative ${trackList.length === 2 ? "grid-cols-[110px,1fr,1fr]" : "grid-cols-[110px,1fr]"}`}>
                {/* Guías verticales (2 columnas máximas) */}
                <div className="absolute inset-y-0 left-[110px] right-0 pointer-events-none grid grid-cols-2">
                    <div className="border-l border-dashed border-gray-200" />
                    <div className="border-l border-dashed border-gray-200" />
                </div>

                {/* Header tracks */}
                <div />
                {trackList.map((t) => (
                    <div
                        key={t.key}
                        className={`rounded-2xl p-4 shadow-sm ${t.key === "_empty"
                                ? "bg-white border border-dashed border-gray-200 text-gray-400"
                                : "bg-slate-900 text-white"
                            }`}
                    >
                        <div className="text-lg font-semibold">{t.name}</div>
                        {t.room && <div className="text-slate-300 text-sm">Salón: {t.room}</div>}
                    </div>
                ))}

                {/* Filas */}
                {day.slots.map((slot, idx) => (
                    <React.Fragment key={`${slot.start}-${idx}`}>
                        <div className="sticky top-20 self-start text-[13px] font-semibold text-gray-600 pl-1 pt-3">
                            {slot.start} — {slot.end}
                        </div>

                        {/* Si solo hay 1 pista, decidir cómo renderizar */}
                        {singleTrack ? (
                            (() => {
                                const data = slot.cells[mainKey];
                                if (!data) {
                                    return (
                                        <>
                                            <div className="min-h-[92px]" />
                                            <PlaceholderCell />
                                        </>
                                    );
                                }
                                if (data.kind === "special") {
                                    return (
                                        <div className="col-span-2">
                                            <Cell data={data} trackKey={mainKey} />
                                        </div>
                                    );
                                }
                                return (
                                    <>
                                        <Cell data={data} trackKey={mainKey} onClick={() => setOpened({ dayId: day.id, trackKey: mainKey, slot })} />
                                        <PlaceholderCell />
                                    </>
                                );
                            })()
                        ) : (
                            trackList.map((t) => (
                                <Cell
                                    key={t.key}
                                    data={slot.cells[t.key]}
                                    trackKey={t.key}
                                    onClick={() =>
                                        slot.cells[t.key] && setOpened({ dayId: day.id, trackKey: t.key, slot })
                                    }
                                />
                            ))
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Mobile (sin cambios) */}
            <div className="md:hidden space-y-3">
                {day.slots.map((slot, idx) => (
                    <div key={idx} className="rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">
                            {slot.start} — {slot.end}
                        </div>
                        <div className="divide-y">
                            {day.tracks.map((t) => (
                                <button
                                    key={t.key}
                                    onClick={() =>
                                        slot.cells[t.key] && setOpened({ dayId: day.id, trackKey: t.key, slot })
                                    }
                                    className="w-full text-left px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-800">
                                            {t.name} — {t.room}
                                        </span>
                                        <span className="text-xs text-gray-500">Ver detalle</span>
                                    </div>
                                    <CellInner data={slot.cells[t.key]} compact />
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal open={Boolean(opened)} onClose={() => setOpened(null)}>
                {opened && (
                    <Detail
                        track={trackList.find((t) => t.key === opened.trackKey) || day.tracks[0]}
                        slot={opened.slot}
                    />
                )}
            </Modal>
        </div>
    );
}

// ----------------------- Subcomponentes -----------------------
function PlaceholderCell() {
    return (
        <div className="rounded-2xl border border-dashed border-gray-200 min-h-[92px] bg-white" />
    );
}

function Cell({ data, onClick, trackKey }) {
    if (!data) return <div className="min-h-[92px]" />;
    if (data.kind === "special") {
        return (
            <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-4 flex items-center justify-center shadow">
                <span className="font-bold tracking-wide uppercase">{data.label}</span>
            </div>
        );
    }
    const base = trackKey === "conf"
        ? "from-blue-600/15 to-blue-600/5 ring-blue-600/20 border-blue-600/30"
        : "from-emerald-600/15 to-emerald-600/5 ring-emerald-600/20 border-emerald-600/30";
    return (
        <button
            onClick={onClick}
            className={`group relative overflow-hidden rounded-2xl p-4 text-left shadow-sm ring-1 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-gradient-to-br ${base}`}
        >
            <span
                className={`absolute left-0 top-0 h-full w-1 ${trackKey === "conf" ? "bg-blue-600" : "bg-emerald-600"
                    }`}
            />
            <CellInner data={data} />
        </button>
    );
}

function CellInner({ data, compact = false }) {
    if (!data) return <div className="min-h-[72px]" />;
    if (data.kind === "special") return null;
    return (
        <div>
            <div className="font-semibold text-gray-900 leading-snug">{data.title}</div>
            {data.subtitle && (
                <div className="text-[13px] text-gray-600 mt-0.5">{data.subtitle}</div>
            )}
            <div className="mt-2">
                <Badge className="bg-white text-gray-800">{data.speaker}</Badge>
            </div>
        </div>
    );
}

function Detail({ track, slot }) {
    const data = slot.cells[track.key];
    const isSpecial = data?.kind === "special";
    const color = track.key === "conf" ? "bg-blue-600" : "bg-emerald-600";
    return (
        <div className="p-0">
            <div className={`px-4 py-3 text-white ${color}`}>
                <div className="text-sm opacity-90">
                    {track.name} {track.room ? `• ${track.room}` : ""}
                </div>
                <div className="font-semibold">
                    {slot.start} — {slot.end}
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold mt-1">
                    {isSpecial ? data.label : data.title}
                </h3>
                {!isSpecial && (
                    <>
                        {data.subtitle && (
                            <p className="text-gray-600 mt-2">{data.subtitle}</p>
                        )}
                        <div className="mt-4">
                            <Badge className="bg-blue-600 text-white">Conferencista</Badge>
                            <div className="mt-1 font-medium">{data.speaker}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function Modal({ open, onClose, children }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 30, scale: 0.98, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 10, scale: 0.98, opacity: 0 }}
                        className="relative w-full sm:max-w-lg bg-white rounded-2xl shadow-xl m-2 overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-3 top-3 rounded-full bg-gray-100 hover:bg-gray-200 w-8 h-8 grid place-content-center text-gray-600"
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

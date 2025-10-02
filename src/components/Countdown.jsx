import React, { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  // Calcula la diferencia entre ahora y la fecha objetivo
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: "Días", value: 0 },
    { label: "Horas", value: 0 },
    { label: "Minutos", value: 0 },
    { label: "Segundos", value: 0 },
  ];

  return (
    <section id="cuenta" className="bg-blue-800 py-12">
      <div className="container mx-auto flex justify-center space-x-8">
        {timerItems.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-5xl font-bold text-white animate-pulse">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-2 text-sm text-blue-200">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

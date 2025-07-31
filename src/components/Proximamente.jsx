const Proximamente = () => {
  return (
    <>
      {/* ---------------------------- Sección Cronograma -------------------------- */}

      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#002E56]">
          Programa del Evento
        </h1>

        <div className="max-w-2xl mx-auto p-8 md:p-10 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.02] duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#002E56]/10 rounded-full">
              <svg
                className="w-14 h-14 text-[#002E56]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#002E56] mb-3">
            ¡Próximamente el cronograma!
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Estamos trabajando en el programa del evento. ¡Pronto publicaremos todos los detalles!
          </p>
{/* 
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="px-6 py-3 bg-[#002E56] hover:bg-[#002E56]/90 text-white font-medium rounded-lg transition-colors shadow-md">
              Notificarme cuando esté listo
            </button>
            <button className="px-6 py-3 bg-[#FE803E] hover:bg-[#FE803E]/90 text-white font-medium rounded-lg transition-colors shadow-md">
              Ver eventos anteriores
            </button>
          </div> */}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#002E56]/10 text-[#002E56]">
              <svg
                className="animate-pulse w-2 h-2 mr-2 text-[#FE803E]"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Contenido en desarrollo
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------- Sección Cronograma ---------------------------- */}
    </>
  );
};

export default Proximamente;

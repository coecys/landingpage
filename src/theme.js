const customTheme = {

  // 2) Colores personalizados
  colors: {
    ...defaultTheme.colors,
    // Cambiamos el azul primario
    blue: {
      ...defaultTheme.colors.blue,
      500: "#3B82F6",
      600: "#2563EB",
    },
    // Agregamos un nuevo color
    cyan: {
      500: "#06B6D4",
      700: "#0E7490",
    },
  },

  // 3) Tipografías globales
  typography: {
    ...defaultTheme.typography,
    fontFamily: `"Montserrat", ${defaultTheme.typography.fontFamily}`,
    h1: {
      ...defaultTheme.typography.h1,
      className: "text-6xl md:text-7xl font-extrabold tracking-tight",
    },
    lead: {
      ...defaultTheme.typography.lead,
      className: "text-xl md:text-2xl text-gray-300",
    },
  },

  // 4) Ajustes de breakpoints (si se desea)
  breakpoints: {
    ...defaultTheme.breakpoints,
    // ejemplo: cambiar md a 768px
    md: "768px",
  },

  // 5) Personalización de componentes
  components: {
    // Ejemplo: modificar el comportamiento y estilos por defecto del Button
    button: {
      // defaultProps: propTypes por defecto
      defaultProps: {
        color: "blue",       // usa nuestro azul 500
        size: "lg",          // tamaño grande por defecto
        ripple: { color: "light" },
      },
      // valid: valores válidos o variantes extras
      valid: {
        variant: ["filled", "outlined", "text"],
      },
      // styles: estilos por tamaño/estado/variant
      styles: {
        base: {
          className:
            "font-medium rounded-full transition-all focus:ring-2 focus:ring-offset-2",
        },
        filled: {
          className: 
            "bg-blue-500 hover:bg-blue-400 text-white shadow-md",
        },
        outlined: {
          className: 
            "border border-blue-500 text-blue-500 hover:bg-blue-50",
        },
        text: {
          className:
            "text-blue-500 hover:bg-blue-100",
        },
        size: {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-3 text-base",
          lg: "px-8 py-4 text-lg",
        },
      },
    },

    // Ejemplo: personalizar Card
    card: {
      defaultProps: {
        shadow: false,
      },
      styles: {
        base: {
          className: "rounded-xl overflow-hidden",
        },
        shadow: {
          className: "shadow-lg",
        },
      },
    },

    // Puedes añadir más componentes aquí (Typography, Input, etc.)
  },
};

export default customTheme;

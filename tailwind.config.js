// tailwind.config.js
const materialTailwind = require("@material-tailwind/react/utils/withMT");

module.exports = materialTailwind({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // … otros plugins
  ],

});

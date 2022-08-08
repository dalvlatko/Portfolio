/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gunmetal: "#292f36ff",
        turquoise: "#4ecdc4ff",
        mintcream: "#f7fff7ff",
        bittersweet: "#ff6b6bff",
        crayola: "#ffe66dff",
      },
    },
    fontFamily: {
      sans: ["Poiret\\ One", "Arial", "cursive"],
    },
  },
  plugins: [],
};

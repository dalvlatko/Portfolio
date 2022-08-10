/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gunmetal: { DEFAULT: "#292f36ff", light: "#2A3138" },
        turquoise: { DEFAULT: "#00A59A", light: "#07A096" },
        mintcream: "#f7fff7ff",
        bittersweet: { DEFAULT: "#ff6b6bff", light: "#fa6565" },
        crayola: "#ffe66dff",
      },
    },
    fontFamily: {
      sans: ["Poiret\\ One", "Arial", "cursive"],
    },
  },
  plugins: [],
};

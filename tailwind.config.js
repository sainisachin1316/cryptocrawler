/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {nunito: "Nunito" },
    },

    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      cyan: "#3a80e9",
      white: "#fff",
      black: "000000",
      
      red: "#d6436e",
      green: "#25da72",
    },

    fontSize: {
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
}


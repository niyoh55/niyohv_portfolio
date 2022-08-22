/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#1e3891",
        mint_pastel: "#CDF0EA",
        whitish_pastel: "#F9F9F9",
        pink_pastel: "#F6C6EA",
        yellow_pastel: "#FAF4B7",
      },
      fontFamily: {
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        "dark-2": "#5f6368",
        "dark-3": "#202020",
        light: "#ffffff",
        glass: "#1e1e2d80",
      },
      minHeight: {
        navbar: "4rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#383b53',
        'dark-2': '#272d3a',
        light: '#f7f9f9',
        glass: '#1e1e2d80',
      },
      minHeight: {
        navbar: '4rem',
        footer: '8rem',
      },
    },
  },
  plugins: [],
};

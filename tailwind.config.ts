/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // si usás la app directory de Next.js
    ],
    theme: {
      container: {
        center: true,
        padding: "1rem",
      },
      extend: {},
    },
    plugins: [],
  }
  
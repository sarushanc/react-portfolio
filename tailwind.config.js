/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo 500
        secondary: "#a855f7", // Purple 500
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


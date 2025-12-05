/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          900: '#0f172a', // Slate 900
          800: '#1e293b', // Slate 800
          light: '#f8fafc', // Slate 50
        },
        accent: {
          glow: '#8b5cf6', // Violet 500
          hover: '#7c3aed', // Violet 600
        }
      }
    },
  },
  plugins: [],
}

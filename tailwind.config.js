/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          '0%': { 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
        }
      },
      animation: {
        'draw': 'draw 2s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}


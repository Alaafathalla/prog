/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#c58d2c',
          dark: '#0f172a'
        }
      },
      boxShadow: {
        card: '0 30px 80px rgba(15, 23, 42, 0.06)'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode with a class
  theme: {
    extend: {},
  },
  plugins: [],
};

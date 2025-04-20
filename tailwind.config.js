/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c3d4fb',
          300: '#9cb9f9',
          400: '#7096f4',
          500: '#4c74ef',
          600: '#3355e4',
          700: '#2842d2',
          800: '#2437aa',
          900: '#1E3A8A',
        },
        gold: {
          50: '#fbf8e9',
          100: '#f7f0d0',
          200: '#efe1a1',
          300: '#e6cc67',
          400: '#deb83b',
          500: '#D4AF37',
          600: '#ba8f24',
          700: '#96711e',
          800: '#7a5a1f',
          900: '#644a1d',
        },
      },
    },
  },
  plugins: [],
}
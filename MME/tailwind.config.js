/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0A0A0A',
          charcoal: '#151515',
          white: '#FFFFFF',
          silver: '#CFCFCF',
          gold: '#C6A86A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Clash Display', 'Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A86A 0%, #D4AF37 50%, #AA7B2E 100%)',
      }
    },
  },
  plugins: [],
}

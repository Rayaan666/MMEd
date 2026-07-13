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
          black: '#090909',
          charcoal: '#161616',
          white: '#FFFFFF',
          silver: '#DADADA',
          gold: '#C6A86A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Clash Display', 'Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A86A 0%, #D4AF37 50%, #AA7B2E 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-18px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-14px)' },
          '50%':       { transform: 'translateY(0px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':       { opacity: '0.7', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float:         'float 7s ease-in-out infinite',
        floatReverse:  'floatReverse 9s ease-in-out infinite',
        floatSlow:     'floatSlow 12s ease-in-out infinite',
        glow:          'glow 4s ease-in-out infinite',
        shimmer:       'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code'],
      },
      colors: {
        ucup: '#abcdef',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite'
      },
      keyframes: {
        'goyang': {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' }
        }
      },
    },
  },
  plugins: [],
}

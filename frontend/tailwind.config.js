/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
      }
    },
    animation: {
      'fade-in-up': 'fade-in-up 1.25s ease-out'
    },
      backgroundImage: {
        'banner': 'url(/src/images/banner.jpg)',
      },
    },
  },
  plugins: [],
};
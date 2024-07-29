/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'halfRem': '0.5rem',
      },
      colors: {
        'background-color': '#212121',

      },
    },
  },
  plugins: [],
}


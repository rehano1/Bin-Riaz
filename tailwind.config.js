/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "custom-1": "27.5rem",
        "custom-2": "23.875rem",
      },

      width: {
        "custom-1": "22.9rem",
        "custom-2": "23.875rem",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        halfRem: "0.5rem",
      },
      colors: {
        "background-color": "#212121",
      },
    },
  },
  plugins: [],
};

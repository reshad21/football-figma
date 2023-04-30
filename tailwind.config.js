/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'my-font': ['Roboto', 'sans-serif', 'Manrope']
    }
  },
  plugins: [require("daisyui")],
}


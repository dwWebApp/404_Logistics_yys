/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'LIGHT': ['CJ ONLYONE NEW BODY LIGHT'],
      'REGULAR': ['CJ ONLYONE NEW BODY REGULAR'],
      'MEDIUM': ['CJ ONLYONE NEW TITLE MEDIUM'],
      'BOLD': ['CJ ONLYONE NEW TITLE BOLD']
    },
    backgroundPosition: {
      'center-left': 'center left 17px',
      'center-left_2': 'center left 10px',
      'center-right': 'center right 10px',
      'right': 'right',
      'center-bottom': 'center bottom -25%',
    },
    extend: {},
  },
  plugins: [],
}


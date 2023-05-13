/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "background-color": "#EFF0F6",
      "border-color": "#d7d6fc",
      "primary-purple": "#6B00F5",
      "patterns-blue": "#e1f0fe",
      "ghost-white": "#f7f7ff",
      "white-ice": "#defef0"
    },
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      fontWeight:{
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}


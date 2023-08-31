/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow :{
        '1' : "0 0 60px 30px #fff",
      },
      colors :{
        "main-blue" : "hsl(220, 98%, 61%)",
        "second-dark" : "hsl(235, 24%, 19%)",
        "white-1" : "hsl(236, 33%, 92%)",
        "white-2" : "hsl(0, 0%, 98%)",
        ...colors
      },
      backgroundImage: {
        "pattern" : "linear-gradient( to right bottom ,hsl(192, 100%, 67%), hsl(280, 87%, 65%));"
      }
    },
  },
  plugins: [],
}
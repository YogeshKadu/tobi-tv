/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rightous':['rightous','sans-serif'],
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animation-delay"),
  ],
}

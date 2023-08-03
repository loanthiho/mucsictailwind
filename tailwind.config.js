/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#02b875",
        secondary: "#212121",

      },
      screens:{
        sm:{max: "639px"}
      }
    },
  },
  plugins: [],
}


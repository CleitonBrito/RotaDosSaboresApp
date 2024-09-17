/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
        gridTemplateRows : {
            "layout" : "15vh 75vh 10vh"
        },
        backgroundColor: {
            themeMainDefault : "#1E1B4B"
        },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundColor: {
            themeMainDefault : "#1E1B4B"
        },
        animation: {
            'opacity' : 'opacity 0.8s ease-in-out',
        },
        keyframes: {
            'opacity': {
                '0%' : {opacity: 0},
                '70%' : {opacity: 95},
                '100%' : {opacity: 100}
            }
        }
    }
  },
  plugins: [],
}
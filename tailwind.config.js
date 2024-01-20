/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': "'Inter' , sans-serif",
        'Jost': "'Jost' , sans-serif",
        'gilroy': ('')
      },
    },
  },
  plugins: [],
}


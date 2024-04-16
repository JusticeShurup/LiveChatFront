/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


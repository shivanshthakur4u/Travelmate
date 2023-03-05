/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
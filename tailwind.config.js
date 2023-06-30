/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        league: ["League Spartan", "sans-serif"]
      },
      colors:{
        main: "#d1dbe4",
        second: "#057dcd",
        body: "#e8eef1"
      }
    },
  },
  plugins: [],
}
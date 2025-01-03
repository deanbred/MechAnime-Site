/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      ubuntu: ["ubuntu", "serif"],
      shag: ["shag", "italic"],
      fly: ["fly", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

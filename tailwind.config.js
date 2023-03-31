/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#FFF', 
        'secondary': '#B9FD7B',
      },
      backgroundColor: {
        'primary': '#0A0A0A', 
        'secondary': '#B9FD7B',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: "#ffafcc",
        blue: '#8338ec',
        skyblue: '#3a86ff',
        lightpink: '#ff006e',
        orange: "#fb5607",
        primary: "#ffbe0b"
      },
      fontFamily:{
        'lato' :['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}


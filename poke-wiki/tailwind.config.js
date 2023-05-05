/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'poke-pattern': "url('/images/wallpaper.jpg')",
      }
    },
  },
  plugins: [],
}


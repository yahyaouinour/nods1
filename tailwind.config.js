/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', "Roboto", "Arial", "sans-serif"],
        body: ['Google_Sans_Medium', 'sans'],
        costum : ["Roboto","sans-serif"]
      },
    },
  },
  plugins: [],
};

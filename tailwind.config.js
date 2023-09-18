/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#555079",
        secondary: "#050816",
        tertiary: "#F2F0F2"
      },
    },
  },
  plugins: [],
};
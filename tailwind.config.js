/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1a202c',
      },
      textColor: {
        dark: '#f7fafc',
      },
    },
  },
  plugins: [require("daisyui")],
}


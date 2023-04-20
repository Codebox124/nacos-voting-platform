/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/src/assets/login-bg.jpg')",
        'login-bg-2': "url('/src/assets/login-bg-2.jpg')",
      }
    },
  },
  plugins: [],
}
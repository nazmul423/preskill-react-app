/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // এই লাইনটি ডার্ক মোড চালু করার জন্য সবথেকে গুরুত্বপূর্ণ
  theme: {
    extend: {},
  },
  plugins: [],
}
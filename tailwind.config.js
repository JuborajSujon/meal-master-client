/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: [
    "bg-amber-100",
    "bg-green-400",
    "bg-teal-400",
    "bg-yellow-400",
    "bg-teal-500",
    "bg-blue-400",
    "border-red-500",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

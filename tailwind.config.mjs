/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ["AbhayaLibre", "sans-serif"],
      },
      colors: {
        red: "#921360",
        gray90: "#74757A",
        gray80: "#E0DCE2",
        gray100: "#141414",
        purple100: "#897392",
      },
    },
  },
  plugins: [],
};

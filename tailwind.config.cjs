/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-dark": {
          100: "#333333",
          200: "#1f1f1f",
          250: "#141414",
          300: "#020202",
        },
        "neutral-light": {
          100: "#FDFFFC",
          200: "#EBF8FF",
          300: "#D6F1FF",
        },
        primary: {
          100: "#4772D7",
          200: "#2B59C3",
          300: "#254CA7",
        },
        secondary: {
          100: "#1ACCEF",
          200: "#0EB1D2",
          300: "#0C91AC",
        },
      },
      fontFamily: {
        switzer: ["Switzer"],
        azeret: ["Azeret Mono"],
      },
      backgroundImage: {
        "dark-pattern": "url(/static/images/bg-pattern-dark.webp)",
        "light-pattern": "url(/static/images/bg-pattern-light.webp)",
      },
    },
  },
  plugins: [],
};

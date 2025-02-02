/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        secondary: "#B3C0E6",
        text: "#030027",
        primary: "#FAF4C5",
        cancel: "#DE6E4B",
        agree: "#31493C",
      },
      spacing: {
        15: "3.75rem",
        19: "4.75rem",
        49: "12.25rem",
      },
      fontFamily: {
        "Nunito-light": ["Nunito_300Light"],
        "Nunito-regular": ["Nunito_400Regular"],
        "Nunito-bold": ["Nunito_700Bold"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
    ],
  },

  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        blob1: "#A97C50",
        blob2: "#15375A",
      },
    },
  },
};

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    theme: {
      extend: {
        screens: {
          sm: "640px",
          md: "768px", // medium screens
          lg: "1024px",
        },
        colors: {
          peach: "#fbd6c8",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

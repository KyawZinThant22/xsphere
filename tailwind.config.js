/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        green: "#2cc79d",
        btnColor: "#2063df",
        paleGreen: "#E9F9F5",
        yellow: "#fef6e8",
        paleBlue: "#f2f7fd",
        cancelBtn: "rgb(168,184,199,15%)",
      },
      fontFamily: {
        roboto: ["Roboto"],
        opensans: ["Open Sans"],
      },
      scale: {
        flip: "-1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

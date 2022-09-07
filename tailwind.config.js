/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2cc79d",
        btnColor: "#2063df",
        paleGreen: "rgb(46, 195, 155, 0.1)",
        yellow: "#fef6e8",
        paleBlue: "#f2f7fd",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#e4e4e4",
      lightblue: "#1C7ED4",
      blue: "#2F1BD3",
      tan: "#D4B599",
      lightestblack: "#474748",
      lightblack: "#1C1C1C",
      black: "#171717",
    },
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {},
  },
  plugins: [],
};

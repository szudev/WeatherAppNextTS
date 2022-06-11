module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "140%": "140%",
        "clamp-components-screen-margin":
          "clamp(1.00rem, calc(0.83rem + 0.98vw), 2.00rem)",
      },
      colors: {
        "hover-light-color": "#EDF2F7",
        "hover-dark-color": "#26242E",
      },
    },
  },
  plugins: [],
};

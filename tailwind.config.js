module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "system-ui"],
    },
    extend: {
      colors: {
        background: "#f0f0f0",
        gray: "#848081",
        green: "#576e74",
      },
      scale: {
        "101": "1.01",
      },
      spacing: {
        "screen-9/10": `${100 * (9 / 10)}vh`,
      },
    },
  },
  variants: {},
  plugins: [],
};

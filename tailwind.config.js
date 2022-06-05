module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
        hover: "#766cf1",
      },
      fontFamily: {
        "red-hat-display": ["'Red Hat Display', sans-serif;"],
      },
      screens: {
        mobile: { max: "375px" },
        desktop: { max: "1440px" },
      },
      backgroundImage: {
        mobile: "url('../images/pattern-background-mobile.svg')",
        desktop: "url('../images/pattern-background-desktop.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

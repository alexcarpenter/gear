const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { lime } = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
    colors: {
      bronze: {
        50: "#f8f5f5",
        100: "#f1ecec",
        200: "#ddcfce",
        300: "#c8b3b1",
        400: "#9e7977",
        500: "#75403c",
        600: "#693a36",
        700: "#58302d",
        800: "#462624",
        900: "#391f1d",
      },
      blue: {
        50: "#f3f5f5",
        100: "#e6eaec",
        200: "#c1cbcf",
        300: "#9cacb2",
        400: "#526d79",
        500: "#082f3f",
        600: "#072a39",
        700: "#06232f",
        800: "#051c26",
        900: "#04171f",
      },
      green: {
        50: "#f5f6f4",
        100: "#eaedea",
        200: "#cbd2ca",
        300: "#abb6ab",
        400: "#6c806b",
        500: "#2d492c",
        600: "#294228",
        700: "#223721",
        800: "#1b2c1a",
        900: "#162416",
      },
      yellow: {
        50: "#fcfaf4",
        100: "#faf5ea",
        200: "#f2e5ca",
        300: "#ead5ab",
        400: "#dbb66b",
        500: "#cb972c",
        600: "#b78828",
        700: "#987121",
        800: "#7a5b1a",
        900: "#634a16",
      },
      gray: colors.gray,
      white: "#FFFFFF",
      black: "#04070C",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const prose = {
        ".prose": {
          "> * + *": {
            marginTop: "1rem",
          },
          "* + h2, * + h3": {
            marginTop: "2rem",
          },
          "ul > li::before": {
            content: "'—'",
            marginRight: ".5rem",
          },
        },
      };

      addComponents(prose);
    }),
  ],
};

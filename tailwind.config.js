const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
      gray: colors.gray,
      white: "#FFFFFF",
      black: "#04070C",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ theme, addComponents }) {
      const textUnderline = {
        ".text-underline": {
          textDecoration: "underline",
          textDecorationColor: theme("colors.gray.300"),
        },
      };
      const prose = {
        ".prose, .prose > div": {
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
          a: {
            textDecoration: "underline",
            textDecorationColor: theme("colors.gray.300"),
            "&:hover, &:focus": {
              color: theme("colors.gray.900"),
            },
          },
        },
      };

      addComponents(prose);
      addComponents(textUnderline);
    }),
  ],
};

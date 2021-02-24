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
      yellow: "#FEFF54",
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
          color: "inherit",
          "&:hover, &:focus": {
            color: theme("colors.gray.900"),
            textDecoration: "none",
            backgroundColor: "#FEFF54",
          },
        },
      };
      const listStyled = {
        "ul.list-styled": {
          "& > li": {
            paddingLeft: "1.75rem",
            position: "relative",
          },
          "& > li::before": {
            content: "'—'",
            position: "absolute",
            left: "0",
            color: theme("colors.gray.300"),
          },
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
          ul: {
            "& > li": {
              paddingLeft: "1.75rem",
              position: "relative",
            },
            "& > li::before": {
              content: "'—'",
              position: "absolute",
              left: "0",
              color: theme("colors.gray.300"),
            },
          },
          a: {
            textDecoration: "underline",
            textDecorationColor: theme("colors.gray.300"),
            "&:hover, &:focus": {
              color: theme("colors.gray.900"),
              textDecoration: "none",
              backgroundColor: "#FEFF54",
            },
          },
        },
      };

      addComponents(listStyled);
      addComponents(prose);
      addComponents(textUnderline);
    }),
  ],
};

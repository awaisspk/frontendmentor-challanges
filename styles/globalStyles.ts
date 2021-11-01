import { globalCss } from "@stitchesConfig";

export const globalStyles = globalCss({
  html: {
    font: "100%/1.25 $fonts$primary",

    "@bp2": {
      font: "112.5%/1.45 $fonts$primary",
    },
  },

  "@font-face ": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "100 900",
    fontDisplay: "swap",
    src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
    unicodeRange:
      "U+A,U+20,U+21,U+23,U+27,U+2C-3A,U+40-59,U+61-7A,U+A9,U+200D,U+2014,U+1F389,U+1F44B,U+1F468,U+1F4BB,U+1F4DD,U+1F92B",
  },
});

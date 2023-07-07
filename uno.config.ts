// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [["custom-rule", { color: "red" }]],
  variants: [],
  shortcuts: [
    // ...
    { textUno: "text-lg text-orange hover:text-teal" },
    {
      responsiveBorder:
        "absolute flex items-center justify-center bg-light-700 dark:bg-dark-800 [&>span]-(w-4 h-4 text-gray-400)",
    },
  ],
  theme: {
    darkMode: ["dark", '[data-mode="dark"]'],

    // Replaces all of the default values
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      indy: {
        50: "#e0d3ef",
        100: "#c4b7d4",
        200: "#a99cb8",
        300: "#8d809d",
        400: "#726482",
        500: "#564867",
        600: "#3b2d4b",
        700: "#1f1130",
        800: "#1a0f29",
        900: "#150c21",
      },
      // blue: "#1fb6ff",
      // blue: "#1f1",
      // "blue-100": "#1f1",
      // purple: "#7e5bef",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // Adds a new breakpoint in addition to the default breakpoint
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      zIndex: {
        "100": "100",
      },
    },
  },
});

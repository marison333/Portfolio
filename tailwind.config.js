import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
    defaultExtendTheme: "dark",
    addCommonColors: true,
    colors: {
      background: "",
      foreground: "",
    },
    themes: {
      dark: {
        background: "#101010",
        foreground: "",
        primary: {},
        secondary: {},
        focus: "",
      },
      light: {},
    },
    layout: {}
  })],
}

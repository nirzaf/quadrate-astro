/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        100: "#fffaf0",  // Very light cream
        200: "#fef3c7",  // Light cream
        300: "#fde68a",  // Soft cream
        400: "#fcd34d",  // Medium cream
        500: "#fbbf24",  // Deeper cream
        600: "#f59e0b",  // Darker cream
        700: "#d97706",  // Deep cream
        800: "#b45309",  // Dark cream
        900: "#92400e",  // Very dark cream
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#dbeafe",  // Light blue
        200: "#bfdbfe",  // Slightly darker blue
        300: "#60a5fa",  // Moderate blue
        400: "#3b82f6",  // Primary blue
        500: "#2563eb",  // Darker blue
        600: "#1d4ed8",  // Darker shade of blue
        700: "#1e40af",  // Very dark blue
        800: "#1e3a8a",  // Deep blue
        900: "#1e3a6d",  // Almost navy blue
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};

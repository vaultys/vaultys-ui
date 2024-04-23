import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "modern-blue": "#00A8CC",
        "modern-blue-light": "#4dcbed",
        warning: "#D35400",
        "warning-light": "#e98a08",
        danger: "#992d22",
        success: "#16A085",
        primary: "#4f386e",
        "primary-dark": "#b79dcb",
        "primary-hover": "#7A59A5",
        "primary-dark-hover": "#4f386e",
        secondary: "#b79dcb",
        "secondary-dark": "#4f386e",
        light: "#f5f5f5",
        "light-secondary": "#ffffff",
        dark: "#333333",
        "dark-secondary": "#515151",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

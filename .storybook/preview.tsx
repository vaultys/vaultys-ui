import "../src/index.css";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    darkMode: {
      current: "light",
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#333333" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "white" },

      stylePreview: true,
    },
  },
};

export default preview;

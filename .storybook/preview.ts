import "../src/index.css";
import type { Preview } from "@storybook/nextjs";
import { withThemeByClassName } from "@storybook/addon-themes";

export const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "dark",
      classTarget: "body",
      stylePreview: true,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

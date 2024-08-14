import "../src/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "dark",
      classTarget: "body",
      stylePreview: true,
    },
  },
};

export default preview;

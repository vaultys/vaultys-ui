module.exports = {
  plugins: {
    tailwindcss: {
      config: process.env.MODE === "storybook" ? "./tailwind.storybook.config.ts" : "tailwind.config.ts",
    },
    autoprefixer: {},
  },
};

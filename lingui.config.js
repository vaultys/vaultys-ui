/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "fr", "de", "zh"],
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src/app", "src/components"],
    },
  ],
  format: "po",
};

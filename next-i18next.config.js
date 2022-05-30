const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
};

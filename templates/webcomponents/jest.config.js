const config = {
  verbose: true,
  testEnvironment: "@happy-dom/jest-environment",
  moduleFileExtensions: ["js", "html"],
  transform: {
    "^.+\\.html$": "./html-loader.js",
  },
};

module.exports = config;

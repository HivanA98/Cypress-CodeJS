const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));

  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 100000,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false,
    setupNodeEvents,
    stepDefinitions: 'cypress/stepsDefinition',
    baseUrl: "https://voila.id",

  },
});
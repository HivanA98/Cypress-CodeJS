const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));

  return config;
}

module.exports = defineConfig({
  projectId: 'x13ofj',
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false,
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents,
      
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    }
  }
})

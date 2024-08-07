const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
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
});

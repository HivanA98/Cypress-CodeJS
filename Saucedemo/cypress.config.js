const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'x13ofj',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})

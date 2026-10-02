const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }))
  return config
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.beautyhaul.com',
    specPattern: 'cypress/e2e/**/*.feature',
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    retries: { runMode: 1, openMode: 0 },
    setupNodeEvents,
  },
})

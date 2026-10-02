import 'cypress-mochawesome-reporter/register'

// DemoQA memuat banyak script iklan yang sering melempar error dan menutupi elemen.
Cypress.on('uncaught:exception', () => false)

beforeEach(() => {
  const adHosts = [
    '**/pagead2.googlesyndication.com/**',
    '**/*.doubleclick.net/**',
    '**/*.adplus.*/**',
    '**/securepubads.g.doubleclick.net/**',
    '**/googletagmanager.com/**',
    '**/google-analytics.com/**',
  ]
  adHosts.forEach((url) => cy.intercept(url, { statusCode: 204, log: false }))
})

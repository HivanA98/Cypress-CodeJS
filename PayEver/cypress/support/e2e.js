import 'cypress-mochawesome-reporter/register'

// Aplikasi Angular staging kadang melempar error dari script pihak ketiga.
Cypress.on('uncaught:exception', () => false)

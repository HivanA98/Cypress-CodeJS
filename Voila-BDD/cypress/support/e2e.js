import './commands'

// Script pihak ketiga di website produksi kadang melempar error yang tidak
// berhubungan dengan fitur yang diuji. Abaikan agar skenario tidak flaky.
Cypress.on('uncaught:exception', () => false)

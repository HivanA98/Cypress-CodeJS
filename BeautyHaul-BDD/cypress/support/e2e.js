// Script pihak ketiga (analytics, chat, dsb.) di website produksi kadang melempar error
// yang tidak berhubungan dengan fitur yang diuji. Abaikan agar test tidak flaky.
Cypress.on('uncaught:exception', () => false)

beforeEach(() => {
  // Blokir tracker pihak ketiga agar halaman lebih cepat & stabil.
  const trackers = [
    '**/*.useinsider.com/**',
    '**/googletagmanager.com/**',
    '**/google-analytics.com/**',
    '**/connect.facebook.net/**',
    '**/analytics.tiktok.com/**',
  ]
  trackers.forEach((url) => cy.intercept(url, { statusCode: 204, log: false }))
})

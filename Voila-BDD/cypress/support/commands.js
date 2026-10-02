import { loginPage } from '../pages'

/**
 * Login dengan akun test dari cypress.env.json (lihat cypress.env.example.json),
 * lalu simpan session-nya agar skenario lain tidak perlu login ulang.
 * Di Cypress 16, nilai rahasia dibaca dengan cy.env() (bukan Cypress.env()).
 */
Cypress.Commands.add('loginWithTestAccount', () => {
  cy.env(['VOILA_EMAIL', 'VOILA_PASSWORD']).then(({ VOILA_EMAIL, VOILA_PASSWORD }) => {
    if (!VOILA_EMAIL || !VOILA_PASSWORD) {
      throw new Error('VOILA_EMAIL / VOILA_PASSWORD belum diisi. Salin cypress.env.example.json ke cypress.env.json.')
    }

    cy.session(['voila', VOILA_EMAIL], () => {
      loginPage.visit().login(VOILA_EMAIL, VOILA_PASSWORD)
      loginPage.shouldBeLoggedIn()
    })
  })
})

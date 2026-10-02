import { loginPage, inventoryPage } from '../pages'

/**
 * Login melalui UI lalu simpan session-nya, sehingga test yang
 * tidak menguji halaman login bisa langsung mulai dari halaman inventory.
 *
 * @example cy.loginAs('standard')
 */
Cypress.Commands.add('loginAs', (userKey = 'standard') => {
  cy.fixture('users').then((users) => {
    const { username, password } = users[userKey]

    cy.session(
      ['saucedemo', username],
      () => {
        loginPage.visit().login(username, password)
        cy.url().should('include', '/inventory.html')
      },
      {
        validate() {
          cy.getCookie('session-username').should('exist')
        },
      },
    )
  })

  inventoryPage.visit()
})

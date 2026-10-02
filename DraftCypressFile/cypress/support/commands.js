/**
 * Tempat custom command. Contoh:
 *
 * Cypress.Commands.add('loginAs', (userKey) => {
 *   cy.fixture('users').then((users) => {
 *     cy.session(userKey, () => {
 *       loginPage.visit().login(users[userKey].username, users[userKey].password)
 *     })
 *   })
 * })
 */

/** Ambil elemen berdasarkan atribut data-cy, mis. cy.getByCy('submit'). */
Cypress.Commands.add('getByCy', (id, options) => cy.get(`[data-cy="${id}"]`, options))

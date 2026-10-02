/**
 * Login secara programatik (tanpa UI) dengan mengirim form login lewat cy.request,
 * lalu simpan cookie-nya dengan cy.session. Jauh lebih cepat daripada login lewat UI.
 * Halaman login sendiri tetap diuji lewat UI di login.cy.js.
 */
Cypress.Commands.add('loginByApi', () => {
  cy.fixture('users').then(({ valid }) => {
    cy.session(['zero-bank', valid.username], () => {
      cy.request({
        method: 'POST',
        url: '/signin.html',
        form: true,
        body: {
          user_login: valid.username,
          user_password: valid.password,
          submit: 'Sign in',
        },
        followRedirect: false,
      })
        .its('status')
        .should('eq', 302)
    })
  })
})

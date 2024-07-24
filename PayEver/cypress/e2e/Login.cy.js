describe('Login', () => {
  it('passes', () => {
    cy.visit('https://commerceos.staging.devpayever.com/login')
    cy.get("input[type='email']").click({ force: true }).type('tesst@yahoo.com')
    cy.get('[type="password"]').click({ force: true }).type('RaMaDi!2#4')
    cy.get('[class="login-button"]').not('[disabled]').click()
  })
})
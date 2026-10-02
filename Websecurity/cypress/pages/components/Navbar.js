/** Navbar atas + tab menu Online Banking setelah login. */
class Navbar {
  get searchInput() {
    return cy.get('#searchTerm')
  }

  openTab(tabName) {
    cy.get('#settingsBox').should('exist')
    cy.contains('.nav-tabs a', tabName).click()
    return this
  }

  search(keyword) {
    this.searchInput.type(`${keyword}{enter}`)
    return this
  }

  logout() {
    // Link logout ada di dropdown yang tersembunyi; buka dropdown lalu klik.
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
    return this
  }
}

export default new Navbar()

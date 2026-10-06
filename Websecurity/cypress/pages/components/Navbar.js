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
    // Link logout berada di dropdown Bootstrap. Dropdown hanya bisa dibuka jika JS/CSS
    // website termuat, padahal saat ini file tersebut 404. Link-nya adalah href biasa
    // ke /logout.html, jadi klik langsung dengan force agar tidak bergantung pada dropdown.
    cy.get('#logout_link').click({ force: true })
    return this
  }
}

export default new Navbar()

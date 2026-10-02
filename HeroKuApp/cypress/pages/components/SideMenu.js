/** Menu samping (hamburger) yang tersedia di semua halaman. */
class SideMenu {
  open() {
    cy.get('#menu-toggle').click()
    cy.get('#sidebar-wrapper').should('have.class', 'active')
    return this
  }

  navigateTo(menuText) {
    this.open()
    cy.get('#sidebar-wrapper').contains('a', menuText).click()
    return this
  }

  logout() {
    return this.navigateTo('Logout')
  }
}

export default new SideMenu()

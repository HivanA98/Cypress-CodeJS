/** Komponen header & side menu yang muncul di semua halaman setelah login. */
class HeaderComponent {
  get cartLink() {
    return cy.get('[data-test="shopping-cart-link"]')
  }

  get cartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]')
  }

  get menuButton() {
    return cy.get('#react-burger-menu-btn')
  }

  openCart() {
    this.cartLink.click()
    return this
  }

  openMenu() {
    this.menuButton.click()
    return this
  }

  logout() {
    this.openMenu()
    cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click()
    return this
  }

  resetAppState() {
    this.openMenu()
    cy.get('[data-test="reset-sidebar-link"]').should('be.visible').click()
    return this
  }

  shouldHaveCartCount(count) {
    if (count === 0) {
      this.cartBadge.should('not.exist')
    } else {
      this.cartBadge.should('have.text', String(count))
    }
    return this
  }
}

export default new HeaderComponent()

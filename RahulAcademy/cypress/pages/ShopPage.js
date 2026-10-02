class ShopPage {
  get products() {
    return cy.get('app-card')
  }

  get checkoutLink() {
    return cy.contains('a.nav-link', 'Checkout')
  }

  visit() {
    cy.visit('/angularpractice/shop')
    return this
  }

  addToCart(productName) {
    cy.contains('app-card', productName).find('button').click()
    return this
  }

  addProductsToCart(productNames) {
    productNames.forEach((name) => this.addToCart(name))
    return this
  }

  openCheckout() {
    this.checkoutLink.click()
    return this
  }

  shouldHaveCartCount(count) {
    this.checkoutLink.should('contain.text', `Checkout ( ${count} )`)
    return this
  }
}

export default new ShopPage()

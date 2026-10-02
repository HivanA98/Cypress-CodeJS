import BasePage from './BasePage'

class CartPage extends BasePage {
  path = '/cart.html'

  get items() {
    return cy.get('.cart_item')
  }

  get itemNames() {
    return cy.get('.cart_item .inventory_item_name')
  }

  get checkoutButton() {
    return this.byTest('checkout')
  }

  get continueShoppingButton() {
    return this.byTest('continue-shopping')
  }

  removeItem(productName) {
    cy.contains('.cart_item', productName).find('button').click()
    return this
  }

  checkout() {
    this.checkoutButton.click()
    return this
  }

  continueShopping() {
    this.continueShoppingButton.click()
    return this
  }

  shouldContainProducts(productNames) {
    this.items.should('have.length', productNames.length)
    productNames.forEach((name) => this.itemNames.should('contain', name))
    return this
  }
}

export default new CartPage()

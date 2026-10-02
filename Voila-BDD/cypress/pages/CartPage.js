import BasePage from './BasePage'

class CartPage extends BasePage {
  get checkoutButton() {
    return this.byTestId('CT_Component_btnCheckout')
  }

  removeItem(index = 0) {
    this.byTestId(`CT_Component_removeCart${index}`).click()
    return this
  }

  checkout() {
    this.checkoutButton.should('be.visible').click()
    return this
  }
}

export default new CartPage()

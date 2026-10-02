import BasePage from '../BasePage'

class Header extends BasePage {
  get signInButton() {
    return this.byTestId('CT-SignIn-Btn')
  }

  get registerButton() {
    return this.byTestId('CT-Register-Btn')
  }

  get cartButton() {
    return this.byTestId('CT-Go-To-Cart')
  }

  categoryLink(category) {
    return this.byTestId(`CT_first_tier_link_${category}`)
  }

  search(keyword) {
    this.byTestId('CT-Search').click()
    this.byTestId('CT-Search-Input').should('be.visible').type(`${keyword}{enter}`)
    return this
  }

  openSignIn() {
    this.signInButton.click()
    return this
  }

  openCart() {
    this.cartButton.click()
    return this
  }
}

export default new Header()

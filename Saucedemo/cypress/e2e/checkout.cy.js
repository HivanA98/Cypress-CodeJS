import { inventoryPage, cartPage, checkoutPage, header } from '../pages'
import { customer, products } from '../fixtures/checkout.json'
import messages from '../fixtures/messages.json'

describe('Checkout', () => {
  beforeEach(() => {
    cy.loginAs('standard')
    inventoryPage.addProductsToCart(products)
    header.openCart()
    cartPage.checkout()
  })

  it('E2E: completes checkout with multiple products', () => {
    checkoutPage.fillInformation(customer).continue()
    checkoutPage.shouldHaveCorrectTotals().finish()
    checkoutPage.shouldBeComplete()
    header.shouldHaveCartCount(0)
  })

  context('Customer information validation', () => {
    it('requires first name', () => {
      checkoutPage
        .fillInformation({ ...customer, firstName: '' })
        .continue()
        .shouldShowError(messages.checkout.firstNameRequired)
    })

    it('requires last name', () => {
      checkoutPage
        .fillInformation({ ...customer, lastName: '' })
        .continue()
        .shouldShowError(messages.checkout.lastNameRequired)
    })

    it('requires postal code', () => {
      checkoutPage
        .fillInformation({ ...customer, postalCode: '' })
        .continue()
        .shouldShowError(messages.checkout.postalCodeRequired)
    })
  })
})

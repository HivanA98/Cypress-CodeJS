import { loginPage, inventoryPage, cartPage, checkoutPage, header } from '../pages'
import users from '../fixtures/users.json'
import messages from '../fixtures/messages.json'
import { customer } from '../fixtures/checkout.json'

/**
 * Saucedemo menyediakan beberapa user dengan "bug" bawaan.
 * Test di sini mendokumentasikan perilaku masing-masing user tersebut.
 */
describe('Special user types', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('performance_glitch_user: logs in despite the delay', () => {
    loginPage.login(users.performance.username, users.performance.password)
    cy.url({ timeout: 15000 }).should('include', '/inventory.html')
    inventoryPage.shouldBeDisplayed()
  })

  it('problem_user: every product shows the same image (known bug)', () => {
    loginPage.login(users.problem.username, users.problem.password)

    cy.get('.inventory_item img').then(($imgs) => {
      const uniqueSources = new Set(Cypress._.map($imgs, 'src'))
      expect(uniqueSources.size, 'unique image count').to.eq(1)
    })
  })

  it('problem_user: last name cannot be filled at checkout (known bug)', () => {
    loginPage.login(users.problem.username, users.problem.password)
    inventoryPage.addToCart('Sauce Labs Backpack')
    header.openCart()
    cartPage.checkout()

    checkoutPage.fillInformation(customer).continue()
    checkoutPage.shouldShowError(messages.checkout.lastNameRequired)
  })

  it('locked_out_user: cannot log in', () => {
    loginPage
      .login(users.locked.username, users.locked.password)
      .shouldShowError(messages.login.lockedOut)
  })
})

import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { header, cartPage, checkoutPage } from '../../pages'

When('I open the bag', () => {
  header.openCart()
})

When('I remove the first product from the bag', () => {
  cartPage.removeItem(0)
})

When('I proceed to checkout', () => {
  cartPage.checkout()
})

When('I choose a payment method', () => {
  checkoutPage.selectPayment()
})

When('I choose the courier {string}', (courier) => {
  checkoutPage.selectCourier(courier)
})

When('I place the order', () => {
  checkoutPage.saveOrderTotal().placeOrder()
})

Then('I should see the delivery address', () => {
  checkoutPage.deliveryCard.should('be.visible')
})

Then('the payment page should show the same total as the checkout summary', () => {
  checkoutPage.shouldShowSameTotalOnPaymentPage()
})

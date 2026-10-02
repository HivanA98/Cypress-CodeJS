import { Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage, registerPage } from '../../pages'

// Step yang dipakai bersama oleh login.feature dan register.feature.
// Page Object dipilih berdasarkan path halaman yang sedang dibuka.
const currentPage = () =>
  cy.location('pathname').then((path) => (path.includes('register') ? registerPage : loginPage))

Then('the {string} field should show {string}', (field, message) => {
  currentPage().then((page) => {
    page.shouldShowFieldError(field, message)
  })
})

Then('I should see the message {string}', (message) => {
  currentPage().then((page) => {
    page.shouldShowToast(message)
  })
})

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { registerPage } from '../../pages'

Given('I am on the register page', () => {
  registerPage.visit()
})

Given('the register API is stubbed', () => {
  registerPage.stubRegisterApi()
})

When('I submit the register form', () => {
  registerPage.submit()
})

When('I type {string} into the {string} field', (value, field) => {
  registerPage.field(field).type(value)
})

Then('I should see these required field errors:', (dataTable) => {
  dataTable.hashes().forEach(({ field, message }) => {
    registerPage.shouldShowFieldError(field, message)
  })
})

Then('the {string} field should contain {string}', (field, expected) => {
  registerPage.field(field).should('have.value', expected)
})

Then('no register request should be sent', () => {
  cy.get('@registerRequest.all').should('have.length', 0)
})

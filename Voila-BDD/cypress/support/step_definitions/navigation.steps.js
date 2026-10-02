import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { header, homePage, loginPage } from '../../pages'

Given('I am on the homepage', () => {
  homePage.visit()
})

When('I click Sign In in the header', () => {
  header.openSignIn()
})

Then('I should see these categories in the header:', (dataTable) => {
  dataTable.hashes().forEach(({ category }) => {
    header.categoryLink(category).should('be.visible')
  })
})

Then('I should see the sign in form', () => {
  loginPage.shouldBeDisplayed()
})

Then('I should see the Google and Facebook sign in options', () => {
  loginPage.googleButton.should('be.visible')
  loginPage.facebookButton.should('be.visible')
})

Then('I should be redirected to the sign in page', () => {
  loginPage.shouldBeDisplayed()
})

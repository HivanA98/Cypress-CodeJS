import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { header, searchResultPage, productDetailPage } from '../../pages'

When('I search for {string}', (keyword) => {
  header.search(keyword)
})

When('I open the first product that is in stock', () => {
  searchResultPage.openFirstInStockProduct()
})

When('I add the product to the bag', () => {
  productDetailPage.addToBag()
})

Then('I should see search results for {string}', (keyword) => {
  searchResultPage.shouldShowResultsFor(keyword)
})

Then('I should see the product detail page of that product', () => {
  productDetailPage.shouldBeDisplayed()
  cy.get('@productName').then((name) => {
    productDetailPage.productName.should('contain.text', name.trim())
  })
})

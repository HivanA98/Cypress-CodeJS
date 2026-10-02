import { feedbackPage, navbar } from '../pages'

describe('Public pages', () => {
  it('searches the website', () => {
    cy.visit('/')
    navbar.search('online')

    cy.contains('h2', 'Search Results:').should('be.visible')
    cy.get('.top_offset li a').should('have.length.at.least', 1).first().should('contain.text', 'Online')
  })

  it('submits the feedback form', () => {
    const feedback = {
      name: 'Ivan Armadi',
      email: 'ivan.qa.test@example.com',
      subject: 'Portfolio test',
      comment: 'This feedback was sent by an automated Cypress test.',
    }

    feedbackPage.visit().fillForm(feedback).submit()
    feedbackPage.shouldThank(feedback.name)
  })
})

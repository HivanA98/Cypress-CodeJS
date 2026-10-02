class FeedbackPage {
  visit() {
    cy.visit('/feedback.html')
    return this
  }

  fillForm({ name, email, subject, comment }) {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    return this
  }

  submit() {
    cy.get('input[name="submit"]').click()
    return this
  }

  shouldThank(name) {
    cy.location('pathname').should('eq', '/sendFeedback.html')
    cy.contains(`Thank you for your comments, ${name}.`).should('be.visible')
    return this
  }
}

export default new FeedbackPage()

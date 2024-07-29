describe('template spec', () => {
  it('passes', () => {
    cy.origin('https://demoqa.com', () => {
      cy.visit('/checkbox');
    });
    //cy.get('[class="card mt-4 top-card"]').eq(0).click()
  })
})
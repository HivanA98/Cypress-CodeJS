class AutomationPracticePage {
  visit() {
    cy.visit('/AutomationPractice/')
    return this
  }

  // Radio, checkbox, dropdown
  radio(value) {
    return cy.get(`input[name="radioButton"][value="${value}"]`)
  }

  checkbox(value) {
    return cy.get(`#checkbox-example input[value="${value}"]`)
  }

  get dropdown() {
    return cy.get('#dropdown-class-example')
  }

  // Autocomplete
  selectCountry(keyword, country) {
    cy.get('#autocomplete').type(keyword)
    cy.get('.ui-menu-item div').contains(new RegExp(`^${country}$`)).click()
    return this
  }

  get countryInput() {
    return cy.get('#autocomplete')
  }

  // Switch tab
  get openTabLink() {
    return cy.get('#opentab')
  }

  // Alert & confirm
  get nameInput() {
    return cy.get('#name')
  }

  get alertButton() {
    return cy.get('#alertbtn')
  }

  get confirmButton() {
    return cy.get('#confirmbtn')
  }

  // Show / hide
  get displayedText() {
    return cy.get('#displayed-text')
  }

  hideTextbox() {
    cy.get('#hide-textbox').click()
    return this
  }

  showTextbox() {
    cy.get('#show-textbox').click()
    return this
  }

  // Tables
  /** Baris tabel kursus (`#product[name="courses"]`) sebagai array object. */
  getCourses() {
    return cy.get('table[name="courses"] tr:has(td)').then(($rows) =>
      Cypress._.map($rows, (row) => ({
        instructor: row.cells[0].innerText.trim(),
        course: row.cells[1].innerText.trim(),
        price: Number(row.cells[2].innerText),
      })),
    )
  }

  get fixedHeaderAmounts() {
    return cy.get('.tableFixHead tbody td:nth-child(4)')
  }

  get totalAmount() {
    return cy.get('.totalAmount')
  }

  // Mouse hover
  hoverMenuLink(text) {
    // Cypress tidak punya hover asli; tampilkan menu secara langsung lalu klik link-nya.
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('.mouse-hover-content a', text).click()
    return this
  }
}

export default new AutomationPracticePage()

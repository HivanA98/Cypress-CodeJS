class AngularFormPage {
  get form() {
    return cy.get('form')
  }

  get nameInput() {
    return cy.get('form input[name="name"]')
  }

  /** Input di luar form yang ter-binding (two-way binding) ke field name. */
  get boundNameInput() {
    return cy.get('h4 input[name="name"]')
  }

  get emailInput() {
    return cy.get('input[name="email"]')
  }

  get passwordInput() {
    return cy.get('#exampleInputPassword1')
  }

  get iceCreamCheckbox() {
    return cy.get('#exampleCheck1')
  }

  get genderSelect() {
    return cy.get('#exampleFormControlSelect1')
  }

  get birthdayInput() {
    return cy.get('input[name="bday"]')
  }

  get submitButton() {
    return cy.get('input[type="submit"]')
  }

  get successAlert() {
    return cy.get('.alert-success')
  }

  get errorAlerts() {
    return cy.get('.alert-danger')
  }

  employmentRadio(status) {
    const ids = { Student: '#inlineRadio1', Employed: '#inlineRadio2', Entrepreneur: '#inlineRadio3' }
    return cy.get(ids[status])
  }

  visit() {
    cy.visit('/angularpractice/')
    return this
  }

  fillForm({ name, email, password, likesIceCream, gender, employment, birthday }) {
    if (name) this.nameInput.type(name)
    if (email) this.emailInput.type(email)
    if (password) this.passwordInput.type(password, { log: false })
    if (likesIceCream) this.iceCreamCheckbox.check()
    if (gender) this.genderSelect.select(gender)
    if (employment) this.employmentRadio(employment).check()
    if (birthday) this.birthdayInput.type(birthday)
    return this
  }

  submit() {
    this.submitButton.click()
    return this
  }

  goToShop() {
    cy.contains('a.nav-link', 'Shop').click()
    return this
  }
}

export default new AngularFormPage()

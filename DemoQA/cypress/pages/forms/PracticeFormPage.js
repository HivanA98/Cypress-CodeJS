import BasePage from '../BasePage'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

class PracticeFormPage extends BasePage {
  path = '/automation-practice-form'

  get firstNameInput() {
    return cy.get('#firstName')
  }

  get lastNameInput() {
    return cy.get('#lastName')
  }

  get emailInput() {
    return cy.get('#userEmail')
  }

  get mobileInput() {
    return cy.get('#userNumber')
  }

  get form() {
    return cy.get('#userForm')
  }

  get submitButton() {
    return cy.get('#submit')
  }

  get resultModal() {
    return cy.get('.modal-content')
  }

  selectGender(gender) {
    cy.get(`input[name="gender"][value="${gender}"]`).check({ force: true })
    return this
  }

  /** @param {Date} date */
  setDateOfBirth(date) {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(MONTHS[date.getMonth()])
    cy.get('.react-datepicker__year-select').select(String(date.getFullYear()))
    cy.get(
      `.react-datepicker__day--0${String(date.getDate()).padStart(2, '0')}:not(.react-datepicker__day--outside-month)`,
    ).click()
    return this
  }

  addSubjects(subjects) {
    subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject)
      cy.get('.subjects-auto-complete__option').contains(subject).click()
    })
    return this
  }

  selectHobbies(hobbies) {
    hobbies.forEach((hobby) => {
      cy.contains('#hobbiesWrapper label', hobby).click()
    })
    return this
  }

  uploadPicture(fixturePath) {
    cy.get('#uploadPicture').selectFile(fixturePath)
    return this
  }

  selectStateAndCity(state, city) {
    cy.get('#state').click()
    cy.get('#state').contains('[class*="option"]', state).click()
    cy.get('#city').click()
    cy.get('#city').contains('[class*="option"]', city).click()
    return this
  }

  /** Isi seluruh form. Field opsional yang tidak diberikan akan dilewati. */
  fillForm(student) {
    const {
      firstName,
      lastName,
      email,
      gender,
      mobile,
      dateOfBirth,
      subjects,
      hobbies,
      picture,
      address,
      state,
      city,
    } = student

    if (firstName) this.firstNameInput.type(firstName)
    if (lastName) this.lastNameInput.type(lastName)
    if (email) this.emailInput.type(email)
    if (gender) this.selectGender(gender)
    if (mobile) this.mobileInput.type(mobile)
    if (dateOfBirth) this.setDateOfBirth(dateOfBirth)
    if (subjects) this.addSubjects(subjects)
    if (hobbies) this.selectHobbies(hobbies)
    if (picture) this.uploadPicture(picture)
    if (address) cy.get('#currentAddress').type(address)
    if (state && city) this.selectStateAndCity(state, city)
    return this
  }

  submit() {
    this.submitButton.click({ force: true })
    return this
  }

  /** Nilai pada tabel hasil submit berdasarkan label kolom kiri. */
  resultValue(label) {
    return this.resultModal.contains('td', label).next('td')
  }
}

export default new PracticeFormPage()

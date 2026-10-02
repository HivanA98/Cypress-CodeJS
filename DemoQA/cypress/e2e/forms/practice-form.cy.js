import { practiceFormPage } from '../../pages'
import { buildStudent } from '../../support/factories'

const formatDob = (date) =>
  `${String(date.getDate()).padStart(2, '0')} ${date.toLocaleString('en-US', { month: 'long' })},${date.getFullYear()}`

describe('Forms - Practice Form', () => {
  beforeEach(() => {
    practiceFormPage.visit()
  })

  it('submits a fully filled form and shows a summary', () => {
    const student = buildStudent()

    practiceFormPage.fillForm(student).submit()

    practiceFormPage.resultModal.should('contain.text', 'Thanks for submitting the form')
    practiceFormPage
      .resultValue('Student Name')
      .should('have.text', `${student.firstName} ${student.lastName}`)
    practiceFormPage.resultValue('Student Email').should('have.text', student.email)
    practiceFormPage.resultValue('Gender').should('have.text', student.gender)
    practiceFormPage.resultValue('Mobile').should('have.text', student.mobile)
    practiceFormPage.resultValue('Date of Birth').should('have.text', formatDob(student.dateOfBirth))
    practiceFormPage.resultValue('Subjects').should('have.text', student.subjects.join(', '))
    practiceFormPage.resultValue('Hobbies').should('have.text', student.hobbies.join(', '))
    practiceFormPage.resultValue('Picture').should('have.text', 'avatar.png')
    practiceFormPage.resultValue('State and City').should('have.text', `${student.state} ${student.city}`)
  })

  it('submits with only the required fields', () => {
    const { firstName, lastName, gender, mobile } = buildStudent()

    practiceFormPage.fillForm({ firstName, lastName, gender, mobile }).submit()
    practiceFormPage.resultModal.should('contain.text', 'Thanks for submitting the form')
  })

  it('blocks the submit when required fields are empty', () => {
    practiceFormPage.submit()

    practiceFormPage.form.should('have.class', 'was-validated')
    practiceFormPage.resultModal.should('not.exist')
  })
})

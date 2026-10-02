import { angularFormPage } from '../pages'
import student from '../fixtures/student.json'

describe('ProtoCommerce - Angular Form', () => {
  beforeEach(() => {
    angularFormPage.visit()
  })

  it('submits the form successfully', () => {
    angularFormPage.fillForm(student).submit()

    angularFormPage.successAlert
      .should('be.visible')
      .and('contain.text', 'The Form has been submitted successfully!')
  })

  it('mirrors the name field through two-way binding', () => {
    angularFormPage.nameInput.type(student.name)
    angularFormPage.boundNameInput.should('have.value', student.name)
  })

  it('shows a minimum length error for a one-character name', () => {
    angularFormPage.nameInput.type('I').blur()
    angularFormPage.errorAlerts.should('contain.text', 'Name should be at least 2 characters')
  })

  it('shows a required error when the name is cleared', () => {
    angularFormPage.nameInput.type('Ivan').clear().blur()
    angularFormPage.errorAlerts.should('contain.text', 'Name is required')
  })

  it('disables the "Entrepreneur" employment option', () => {
    angularFormPage.employmentRadio('Entrepreneur').should('be.disabled')
  })
})

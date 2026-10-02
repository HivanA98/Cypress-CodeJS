import { registerPage } from '../pages'
import { validUser, requiredMessages, invalidCases } from '../fixtures/register.json'

describe('Register', () => {
  beforeEach(() => {
    registerPage.visit()
    registerPage.stubRegisterApi()
  })

  it('shows every required-field error on an empty submit', () => {
    registerPage.submit()

    Object.entries(requiredMessages).forEach(([field, message]) => {
      registerPage.shouldShowFieldError(field, message)
    })
    registerPage.shouldShowToast('Ups, masih ada form yang wajib diisi')
    cy.get('@registerRequest.all').should('have.length', 0)
  })

  context('Field validation', () => {
    invalidCases.forEach(({ title, data, field, message }) => {
      it(`rejects ${title}`, () => {
        registerPage.fillForm(data).submit()
        registerPage.shouldShowFieldError(field, message)
        cy.get('@registerRequest.all').should('have.length', 0)
      })
    })

    it('accepts valid personal data without field errors', () => {
      registerPage.fillForm(validUser).submit()

      Object.keys(requiredMessages).forEach((field) => {
        registerPage.shouldNotShowFieldError(field)
      })
    })
  })

  context('Input sanitizing', () => {
    it('strips digits and symbols from the name fields', () => {
      registerPage.firstNameInput.type('Ivan123!@#').should('have.value', 'Ivan')
      registerPage.lastNameInput.type('Armadi_99').should('have.value', 'Armadi')
    })

    it('only accepts digits in the phone field and blocks a leading zero', () => {
      registerPage.phoneInput.type('0812-abc-345').should('have.value', '812345')
    })
  })
})

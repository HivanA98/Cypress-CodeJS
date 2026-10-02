import { loginPage } from '../pages'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  context('Client-side validation', () => {
    it('requires email and password, and sends no request', () => {
      loginPage.stubLoginApi({ statusCode: 200 })

      loginPage.submit()

      loginPage
        .shouldShowFieldError('email', 'Email harus diisi')
        .shouldShowFieldError('password', 'Password harus diisi')
      cy.get('@loginRequest.all').should('have.length', 0)
    })

    it('rejects an invalid email format', () => {
      loginPage.login('ivan@invalid', 'Password123')
      loginPage.shouldShowFieldError('email', 'Format email tidak sesuai')
    })
  })

  context('Server response handling (stubbed API)', () => {
    it('sends the typed credentials to the login endpoint', () => {
      loginPage.stubLoginApi({ statusCode: 401, body: {} })

      loginPage.login('ivan.qa.test@example.com', 'Password123')

      cy.wait('@loginRequest').its('request.body').should('include', {
        email: 'ivan.qa.test@example.com',
        password: 'Password123',
      })
    })

    it('shows an error toast when the credentials are wrong (401)', () => {
      loginPage.stubLoginApi({ statusCode: 401, body: {} })

      loginPage.login('ivan.qa.test@example.com', 'WrongPassword1')

      cy.wait('@loginRequest')
      loginPage.shouldShowToast('Email atau password salah')
    })
  })

  context('Navigation', () => {
    it('opens the forgot password page', () => {
      loginPage.forgotPasswordLink.click()
      cy.location('pathname').should('eq', '/account/forgotpassword')
    })

    it('opens the register page', () => {
      loginPage.registerLink.click()
      cy.location('pathname').should('eq', '/account/register')
    })
  })
})

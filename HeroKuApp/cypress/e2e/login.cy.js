import { homePage, loginPage, appointmentPage, sideMenu } from '../pages'
import users from '../fixtures/users.json'

describe('Login', () => {
  beforeEach(() => {
    homePage.visit().clickMakeAppointment()
  })

  it('shows the demo credentials on the login page', () => {
    loginPage.demoUsername.should('have.value', users.valid.username)
    loginPage.demoPassword.should('have.value', users.valid.password)
  })

  it('logs in with valid credentials and opens the appointment form', () => {
    loginPage.login(users.valid.username, users.valid.password)
    appointmentPage.shouldBeDisplayed()
  })

  it('logs out back to the homepage', () => {
    loginPage.login(users.valid.username, users.valid.password)
    sideMenu.logout()

    cy.location('pathname').should('eq', '/')
    homePage.makeAppointmentButton.should('be.visible')
  })

  context('Rejected logins', () => {
    const invalidLogins = [
      { title: 'wrong password', ...users.wrongPassword },
      { title: 'unknown username', ...users.unknownUser },
      { title: 'empty username', username: '', password: users.valid.password },
      { title: 'empty password', username: users.valid.username, password: '' },
    ]

    invalidLogins.forEach(({ title, username, password }) => {
      it(`rejects ${title}`, () => {
        loginPage.login(username, password).shouldShowError()
      })
    })
  })
})

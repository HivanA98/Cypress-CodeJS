import loginPage from '../pages/LoginPage'

describe('Login page', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('displays the username, password and login controls', () => {
    loginPage.usernameInput.should('be.visible')
    loginPage.passwordInput.should('be.visible').and('have.attr', 'type', 'password')
    loginPage.loginButton.should('be.visible')
    loginPage.forgotPasswordButton.should('be.visible')
  })

  it('keeps typed credentials in the form', () => {
    loginPage.fillCredentials('qa_user', 'Secret123')

    loginPage.usernameInput.should('have.value', 'qa_user')
    loginPage.passwordInput.should('have.value', 'Secret123')
  })

  it('shows and hides the password', () => {
    loginPage.passwordInput.type('Secret123')

    loginPage.togglePasswordVisibility()
    loginPage.passwordInput.should('have.attr', 'type', 'text')

    loginPage.togglePasswordVisibility()
    loginPage.passwordInput.should('have.attr', 'type', 'password')
  })
})

describe('Login per role', () => {
  // Akun per role disimpan di cypress.env.json (lihat cypress.env.example.json).
  // Role tanpa kredensial otomatis di-skip.
  const ROLES = ['astd', 'collector', 'manufacturer', 'logistic', 'customer']

  ROLES.forEach((role) => {
    it(`logs in as ${role} admin`, function () {
      cy.env(['GREENHOOP_ACCOUNTS']).then(({ GREENHOOP_ACCOUNTS }) => {
        const account = GREENHOOP_ACCOUNTS?.[role]
        if (!account?.username || !account?.password) this.skip()

        loginPage.visit().login(account.username, account.password)
        loginPage.loginButton.should('not.exist')
      })
    })
  })
})

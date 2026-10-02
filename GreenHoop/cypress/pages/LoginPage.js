/**
 * Halaman login GreenHoop (UI berbahasa Mandarin Tradisional).
 * ID input dibuat otomatis oleh React (mis. ":r0:") dan bisa berubah kapan saja,
 * jadi selector memakai tipe input & teks tombol.
 */
const TEXT = {
  usernamePlaceholder: '請輸入用戶名稱',
  passwordPlaceholder: '請輸入密碼',
  login: '登入',
  forgotPassword: '忘記密碼',
}

class LoginPage {
  get usernameInput() {
    return cy.get(`input[placeholder="${TEXT.usernamePlaceholder}"]`)
  }

  // Dicari lewat placeholder karena atribut type berubah saat password ditampilkan.
  get passwordInput() {
    return cy.get(`input[placeholder="${TEXT.passwordPlaceholder}"]`)
  }

  get passwordToggle() {
    return this.passwordInput.parent().find('button[type="button"]')
  }

  get loginButton() {
    return cy.contains('button[type="submit"]', TEXT.login)
  }

  get forgotPasswordButton() {
    return cy.contains('button', TEXT.forgotPassword)
  }

  visit() {
    cy.visit('/')
    return this
  }

  fillCredentials(username, password) {
    this.usernameInput.clear().type(username)
    this.passwordInput.clear().type(password, { log: false })
    return this
  }

  login(username, password) {
    this.fillCredentials(username, password)
    this.loginButton.should('be.enabled').click()
    return this
  }

  togglePasswordVisibility() {
    this.passwordToggle.click()
    return this
  }
}

export default new LoginPage()

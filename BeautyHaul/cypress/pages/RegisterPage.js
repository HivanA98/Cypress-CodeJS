import BasePage from './BasePage'

class RegisterPage extends BasePage {
  path = '/account/register'
  formSelector = '#registerForm'
  apiEndpoint = '/ajax/account/save_register'

  get firstNameInput() {
    return this.field('nama_depan')
  }

  get lastNameInput() {
    return this.field('nama_belakang')
  }

  get emailInput() {
    return this.field('email')
  }

  get phoneInput() {
    return this.field('nomor_ponsel')
  }

  get passwordInput() {
    return this.field('password')
  }

  get confirmPasswordInput() {
    return this.field('konfirmasi_password')
  }

  /** Nomor ponsel memakai elemen error dengan class `.error` di luar wrapper input. */
  fieldError(name) {
    if (name === 'nomor_ponsel') {
      return this.phoneInput.closest('.space-y-1').find('p.error')
    }
    return super.fieldError(name)
  }

  /**
   * Isi form registrasi. Hanya field yang diberikan yang akan diisi.
   * @param {{firstName?, lastName?, email?, phone?, password?, confirmPassword?}} data
   */
  fillForm(data) {
    const fields = {
      firstName: 'nama_depan',
      lastName: 'nama_belakang',
      email: 'email',
      phone: 'nomor_ponsel',
      password: 'password',
      confirmPassword: 'konfirmasi_password',
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) this.field(fields[key]).clear().type(value)
    })
    return this
  }

  selectGender(label) {
    cy.get(this.formSelector).contains('button', label).click()
    return this
  }

  /** Spy endpoint registrasi (dengan stub) agar bisa dipastikan request tidak terkirim. */
  stubRegisterApi(response = { statusCode: 200, body: {} }) {
    cy.intercept('POST', this.apiEndpoint, response).as('registerRequest')
    return this
  }
}

export default new RegisterPage()

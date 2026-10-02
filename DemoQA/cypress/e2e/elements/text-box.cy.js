import { textBoxPage } from '../../pages'
import { buildTextBoxUser } from '../../support/factories'

describe('Elements - Text Box', () => {
  beforeEach(() => {
    textBoxPage.visit()
  })

  it('displays the submitted data in the output panel', () => {
    const user = buildTextBoxUser()

    textBoxPage.fillForm(user).submit()
    textBoxPage.shouldShowOutput(user)
  })

  it('marks an invalid email and shows no output', () => {
    textBoxPage.fillForm({ fullName: 'Ivan Armadi', email: 'ivan@invalid' }).submit()

    textBoxPage.emailInput.should('have.class', 'field-error')
    textBoxPage.output.find('#name').should('not.exist')
  })
})

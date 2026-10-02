import BasePage from './BasePage'

class ProfilePage extends BasePage {
  get firstNameInput() {
    return this.byTestId('CT_component_firstName_input')
  }

  open() {
    this.byTestId('CT_Component_ProfileMenu').trigger('mouseover')
    this.byTestId('CT_account_navigation-item_My Profile').click()
    return this
  }

  changeFirstName(firstName) {
    // Tombol "edit" belum memiliki data-test-id; dicari dari class edit-text.
    cy.get('.edit-text').first().click()
    this.firstNameInput.clear().type(firstName)
    cy.contains('button', /save|simpan/i).click()
    return this
  }
}

export default new ProfilePage()

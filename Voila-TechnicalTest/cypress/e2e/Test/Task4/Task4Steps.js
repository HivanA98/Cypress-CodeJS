var website = "https://voila.id"
var Nama = 'Siapa saya'


class Task4Steps {
    static URL(){
        cy.visit(website)
    }

    static Login(){
    
        cy.fixture("username").then(username => {
        cy.get("._3syuln7").click()
        cy.get("._17zx15te8").should('have.class', '_17zx15te8')
            cy.get("input[name='identifier']").type(username.email);
            cy.get("input[name='identifier']").should('have.value', username.email)
            cy.get("input[name='password']").type(username.password);
            cy.get("input[name='password']").should('have.value', username.password)
             })
        cy.get('.x63gt40').should('be.visible').and('not.be.disabled');
        cy.get('.x63gt40').click()    
    }

    static ProfileMenu(){
        cy.get('[data-test-id="CT_Component_ProfileMenu"]').trigger('mouseover')
        cy.get('[data-test-id="CT_account_navigation-item_Order History"]').should('exist')
        cy.get('[data-test-id="CT_account_navigation-item_My Profile"]').click()
    }

    static ChangeFirstName(){
        cy.get('[class="_15kd2we68      _17zx15tdc  _1ccbe2wb edit-text"]').eq(0).click()
        cy.get('[data-test-id="CT_component_firstName_input"]').clear.type(Nama)
    }}

    export default Task4Steps
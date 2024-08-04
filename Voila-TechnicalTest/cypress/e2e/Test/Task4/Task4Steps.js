var website = "https://voila.id"
var namePlace = "input[name='identifier']"
var passPlace = "input[name='password']"
var addToBag = "[data-test-id='CT-add-to-bag-desktop']"
var cartMenu = "[data-test-id='CT_Component_CartMenu']"
var BtnCheckout = "[data-test-id='CT_Component_btnCheckout']"
var ClickProduct = "[data-test-id='CT_component_image_list-CT_component_VariantColorItem']"
var NameProduct = {"Moonshine Tuck Midi Dress Vanilla", "Moonshine Tuck Midi Dress Vanilla"}
var newNameProduct = "Moonshine Tuck Midi Dress Vanilla"
var lastPrice = "[class='_17zx15t9s _17zx15te8 _17zx15tgg']"
var BtnPayment = "[data-test-id='CT_Component_SelectorPayment_ButtonPayment']"
const Signin = "._3syuln7"
const BtnLogin = ".x63gt40"
const H2Signin = "._17zx15te8"
const BtnSearch = "._18krchz0"
const Search = "[data-test-id='CT-Search-Input']"
const ItemIcon = "[class='_15kd2we1c   _15r4f4dfz   _17zx15te8  _1ccbe2wb']"


class Task4Steps {
    static URL(){
        cy.visit(website)
    }

    static Login(){
    
        cy.fixture("username").then(username => {
        cy.get(Signin).click()
        cy.get(H2Signin).should('contain', 'Sign In')
            cy.get(namePlace).type(username.email)
            cy.get(namePlace).should('have.value', username.email)
            cy.get(passPlace).type(username.password)
            cy.get(passPlace).should('have.value', username.password)
             })
        cy.get(BtnLogin).should('be.visible').and('not.be.disabled');
        cy.get(BtnLogin).click()    
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
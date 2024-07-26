var website = "https://voila.id"
var namePlace = "input[name='identifier']"
var passPlace = "input[name='password']"
var addToBag = "[data-test-id='CT-add-to-bag-desktop']"
var cartMenu = "[data-test-id='CT_Component_CartMenu']"
var BtnCheckout = "[data-test-id='CT_Component_btnCheckout']"
var ClickProduct = "[data-test-id='CT_component_image_list-CT_component_VariantColorItem']"
var NameProduct = "Moonshine Tuck Midi Dress Vanilla"
var newNameProduct = "Moonshine Tuck Midi Dress Vanilla"
var lastPrice = "[class='_17zx15t9s _17zx15te8 _17zx15tgg']"
var BtnPayment = "[data-test-id='CT_Component_SelectorPayment_ButtonPayment']"
const Signin = "._3syuln7"
const BtnLogin = ".x63gt40"
const H2Signin = "._17zx15te8"
const Search = "[data-test-id='CT-Search-Input']"


class Task1Steps {
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

    static Search(){
        cy.get('._17zx15te8').should('exist')
        cy.get('._18krchz0').click()
        cy.get(Search).type(NameProduct) //Jika barang habis ganti jenis produk disini
        cy.get('[class="_15kd2we1c   _15r4f4dfz   _17zx15te8  _1ccbe2wb"]').eq(1).click()
        cy.get(ClickProduct).should('exist')
        cy.get(ClickProduct).click()
    }

    static Addtocart(){
        cy.get(addToBag).click()
        cy.get(cartMenu).click()
    }

    static Checkout(){
        cy.get(BtnCheckout).should('exist').click()

        cy.get('[data-test-id="CT_Component_DeliveryCard"]').should('exist')
    }

    static SelectPayment(){
        cy.get(BtnPayment = "[data-test-id='CT_Component_SelectorPayment_ButtonPayment']"
        ).eq(1).click()
        cy.get('[class="_15kd2weog      _17zx15te8  _1ccbe2wb"]').eq(1).click()
        cy.get('[class="_15kd2we1ds   _15r4f4dly"]').eq(0).click()
        cy.get('[data-test-id="CT_Component_PaymentListFooter_ButtonConfirm"]').click()
    }

    static selectCourier(){
        cy.get('[class="j1jih7ak      _15kd2weg"]').eq(3).click()
        cy.get('[class="_15kd2we5s     _15kd2weg"]').eq(0).click()
        cy.contains('JNE REG').click()
        cy.get('[class="_920fuu5 _920fuuf _920fuub _920fuu6"]').eq(1).click()
        cy.wait(2000)
    }

    static Confirm(){
        cy.get('[class="_15kd2we68      _17zx15tgg _17zx15t9s _17zx15te8"]').invoke('text').as('price');
  
        cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    
        cy.get('@price').then((price) => {
          cy.get(lastPrice).eq(1).should('have.text', price.trim())
        }
    )}
}

export default Task1Steps
var website = "https://voila.id"


class Task1Steps {
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

    static Search(){
        cy.get('._17zx15te8').should('exist')
        cy.get('._18krchz0').click()
        cy.get("[data-test-id='CT-Search-Input']").type('Moonshine Tuck Midi Dress Vanilla') //Jika barang habis ganti jenis produk disini
        cy.get('[class="_15kd2we1c   _15r4f4dfz   _17zx15te8  _1ccbe2wb"]').eq(1).click()
        cy.get('[data-test-id="CT_component_image_list-CT_component_VariantColorItem"]').should('exist')
        cy.get('[data-test-id="CT_component_image_list-CT_component_VariantColorItem"]').click()
    }

    static Addtocart(){
        cy.get('[data-test-id="CT-add-to-bag-desktop"]').click()
        cy.get('[data-test-id="CT_Component_CartMenu"]').click()
    }

    static Checkout(){
        cy.get('[data-test-id="CT_Component_btnCheckout"]').should('exist')
        cy.get('[data-test-id="CT_Component_btnCheckout"]').click()

    cy.get('[data-test-id="CT_Component_DeliveryCard"]').should('exist')
    }

    static SelectPayment(){
        cy.get('[data-test-id="CT_Component_SelectorPayment_ButtonPayment"]').eq(1).click()
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
          cy.get('[class="_17zx15t9s _17zx15te8 _17zx15tgg"]').eq(1).should('have.text', price.trim())
        }
    )}
}

export default Task1Steps
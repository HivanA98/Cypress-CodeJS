/// <reference types="cypress" />
import steps from './Step'

describe('my first test', () => {
    
    it('visit standard_user', () => {
        steps.URL()
        steps.NormalUsername()
        steps.Password()
        steps.BtnLogin()
        steps.addItems()
        steps.CartMenu()
        steps.AddreasFirstName()
        steps.AddreasLastName()
        steps.AddreasPostalCode()
        steps.Finish()
        });
        });
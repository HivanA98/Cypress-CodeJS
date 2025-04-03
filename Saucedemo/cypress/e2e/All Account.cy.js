/// <reference types="cypress" />
import steps from './Step'

describe('All Account Login', () => {
    beforeEach(() => {
        steps.URL()
    })
    it.only('visit standard_user', () => {
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

    it('visit locked_out_user', () => {
        steps.LockedUsername()
        steps.Password()
        steps.BtnLogin()
        steps.LockedUser()
        });   
            
    it('visit problem_user', () => {
        steps.ProblemUsername()
        steps.Password()
        steps.BtnLogin()
        steps.addItems()
        steps.CartMenu()
        steps.AddreasFirstName()
        steps.AddreasPostalCode()
        steps.errorProblemUser
        });
                
    it('visit performance_glitch_user', () => {
        steps.PerformanceUsername()
        steps.Password()
        steps.BtnLogin()
        cy.wait(5000)
        steps.addItems()
        steps.CartMenu()
        steps.AddreasFirstName()
        steps.AddreasLastName()
        steps.AddreasPostalCode()
        steps.Finish()
        });
    }); 

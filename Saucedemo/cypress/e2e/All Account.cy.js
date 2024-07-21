/// <reference types="cypress" />
import steps from './Step'

describe('All Account Login', () => {
    
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

    it('visit locked_out_user', () => {
        steps.URL()
        steps.LockedUsername()
        steps.Password()
        steps.BtnLogin()
        steps.LockedUser()
        });   
            
    it('visit problem_user', () => {
        steps.URL()
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
        steps.URL()
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

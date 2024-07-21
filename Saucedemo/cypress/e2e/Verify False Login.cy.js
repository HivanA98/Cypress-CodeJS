/// <reference types="cypress" />
import steps from './Step'

describe('False Password', () => {
    
    it('visit standard_user', () => {
        steps.URL()
        steps.NormalUsername()
        steps.wrongPassword()
        steps.BtnLogin()
        steps.FailedLogin()
        });
    });

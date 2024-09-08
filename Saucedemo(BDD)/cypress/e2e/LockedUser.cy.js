/// <reference types="cypress" />
import steps from './Step'

describe('Error User Login', () => {
    
    it('Login with Error Username', () => {
        steps.URL()
        steps.LockedUsername()
        steps.Password()
        steps.BtnLogin()
        steps.LockedUser()
        });
    });

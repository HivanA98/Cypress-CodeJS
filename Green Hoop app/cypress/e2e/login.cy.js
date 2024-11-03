/// <reference types="cypress" />
import steps from './Step.js'

describe('my first test', () => {
    
    it('astd login', () => {
        steps.WEB()
        steps.astdaAdmin()
        steps.Login()
    })
})
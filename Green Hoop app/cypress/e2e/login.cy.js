/// <reference types="cypress" />
import steps from './Step.js'

describe('my first test', () => {
    
    it('astd login', () => {
        steps.URL()
        steps.astdAdmin()
        // steps.Login()
    })

    it('collector login', () => {
        steps.URL()
        steps.collectorAdmin()
        // steps.Login()
    })

    it('manufactur login', () => {
        steps.URL()
        steps.manufaturAdmin()
        // steps.Login()
    })

    it('logistic login', () => {
        steps.URL()
        steps.logisticAdmin()
        // steps.Login()
    })

    it('customer login', () => {
        steps.URL()
        steps.customerAdmin()
        // steps.Login()
    })
})
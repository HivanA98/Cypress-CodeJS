/// <reference types="cypress" />

import E2ESteps from '../stepsDefinition/E2E'

describe('E2E', () => {
  
// beforeEach(() => {
//     E2ESteps.Login()
//   })
  
  it.only('E2E Single Order', () => {
    E2ESteps.Login()

  })
})
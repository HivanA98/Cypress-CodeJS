/// <reference types="cypress" />
import steps from './Step'

describe('Login', () => {
  
beforeEach(() => {
    steps.LoginPage()
  })
  
  it.only('NormalLogin', () => {
    steps.LoginPage()
    steps.InputUsernameLogin()
    steps.InputPasswordLogin()
    steps.LengthValidationUsername()
    steps.WordValidationUsername()
  })
  it('UnNormalLogin', () => {
    steps.URL()
  })
})

describe('Register', () => {

beforeEach(() => {
    steps.RegisterPage()
  })

  it('NormalRegister', () => {
    steps.LoginPage()
  })

  it('UnNormalRegister', () => {
    steps.RegisterPage()
  })
})
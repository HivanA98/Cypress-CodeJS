/// <reference types="cypress" />
import Loginsteps from './Loginstep'
import Registersteps from './Registerstep'

describe('Login', () => {
  
beforeEach(() => {
  Loginsteps.LoginPage()
  })
  
  it('NormalLogin', () => {
    Loginsteps.LoginPage()
    Loginsteps.NormalInputUsernameLogin()
    Loginsteps.NormalInputPasswordLogin()
    Loginsteps.NormalLengthValidationUsername()
    Loginsteps.NormalWordValidationUsername()
    Loginsteps.NormalLengthValidationPassword()
    Loginsteps.NormalWordValidationPassword()
  })
  it('UnNormalUsername', () => {
    Loginsteps.LoginPage()
    Loginsteps.UnNormalInputUsernameLogin()
    Loginsteps.UnNormalLengthValidationUsername()
    Loginsteps.UnNormalWordValidationUsername()
    Loginsteps.NormalInputPasswordLogin()
    Loginsteps.NormalLengthValidationPassword()
    Loginsteps.NormalWordValidationPassword()
  })
  it('UnNormalPassword', () => {
    Loginsteps.LoginPage()
    Loginsteps.NormalInputUsernameLogin()
    Loginsteps.NormalLengthValidationUsername()
    Loginsteps.NormalWordValidationUsername()
    Loginsteps.UnNormalInputPasswordLogin()
    Loginsteps.UnNormalLengthValidationPassword()
    Loginsteps.UnNormalWordValidationPassword()
  })
})

describe('Register', () => {

beforeEach(() => {
  Registersteps.RegisterPage()
  })

  it('NormalRegister', () => {
    Registersteps.NormalInputFirstName()
    Registersteps.NormalInputLastName()
    Registersteps.NormalInputEmail()
    Registersteps.NormalInputPassword()
    Registersteps.NormalInputConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
  })

  it.only('FirstNameNegative', () => {

  })
  it('LastNameNegative', () => {

  })
  it('PasswordNegative', () => {

  })
  it('ConfirmPasswordNegative', () => {

  })
})
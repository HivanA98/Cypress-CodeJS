/// <reference types="cypress" />
import Loginsteps from '../stepsDefinition/Loginstep'

describe('Login', () => {
  
beforeEach(() => {
  Loginsteps.LoginPage()
  })
  
  it('NormalLogin', () => {
    Loginsteps.NormalInputUsernameLogin()
    Loginsteps.NormalInputPasswordLogin()
    Loginsteps.NormalLengthValidationUsername()
    Loginsteps.NormalWordValidationUsername()
    Loginsteps.NormalLengthValidationPassword()
    Loginsteps.NormalWordValidationPassword()
  })
  it('UnNormalUsername', () => {
    Loginsteps.UnNormalInputUsernameLogin()
    Loginsteps.UnNormalLengthValidationUsername()
    Loginsteps.UnNormalWordValidationUsername()
    Loginsteps.NormalInputPasswordLogin()
    Loginsteps.NormalLengthValidationPassword()
    Loginsteps.NormalWordValidationPassword()
  })
  it('UnNormalPassword', () => {
    Loginsteps.NormalInputUsernameLogin()
    Loginsteps.NormalLengthValidationUsername()
    Loginsteps.NormalWordValidationUsername()
    Loginsteps.UnNormalInputPasswordLogin()
    Loginsteps.UnNormalLengthValidationPassword()
    Loginsteps.UnNormalWordValidationPassword()
  })

  it.only('Wrong Username', () => {
    Loginsteps.NormalInputUsernameLogin()
    Loginsteps.NormalInputPasswordLogin()
    Loginsteps.BtnLogin()
    Loginsteps.WarningMessage()
  })
})
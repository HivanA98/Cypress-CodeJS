/// <reference types="cypress" />
import Registersteps from '../stepsDefinition/Registerstep'

describe('Register', () => {

beforeEach(() => {
    Registersteps.RegisterPage()
    })
    
it('NormalRegister', () => {
    Registersteps.NormalInputFirstName()
    Registersteps.ValidationFirstNamePositive
    Registersteps.NormalInputLastName()
    Registersteps.WordValidationLastnamePositive()
    Registersteps.NormalInputEmail()
    Registersteps.NormalInputPassword()
    Registersteps.NormalValidationPassword()
    Registersteps.NormalInputConfirmPassword()
    Registersteps.NormalValidationConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
    })
    
it('FirstNameNegative', () => {
    Registersteps.UnNormalInputFirstName()
    Registersteps.ValidationFirstNameNegative()
    Registersteps.NormalInputLastName()
    Registersteps.WordValidationLastnamePositive()
    Registersteps.NormalInputEmail()
    Registersteps.NormalInputPassword()
    Registersteps.NormalInputConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
    })
it('LastNameNegative', () => {
    Registersteps.NormalInputFirstName()
    Registersteps.ValidationFirstNamePositive
    Registersteps.UnNormalInputLastName()
    Registersteps.WordValidationLastnameNegative()
    Registersteps.NormalInputEmail()
    Registersteps.NormalInputPassword()
    Registersteps.NormalValidationPassword()
    Registersteps.NormalInputConfirmPassword()
    Registersteps.NormalValidationConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
    })
it('PasswordNegativeAndNotSame', () => {
    Registersteps.NormalInputFirstName()
    Registersteps.ValidationFirstNamePositive
    Registersteps.NormalInputLastName()
    Registersteps.WordValidationLastnamePositive()
    Registersteps.NormalInputEmail()
    Registersteps.UnNormalInputPassword()
    Registersteps.UnNormalValidationPassword()
    Registersteps.NormalInputConfirmPassword()
    Registersteps.NormalValidationConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
    })
it('ConfirmPasswordNegative', () => {
    Registersteps.NormalInputFirstName()
    Registersteps.ValidationFirstNamePositive
    Registersteps.NormalInputLastName()
    Registersteps.WordValidationLastnamePositive()
    Registersteps.NormalInputEmail()
    Registersteps.UnNormalInputPassword()
    Registersteps.UnNormalValidationPassword()
    Registersteps.UnNormalInputConfirmPassword()
    Registersteps.UnNormalValidationConfirmPassword()
    Registersteps.SelectGender()
    Registersteps.SelectDate()
    Registersteps.SelectMonth()
    Registersteps.SelectYear()
    })
})
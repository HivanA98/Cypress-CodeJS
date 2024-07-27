/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Task3 from './Task3Step'

Given ("When The user already choose a product", () => {
    Task3.URL()
    Task3.Login()
    Task3.Search()
    Task3.Addtocart()
})

When ("The user search another product", () => {
    Task3.NewSearch()
    Task3.Addtocart()
    Task3.cartMenu()
})

When ("The user change the product", () => {
    Task3.RemoveProduct()
})

Then("checkout with new product", () => {
    Task3.Checkout()
    Task3.SelectPayment()
    Task3.selectCourier()
    Task3.Confirm()
})



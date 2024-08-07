Feature: Change Cart

Scenario: Choose other product
    Given When The user already choose a product
    When The user search another product
    When The user change the product
    Then checkout with new product


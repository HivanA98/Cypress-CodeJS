Feature: Checkout
  As a customer
  I want to check out the products in my cart
  So that I can complete my order

  Background:
    Given I am logged in as the "standard" user
    And I have these products in my cart:
      | product                 |
      | Sauce Labs Backpack     |
      | Sauce Labs Bike Light   |
      | Sauce Labs Bolt T-Shirt |

  @smoke
  Scenario: Complete checkout with multiple products
    When I open the cart
    Then the cart should contain 3 products
    When I proceed to checkout
    And I fill in my information with "Ivan", "Armadi" and "20250"
    Then the order total should equal the item total plus tax
    When I finish the order
    Then I should see the order confirmation
    And the cart badge should be empty

  Scenario: Remove a product before checkout
    When I open the cart
    And I remove "Sauce Labs Bike Light" from the cart page
    Then the cart should contain 2 products

  Scenario Outline: Customer information is required – <field>
    When I open the cart
    And I proceed to checkout
    And I fill in my information with "<firstName>", "<lastName>" and "<postalCode>"
    Then I should see the checkout error "<message>"

    Examples:
      | field       | firstName | lastName | postalCode | message                        |
      | first name  |           | Armadi   | 20250      | Error: First Name is required  |
      | last name   | Ivan      |          | 20250      | Error: Last Name is required   |
      | postal code | Ivan      | Armadi   |            | Error: Postal Code is required |

Feature: Product inventory
  As a logged-in customer
  I want to browse and sort products
  So that I can find what I want quickly

  Background:
    Given I am logged in as the "standard" user

  Scenario: All products are displayed
    Then I should see 6 products

  Scenario Outline: Sort products by <sort>
    When I sort the products by "<option>"
    Then the products should be sorted by <field> in <direction> order

    Examples:
      | sort                | option | field | direction  |
      | Name (A to Z)       | az     | name  | ascending  |
      | Name (Z to A)       | za     | name  | descending |
      | Price (low to high) | lohi   | price | ascending  |
      | Price (high to low) | hilo   | price | descending |

  Scenario: Cart badge follows added and removed products
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Onesie" to the cart
    Then the cart badge should show 2
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should show 1

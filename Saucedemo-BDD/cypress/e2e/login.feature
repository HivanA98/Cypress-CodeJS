Feature: Login
  As a customer
  I want to log in to Swag Labs
  So that I can buy products

  Background:
    Given I am on the login page

  @smoke
  Scenario: Successful login with a standard user
    When I log in as the "standard" user
    Then I should see the products page

  Scenario Outline: Login is rejected – <case>
    When I log in with username "<username>" and password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | case               | username        | password       | message                                                                   |
      | locked out user    | locked_out_user | secret_sauce   | Epic sadface: Sorry, this user has been locked out.                       |
      | wrong password     | standard_user   | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | empty username     |                 | secret_sauce   | Epic sadface: Username is required                                        |
      | empty password     | standard_user   |                | Epic sadface: Password is required                                        |

  Scenario: Logout returns the user to the login page
    Given I log in as the "standard" user
    When I log out
    Then I should be on the login page

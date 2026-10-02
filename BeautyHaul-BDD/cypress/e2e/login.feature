Feature: Login form
  As a BeautyHaul customer
  I want clear feedback on the login form
  So that I know what to fix before signing in

  Background:
    Given I am on the login page
    And the login API is stubbed with status 401

  @smoke
  Scenario: Empty login form is rejected on the client
    When I submit the login form
    Then the "email" field should show "Email harus diisi"
    And the "password" field should show "Password harus diisi"
    And no login request should be sent

  Scenario: Invalid email format
    When I log in with email "ivan@invalid" and password "Password123"
    Then the "email" field should show "Format email tidak sesuai"
    And no login request should be sent

  Scenario: Wrong credentials returned by the server
    When I log in with email "ivan.qa.test@example.com" and password "WrongPassword1"
    Then the login request should contain email "ivan.qa.test@example.com"
    And I should see the message "Email atau password salah"

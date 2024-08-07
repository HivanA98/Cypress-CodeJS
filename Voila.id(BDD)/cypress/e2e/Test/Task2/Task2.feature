Feature: Wrong Credintial

Scenario: Faild Login
    Given The user visit the website
    When The user input email
    When The user input wrong password
    Then The user see error message


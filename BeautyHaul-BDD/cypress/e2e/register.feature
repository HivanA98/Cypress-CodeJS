Feature: Registration form
  As a new visitor
  I want the registration form to validate my input
  So that I can create a valid BeautyHaul account

  Background:
    Given I am on the register page
    And the register API is stubbed

  @smoke
  Scenario: Empty registration form shows all required errors
    When I submit the register form
    Then I should see these required field errors:
      | field               | message                         |
      | nama_depan          | Nama depan harus diisi          |
      | nama_belakang       | Nama belakang harus diisi       |
      | email               | Email harus diisi               |
      | nomor_ponsel        | Nomor ponsel harus diisi        |
      | password            | Password harus diisi            |
      | konfirmasi_password | Konfirmasi password harus diisi |
    And I should see the message "Ups, masih ada form yang wajib diisi"
    And no register request should be sent

  Scenario Outline: Field validation – <case>
    When I type "<value>" into the "<field>" field
    And I submit the register form
    Then the "<field>" field should show "<message>"

    Examples:
      | case                | field         | value    | message                                        |
      | short first name    | nama_depan    | I        | Nama depan minimal 2 karakter                  |
      | short last name     | nama_belakang | A        | Nama belakang minimal 2 karakter               |
      | short password      | password      | abc1     | Password minimal 6 karakter                    |
      | password w/o number | password      | Password | Password harus memiliki 1 karakter dan 1 angka |
      | short phone number  | nomor_ponsel  | 8123     | Nomor ponsel minimal 8 karakter                |

  Scenario: Confirm password must match
    When I type "Password123" into the "password" field
    And I type "Password321" into the "konfirmasi_password" field
    And I submit the register form
    Then the "konfirmasi_password" field should show "Konfirmasi password tidak sesuai"

  Scenario Outline: Input sanitizing – <field>
    When I type "<typed>" into the "<field>" field
    Then the "<field>" field should contain "<expected>"

    Examples:
      | field         | typed        | expected |
      | nama_depan    | Ivan123!@#   | Ivan     |
      | nama_belakang | Armadi_99    | Armadi   |
      | nomor_ponsel  | 0812-abc-345 | 812345   |

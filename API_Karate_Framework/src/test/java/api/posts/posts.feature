Feature: Posts API (CRUD)

  Background:
    * url baseUrl
    * def postSchema = read('classpath:api/schemas/post.json')

  @smoke
  Scenario: Get all posts
    Given path 'posts'
    When method get
    Then status 200
    And match response == '#[100]'
    And match each response == postSchema

  Scenario: Get a single post by id
    Given path 'posts', 1
    When method get
    Then status 200
    And match response == postSchema
    And match response.id == 1

  Scenario: Filter posts by user
    Given path 'posts'
    And param userId = 1
    When method get
    Then status 200
    And match response == '#[10]'
    And match each response contains { userId: 1 }

  Scenario: Get comments of a post
    Given path 'posts', 1, 'comments'
    When method get
    Then status 200
    And match each response contains { postId: 1, email: '#string' }

  Scenario: Unknown post returns 404
    Given path 'posts', 99999
    When method get
    Then status 404
    And match response == {}

  @smoke
  Scenario: Create a post
    * def newPost = { title: 'Karate API test', body: 'Created by an automated test', userId: 1 }
    Given path 'posts'
    And request newPost
    When method post
    Then status 201
    And match response == postSchema
    And match response contains newPost

  Scenario: Update a post with PUT
    * def updated = { id: 1, title: 'Updated title', body: 'Updated body', userId: 1 }
    Given path 'posts', 1
    And request updated
    When method put
    Then status 200
    And match response == updated

  Scenario: Partially update a post with PATCH
    Given path 'posts', 1
    And request { title: 'Patched title' }
    When method patch
    Then status 200
    And match response.title == 'Patched title'
    And match response.id == 1

  Scenario: Delete a post
    Given path 'posts', 1
    When method delete
    Then status 200

  Scenario Outline: Posts of user <userId> all belong to that user
    Given path 'posts'
    And param userId = <userId>
    When method get
    Then status 200
    And match each response contains { userId: <userId> }

    Examples:
      | userId |
      | 2      |
      | 5      |
      | 10     |

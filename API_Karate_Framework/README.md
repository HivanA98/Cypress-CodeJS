<div align="center">

# 🔌 API Testing – Karate

[![Karate API](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/karate.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/karate.yml)
![Karate](https://img.shields.io/badge/Karate-1.5.1-F6A800)
![Java](https://img.shields.io/badge/Java-17-ED8B00?logo=openjdk&logoColor=white)
![JUnit5](https://img.shields.io/badge/JUnit-5-25A162?logo=junit5&logoColor=white)
![Scenarios](https://img.shields.io/badge/scenarios-16-brightgreen)

REST API test suite for **[JSONPlaceholder](https://jsonplaceholder.typicode.com)** written in Karate's readable DSL.

</div>

## ✨ Highlights

- 📐 **Reusable JSON schemas** (`schemas/*.json`) with fuzzy matchers – `#number`, `#string`, `#regex`, `#[10]`
- 🔗 **Chained requests** – fetch a user, then use its id to query that user's posts
- 📋 **Scenario Outline** for data-driven checks
- 🏎️ **Parallel execution** through a single JUnit 5 runner
- 🌍 Environment switching via `karate-config.js` (`-Dkarate.env=staging`)

```gherkin
Scenario: Create a post
  * def newPost = { title: 'Karate API test', body: 'Created by an automated test', userId: 1 }
  Given path 'posts'
  And request newPost
  When method post
  Then status 201
  And match response == postSchema
  And match response contains newPost
```

## 🧪 Test coverage

| Feature         | Scenarios | Covers                                                                                      |
| --------------- | :-------: | ------------------------------------------------------------------------------------------- |
| `posts.feature` |    12     | List + schema, get by id, filter, comments, 404, POST, PUT, PATCH, DELETE, outline per user |
| `users.feature` |     4     | List + schema, chained request, unique emails, response time                                |

## 🗂️ Project structure

```
pom.xml
src/test/java/
├── karate-config.js
└── api/
    ├── ApiTest.java          # JUnit 5 parallel runner
    ├── schemas/              # post.json, user.json
    ├── posts/posts.feature
    └── users/users.feature
```

## 🚀 Run it

Requires **Java 17+** and **Maven 3.9+**.

```bash
mvn test                                      # all features
mvn test -Dkarate.options="--tags @smoke"     # smoke only
```

Report: `target/karate-reports/karate-summary.html`

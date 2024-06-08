# This project is based on Cypress + Plugin Api

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)


## Tools used:
- [Cypress](https://www.cypress.io/ "Cypress")
- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api/v/1.0.3 "cypress-plugin-api")

## DEPENDENCIES

  cypress-plugin-api

## APP

- [Platzi Fake Store API](https://fakeapi.platzi.com/ "Platzi Fake Store API")
- [API Documents](https://api.escuelajs.co/docs#/products/ "API Documents")


## Prerequisites for use:

- Node.js
- Cypress >= 13.9.0
- cypress-plugin-api dependency 

## installation: 

Cypress + Dependencies

npm install 


References:

- [Cypress Plugin Api](https://www.npmjs.com/package/cypress-plugin-api/v/1.0.3 "ypress-plugin-api")


### Architecture - Libraries used

In this project, Cypress was used to automate APIs actions POST, GET, PUT and DELETE.

```
├── README.md
├── cypress
    └── downloads
    └── e2e
        └── ProductManagement.js
└── fixtures
    ├── product
        └── post.json
        └── put.json
└── support
    ├── commands.js
    └── e2e.js
├── cypress.config.js
├── package.json

```

### About the project

- This project is about product management, based from APIs of Platzi Fake Store. Here we can create, reading, updating and deleting products via APIs
- Step 1 Create a new product
- Step 2 Reading this product
- Step 3 Update this product
- Step 4 Delete this product


### How to execute the Project

In the terminal run the following command

npm run test

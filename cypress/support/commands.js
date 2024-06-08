let productId;

Cypress.Commands.add('setProductId', (id) => {
  productId = id;
});

Cypress.Commands.add('getProductId', () => {
  return productId;
});


Cypress.Commands.add('postProduct', (product) => {
  cy.api({
    url: '/products',
    method: "POST",
    body: product,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getProduct', () => {
  cy.api({
    url: '/tasks',
    method: 'GET',
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getUniqueProduct', (productID) => {
  cy.api({
    url: '/products/' + productID,
    method: 'GET',
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('deleteProduct', (productID) => {
  cy.api({
    url: '/products/' + productID,
    method: 'DELETE',
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('putProduct', (productID, productChange) => {
  cy.api({
    url: `/products/` + productID,
    method: 'PUT',
    body: productChange,
    failOnStatusCode: false
  }).then(response => { return response })
})
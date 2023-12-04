describe('Dishes Add to Cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/dishes.php?res_id=5')
  })

  it('Adds item to cart', () => {
    // Implement test case to add an item to the cart
    cy.get('.food-item:first-of-type input[name="quantity"]')
      .type('1') // Enters the quantity of the item
    cy.get('.food-item:first-of-type input[type="submit"]')
      .click() // Clicks on 'Add To Cart' button
    cy.get('.widget-heading h3.widget-title').should('contain', 'Your Cart') // Verifies if the cart has the item added
  })

  it('Removes item from cart', () => {
    // Implement test case to remove an item from the cart
    cy.get('.widget-body .fa-trash:first-of-type').click() // Clicks on the 'Remove' button for the first item in the cart
    cy.get('.widget-heading h3.widget-title').should('not.contain', 'Your Cart') // Verifies if the cart is empty
  })

  it('Checks out the cart', () => {
    // Implement test case to proceed to checkout from the cart
    cy.get('.btn.btn-success.btn-lg.active').click() // Clicks on the 'Checkout' button
    cy.url().should('include', 'checkout.php') // Verifies if the URL navigated to the checkout page
  })

  it('Navigates to restaurant details', () => {
    // Implement test case to navigate back to restaurant details
    cy.get('.profile-descr h6 a').click() // Clicks on the restaurant details link
    cy.url().should('include', 'restaurants.php') // Verifies if the URL navigated back to the restaurant details page
  })
})

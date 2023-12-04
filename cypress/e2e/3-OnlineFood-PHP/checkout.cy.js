describe('Checkout Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/checkout.php')
  })

  it('Places an order successfully', () => {
    // Simulate placing an order and validate successful order placement
    cy.get('input[type="submit"]').click() // Clicks on the 'Order Now' button
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Thank you. Your Order has been placed!') // Verifies the success alert message
    })
    cy.url().should('include', 'your_orders.php') // Verifies if the URL navigated to the 'Your Orders' page
  })

  it('Selects Cash on Delivery', () => {
    // Validates selecting Cash on Delivery option
    cy.get('#radioStacked1').check() // Selects Cash on Delivery radio button
    cy.get('#radioStacked1').should('be.checked') // Verifies if Cash on Delivery radio button is checked
  })

  it('Displays correct cart total', () => {
    // Validates if the cart total displayed matches the calculated total
    cy.get('.cart-totals-fields table tbody tr:last-of-type td:nth-child(2)').invoke('text').then((text) => {
      const cartTotal = text.trim()
      // Perform calculations or retrieve data from the backend to get the expected cart total
      const expectedTotal = "Rp.5" // Replace this with the expected total
      expect(cartTotal).to.equal(expectedTotal) // Compares displayed total with expected total
    })
  })

  it('Disables Paypal payment option', () => {
    // Validates if Paypal payment option is disabled
    cy.get('input[name="mod"][value="paypal"]').should('be.disabled') // Verifies if Paypal option is disabled
  })
})

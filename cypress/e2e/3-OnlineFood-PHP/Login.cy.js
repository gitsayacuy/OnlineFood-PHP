describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/login.php')
  })

  it('should display login form', () => {
    cy.get('.form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[name="username"]').type('eric')
    cy.get('input[name="password"]').type('anjay')
    cy.get('#buttn').click()
    // Add assertions for successful login redirection or any element on the dashboard
    // For instance:
    // cy.url().should('include', '/dashboard')
  })

  it('should show error on login with invalid credentials', () => {
    cy.get('input[name="username"]').type('doni')
    cy.get('input[name="password"]').type('dina')
    cy.get('#buttn').click()
    cy.get('span').contains('Invalid Username or Password!').should('be.visible')
  })

  it('should navigate to registration page from login', () => {
    cy.contains('Create an account').click()
    cy.url().should('include', '/registration.php')
    // Add assertions for elements on the registration page if needed
  })
})

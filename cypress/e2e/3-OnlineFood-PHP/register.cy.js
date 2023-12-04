describe('Registration Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/registration.php')
  })

  it('should display registration form', () => {
    cy.get('form[action=""]').should('be.visible')
  })

  it('should register with valid details', () => {
    cy.get('input[name="username"]').type('doni')
    cy.get('input[name="firstname"]').type('John')
    cy.get('input[name="lastname"]').type('Doe')
    cy.get('input[name="email"]').type('john@gmail.com')
    cy.get('input[name="phone"]').type('1234567890')
    cy.get('input[name="password"]').type('password123')
    cy.get('input[name="cpassword"]').type('password123')
    cy.get('textarea[name="address"]').type('123 Main St')
    cy.get('input[name="submit"]').click()
    // Add assertions for successful registration, such as redirection to the login page
    // For instance:
    // cy.url().should('include', 'login.php')
  })

  it('should show error on registering with invalid details', () => {
    // Fill the form with invalid details (e.g., empty fields or invalid email format)
    cy.get('input[name="username"]').type('doni')
    cy.get('input[name="firstname"]').type('Jane')
    // Fill in more fields with invalid data...

    // Click the submit button
    cy.get('input[name="submit"]').click()

    // Add assertions for error messages being displayed, such as:
    cy.contains('All fields must be Required!').should('be.visible')
    // Add more assertions for other possible error messages based on the validation in the PHP code
  })

  it('should redirect to login page after successful registration', () => {
    // Fill the form with valid details
    cy.get('input[name="username"]').type('eric')
    // Fill in other fields with valid data...

    // Click the submit button
    cy.get('input[name="submit"]').click()

    // Add assertions for redirection to the login page after successful registration
    cy.url().should('include', 'login.php')
    // Add more assertions if needed, such as checking the existence of elements on the login page
  })

  
})

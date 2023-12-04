describe('Add Menu Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/add_menu.php')
  })

  it('displays all necessary fields', () => {
    cy.get('input[name="d_name"]').should('exist')
    cy.get('input[name="about"]').should('exist')
    cy.get('input[name="price"]').should('exist')
    cy.get('input[name="file"]').should('exist')
    cy.get('select[name="res_name"]').should('exist')
  })

  it('fills out the form', () => {
    cy.get('input[name="d_name"]').type('mantap')
    cy.get('input[name="about"]').type('makanan ini sangat enak sekali')
    cy.get('input[name="price"]').type('10.000')
    cy.get('input[name="file"]').attachFile('1.jpg')
    cy.get('select[name="res_name"]').select('Green Village Restaurant')
  })

  it('submits the form', () => {
    cy.get('input[name="d_name"]').type('mantap')
    cy.get('input[name="about"]').type('makanan ini sangat enak sekali')
    cy.get('input[name="price"]').type('10.000')
    cy.get('input[name="file"]').attachFile('1.jpg')
    cy.get('select[name="res_name"]').select('Green Village Restaurant')

    cy.get('input[name="submit"]').click()

    // Add assertions for success message or appropriate validation
    cy.contains('.alert-success', 'New Dish Added Successfully').should('exist')
  })

  it('validates empty form submission', () => {
    // Submitting an empty form
    cy.get('input[name="submit"]').click()

    // Add assertions for error message or appropriate validation
    cy.contains('.alert-danger', 'All fields Must be Fillup!').should('exist')
  })

  // Add more test cases for other scenarios as needed
})

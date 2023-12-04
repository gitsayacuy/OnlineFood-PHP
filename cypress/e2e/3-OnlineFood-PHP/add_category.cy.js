describe('Add Category Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/add_category.php')
  })

  it('displays error on empty submission', () => {
    cy.get('input[name="submit"]').click()
    cy.get('.alert-danger').should('contain', 'field Required!')
  })

  it('adds a new category', () => {
    const categoryName = 'sehat'
    cy.get('input[name="c_name"]').type(categoryName)
    cy.get('input[name="submit"]').click()
    cy.get('.alert-success').should('contain', 'New Category Added Successfully')
  })

  it('displays error for existing category', () => {
    const existingCategory = 'sehat'
    // Simulate adding an existing category first
    cy.get('input[name="c_name"]').type(existingCategory)
    cy.get('input[name="submit"]').click()
    cy.get('.alert-success').should('contain', 'New Category Added Successfully')

    // Try adding the same existing category again
    cy.visit('http://localhost/OnlineFood-PHP/admin/add_category.php')
    cy.get('input[name="c_name"]').type(existingCategory)
    cy.get('input[name="submit"]').click()
    cy.get('.alert-danger').should('contain', 'Category already exist')
  })

  it('displays listed categories', () => {
    cy.get('#myTable').should('exist')
    // Perform assertions for displayed categories here
    // For instance, checking if a category name exists in the table
  })
})

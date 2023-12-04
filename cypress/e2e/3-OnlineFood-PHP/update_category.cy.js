describe('Update Category', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/update_category.php?cat_upd=19')
  })

  it('updates category name successfully', () => {
    const updatedCategoryName = 'kuat'

    // Find the input field, clear it, and update the category name
    cy.get('input[name="c_name"]')
      .clear()
      .type(updatedCategoryName)

    // Click the Save button
    cy.get('input[name="submit"]').click()

    // Assert success message
    cy.get('.alert-success').should('contain', 'Updated Successfully')
  })

  it('validates empty category name field', () => {
    // Ensure the input field is empty initially
    cy.get('input[name="c_name"]').should('have.value', '')

    // Click the Save button without entering a category name
    cy.get('input[name="submit"]').click()

    // Assert error message for empty field
    cy.get('.alert-danger').should('contain', 'field Required')
  })

  it('validates existing category name', () => {
    const existingCategoryName = 'sehat'

    // Enter an existing category name
    cy.get('input[name="c_name"]').type(existingCategoryName)

    // Click the Save button
    cy.get('input[name="submit"]').click()

    // Assert error message for existing category
    cy.get('.alert-danger').should('contain', 'Category already exist')
  })

  it('validates successful update in UI', () => {
    const updatedCategoryName = 'kuat'

    // Find the input field, clear it, and update the category name
    cy.get('input[name="c_name"]')
      .clear()
      .type(updatedCategoryName)

    // Click the Save button
    cy.get('input[name="submit"]').click()

    // Visit the page again to see if the updated name reflects in the UI
    cy.visit('http://localhost/OnlineFood-PHP/admin/update_category.php?cat_upd=19')

    // Assert the updated category name in the input field
    cy.get('input[name="c_name"]').should('have.value', updatedCategoryName)
  })
})

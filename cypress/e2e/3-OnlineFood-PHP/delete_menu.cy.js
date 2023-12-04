describe('Delete Menu Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/all_menu.php')
  })

  it('should delete the first menu', () => {
    // Click the delete button of the first menu
    cy.get('table tbody tr:first-child .btn-danger').click()

    // Confirm the deletion
    cy.on('window:confirm', () => true)

    // Validate that the menu is deleted
    cy.get('table tbody tr').should('have.length', 1)
  })

})
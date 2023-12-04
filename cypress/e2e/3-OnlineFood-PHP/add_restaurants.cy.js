describe('Add Restaurant Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/add_restaurant.php')
  })

  it('should display the form', () => {
    cy.get('form[action=""]').should('exist')
  })

  it('should submit the form with valid data', () => {
    cy.get('input[name="res_name"]').type('sehat room')
    cy.get('input[name="email"]').type('sehat@gmail.com')
    cy.get('input[name="phone"]').type('0894601216182')
    cy.get('input[name="url"]').type('sehat.com')
    cy.get('select[name="o_hr"]').select('6am')
    cy.get('select[name="c_hr"]').select('6pm')
    cy.get('select[name="o_days"]').select('mon-fri')
    cy.get('select[name="c_name"]').select('salad')
    cy.get('textarea[name="address"]').type('jln mekar')
    cy.get('input[name="file"]').attachFile('1.jpg')
    cy.get('input[name="submit"]').click()

    // Assuming there is a success message displayed after form submission
    cy.get('.alert-success').should('exist')
  })

  it('should display an error message for empty fields', () => {
    cy.get('input[name="submit"]').click()

    // Assuming there is an error message displayed for empty fields
    cy.get('.alert-danger').should('exist')
  })

  it('should display an error message for invalid image extension', () => {
    cy.get('input[name="res_name"]').type('sehat room')
    cy.get('input[name="email"]').type('sehat@gmail.com')
    cy.get('input[name="phone"]').type('0894601216182')
    cy.get('input[name="url"]').type('sehat.com')
    cy.get('select[name="o_hr"]').select('6am')
    cy.get('select[name="c_hr"]').select('6pm')
    cy.get('select[name="o_days"]').select('mon-fri')
    cy.get('select[name="c_name"]').select('salad')
    cy.get('textarea[name="address"]').type('jln mekar')
    cy.get('input[name="file"]').attachFile('invalid-extension.txt')
    cy.get('input[name="submit"]').click()

    // Assuming there is an error message displayed for invalid image extension
    cy.get('.alert-danger').should('exist')
  })
})

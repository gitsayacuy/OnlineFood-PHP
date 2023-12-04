describe('Update Restaurant Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/update_restaurant.php?res_upd=11')
  })

  it('displays error message on empty form submission', () => {
    cy.get('form').submit()
    cy.get('.alert-danger').should('contain', 'All fields Must be Fillup!')
  })

  it('displays error message on invalid image extension', () => {
    cy.fixture('1.jpg').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: '1.jpg',
        mimeType: 'image/jpeg'
      })
    })
    cy.get('form').submit()
    cy.get('.alert-danger').should('contain', 'invalid extension!')
  })

  it('successfully updates restaurant on valid form submission', () => {
    cy.fixture('1.jpg').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: '1.jpg',
        mimeType: 'image/jpeg'
      })
    })

    cy.get('input[name="res_name"]').type('well')
    cy.get('input[name="email"]').type('well@gmail.com')
    cy.get('input[name="phone"]').type('0896601812138')
    cy.get('input[name="url"]').type('well.com')
    cy.get('select[name="o_hr"]').select('6am')
    cy.get('select[name="c_hr"]').select('7pm')
    cy.get('select[name="o_days"]').select('mon-fri')
    cy.get('select[name="c_name"]').select('salad')

    cy.get('form').submit()
    cy.get('.alert-success').should('contain', 'Record Updated!')
  })

  it('successfully updates restaurant without image', () => {
    cy.get('input[name="res_name"]').type('well')
    cy.get('input[name="email"]').type('well@gmail.com')
    cy.get('input[name="phone"]').type('0896601812138')
    cy.get('input[name="url"]').type('well.com')
    cy.get('select[name="o_hr"]').select('6am')
    cy.get('select[name="c_hr"]').select('7pm')
    cy.get('select[name="o_days"]').select('mon-fri')
    cy.get('select[name="c_name"]').select('salad')

    cy.get('form').submit()
    cy.get('.alert-success').should('contain', 'Record Updated!')
  })
})

describe('Update Menu Tests', () => {
  it('Loads the update menu page', () => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/update_menu.php?menu_upd=38')
    // Pastikan halaman terbuka dengan benar
    cy.contains('Add Menu to Restaurant healthyfood')
  })

  it('Updates menu with valid data', () => {
    // Mengisi formulir dengan data yang diberikan
    cy.get('input[name="d_name"]').clear().type('salad mantap')
    cy.get('input[name="about"]').clear().type('ini makanan paling mantap')
    cy.get('input[name="price"]').clear().type('10000')
    cy.get('input[name="file"]').attachFile('1.jpg')
    cy.get('select[name="res_name"]').select('Green Village Restaurant')

    // Submit formulir
    cy.get('input[name="submit"]').click()

    // Pastikan record telah diperbarui
    cy.contains('Record Updated!')
  })

  it('Fails to update menu with invalid data', () => {
    // Mengisi formulir dengan data yang tidak valid
    cy.get('input[name="d_name"]').clear()
    cy.get('input[name="about"]').clear()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="file"]').attachFile('Ft5_3mb.jpg.jpg') // Upload gambar besar

    // Submit formulir
    cy.get('input[name="submit"]').click()

    // Pastikan pesan error muncul
    cy.contains('Max Image Size is 1024kb!')
  })

  it('Fails to update menu with empty fields', () => {
    // Tidak mengisi beberapa field yang diperlukan
    cy.get('input[name="d_name"]').clear()
    cy.get('input[name="about"]').clear()
    cy.get('input[name="price"]').clear()

    // Submit formulir
    cy.get('input[name="submit"]').click()

    // Pastikan pesan error muncul
    cy.contains('All fields Must be Fillup!')
  })
})

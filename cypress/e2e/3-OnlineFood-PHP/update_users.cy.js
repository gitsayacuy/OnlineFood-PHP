describe('Update Users Page', () => {
  beforeEach(() => {
    // Mengunjungi halaman sebelum setiap test
    cy.visit('http://localhost/OnlineFood-PHP/admin/update_users.php?user_upd=10')
  })

  it('successfully updates user details', () => {
    // Memasukkan data valid untuk pengguna
    cy.get('input[name="uname"]').clear().type('dimas')
    cy.get('input[name="fname"]').clear().type('dani')
    cy.get('input[name="lname"]').clear().type('donas')
    cy.get('input[name="email"]').clear().type('donal@gmail.com')
    cy.get('input[name="password"]').clear().type('newpassword123')
    cy.get('input[name="phone"]').clear().type('1234567890')

    // Mengirim formulir untuk memperbarui detail pengguna
    cy.get('input[name="submit"]').click()

    // Memastikan bahwa pesan sukses ditampilkan
    cy.get('.alert-success').should('be.visible')
  })

  it('displays error for empty fields', () => {
    // Mengosongkan semua input
    cy.get('input[name="uname"]').clear()
    cy.get('input[name="fname"]').clear()
    cy.get('input[name="lname"]').clear()
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="phone"]').clear()

    // Mengirim formulir tanpa mengisi input apa pun
    cy.get('input[name="submit"]').click()

    // Memastikan bahwa pesan kesalahan ditampilkan
    cy.get('.alert-danger').should('be.visible')
  })

  it('displays error for invalid email', () => {
    // Memasukkan email yang tidak valid
    cy.get('input[name="email"]').clear().type('invalidemail')

    // Mengirim formulir dengan email yang tidak valid
    cy.get('input[name="submit"]').click()

    // Memastikan bahwa pesan kesalahan ditampilkan untuk email yang tidak valid
    cy.get('.alert-danger').should('be.visible')
  })

  it('displays error for password less than 6 characters', () => {
    // Memasukkan kata sandi yang terlalu pendek
    cy.get('input[name="password"]').clear().type('short')

    // Mengirim formulir dengan kata sandi yang terlalu pendek
    cy.get('input[name="submit"]').click()

    // Memastikan bahwa pesan kesalahan ditampilkan untuk kata sandi yang terlalu pendek
    cy.get('.alert-danger').should('be.visible')
  })
})

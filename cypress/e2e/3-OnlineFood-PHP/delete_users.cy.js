describe('Delete Users Page', () => {
  beforeEach(() => {
    // Mengunjungi halaman sebelum setiap test
    cy.visit('http://localhost/OnlineFood-PHP/admin/all_users.php')
  })

  it('successfully deletes a user', () => {
    // Memastikan ada user yang bisa dihapus
    cy.get('table tbody tr').should('have.length.gt', 0)

    // Menghapus user pertama dari daftar
    cy.get('table tbody tr:first-child').within(() => {
      cy.get('.btn-danger').click()
    })

    // Memastikan bahwa user telah dihapus
    cy.url().should('include', 'all_users.php')
    cy.get('table tbody tr').should('have.length.lt', 1)
  })

  it('does not delete a user when cancelled', () => {
    // Memastikan ada user yang bisa dihapus
    cy.get('table tbody tr').should('have.length.gt', 0)

    // Mengklik tombol hapus tetapi membatalkan penghapusan
    cy.get('table tbody tr:first-child').within(() => {
      cy.get('.btn-danger').click()
    })
    cy.on('window:confirm', () => false)

    // Memastikan bahwa user tidak dihapus
    cy.url().should('include', 'all_users.php')
    cy.get('table tbody tr').should('have.length.gt', 0)
  })

  it('fails to delete if no users exist', () => {
    // Menghapus semua user dari daftar
    cy.get('table tbody tr').each(() => {
      cy.get('table tbody tr:first-child').within(() => {
        cy.get('.btn-danger').click()
      })
    })

    // Memastikan tidak ada user yang tersisa
    cy.url().should('include', 'all_users.php')
    cy.get('table tbody tr').should('have.length', 0)
  })

  it('does not delete if action is cancelled for the only user', () => {
    // Menyimpan user terakhir dari daftar
    let username
    cy.get('table tbody tr:last-child').within(() => {
      cy.get('td:first-child').invoke('text').then((text) => {
        username = text
      })
    })

    // Hanya ada satu user yang tersisa, coba untuk menghapusnya
    cy.get('table tbody tr').within(() => {
      cy.get('.btn-danger').click()
    })
    cy.on('window:confirm', () => false)

    // Memastikan bahwa user masih ada
    cy.url().should('include', 'all_users.php')
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child td:first-child').should('contain', username)
  })
})

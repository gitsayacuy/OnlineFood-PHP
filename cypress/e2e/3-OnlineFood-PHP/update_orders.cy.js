describe('Update Order Status', () => {
  it('should login and update order status', () => {
    cy.visit('http://localhost/OnlineFood-PHP/login.php')
    
    // Login
    cy.get('input[name="username"]').type('fatahillah')
    cy.get('input[name="password"]').type('fatahillah1234')
    cy.get('input[type="submit"]').click()

    // Navigasi ke halaman order update dengan form_id=14
    cy.visit('http://localhost/OnlineFood-PHP/admin/order_update.php?form_id=14')

    // Memastikan form terbuka dengan benar
    cy.get('form[name="updateticket"]').should('exist')

    // Mengubah status dari dispatch menjadi delivered dan mengisi deskripsi
    cy.get('select[name="status"]').select('Delivered')
    cy.get('textarea[name="remark"]').type('mohon bersabar')

    // Memastikan tombol submit ada dan melakukan submit form
    cy.get('input[name="update"]').should('exist').click()

    // Memastikan pesan berhasil muncul
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Form Details Updated Successfully')
    })
  })

  it('should validate updated order status', () => {
    // Lakukan langkah-langkah login dan navigasi seperti di atas

    // Cek apakah order sudah diperbarui dengan status yang benar
    cy.get('table').contains('td', 'Form Number').siblings('td').should('contain', '14')
    cy.get('table').contains('td', 'Status').siblings('td').should('contain', 'Delivered')
    cy.get('table').contains('td', 'Message').siblings('td').should('contain', 'mohon bersabar')
  })

  it('should close the window', () => {
    // Lakukan langkah-langkah login dan navigasi seperti di atas

    // Klik tombol "Close this window"
    cy.get('input[value="Close this window "]').click()

    // Memastikan window telah tertutup
    cy.window().should('not.exist')
  })

  it('passes', () => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/view_order.php?user_upd=14')
  })
})

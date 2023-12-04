describe('Delete Restaurant', () => {
  beforeEach(() => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/all_restaurant.php')
  })

  it('should delete a restaurant', () => {
    // Pilih elemen <tr> yang sesuai dengan kriteria yang Anda berikan
    cy.get('tr:contains("Salad")')
      .find('a.btn-danger') // Temukan tombol delete di dalam elemen tr yang sesuai
      .click()

    // Lakukan validasi setelah mengklik tombol delete
    cy.url().should('include', 'delete_restaurant.php') // Pastikan URL telah berubah ke halaman delete_restaurant.php

    // Validasi pesan atau tindakan setelah menghapus restoran
    cy.contains('Are you sure you want to delete?') // Pastikan pesan konfirmasi muncul

    // Lakukan tindakan penghapusan dengan menekan tombol konfirmasi hapus jika ada
    cy.get('button.btn-danger').click() // Ganti 'button.btn-danger' dengan selector yang sesuai jika ada perubahan

    // Validasi setelah restoran dihapus
    cy.contains('Restaurant deleted successfully') // Pastikan pesan sukses muncul setelah penghapusan
  })

  it('should not delete a restaurant without confirmation', () => {
    cy.get('tr:contains("Salad")')
      .find('a.btn-danger') // Temukan tombol delete di dalam elemen tr yang sesuai
      .click()

    // Lakukan validasi jika pengguna tidak mengonfirmasi penghapusan
    cy.get('button.btn-secondary').click() // Ganti 'button.btn-secondary' dengan selector yang sesuai jika ada perubahan

    // Validasi bahwa pesan sukses tidak muncul jika pengguna tidak mengonfirmasi penghapusan
    cy.contains('Restaurant deleted successfully').should('not.exist')
  })

  it('should cancel restaurant deletion', () => {
    cy.get('tr:contains("Salad")')
      .find('a.btn-danger') // Temukan tombol delete di dalam elemen tr yang sesuai
      .click()

    // Lakukan tindakan pembatalan penghapusan restoran
    cy.contains('Cancel').click()

    // Validasi bahwa penghapusan telah dibatalkan dan tidak ada pesan sukses yang muncul
    cy.contains('Restaurant deleted successfully').should('not.exist')
  })

  it('should navigate back to restaurant list after deletion', () => {
    cy.get('tr:contains("Salad")')
      .find('a.btn-danger') // Temukan tombol delete di dalam elemen tr yang sesuai
      .click()

    // Lakukan tindakan penghapusan
    cy.get('button.btn-danger').click() // Ganti 'button.btn-danger' dengan selector yang sesuai jika ada perubahan

    // Validasi bahwa setelah penghapusan, kembali ke halaman list_restaurant.php atau all_restaurant.php
    cy.url().should('include', 'all_restaurant.php')
  })
})

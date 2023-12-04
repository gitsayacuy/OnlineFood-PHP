describe('Delete Category', () => {
  it('deletes category with ID 20', () => {
    cy.visit('http://localhost/OnlineFood-PHP/admin/add_category.php')

    // Lakukan login jika diperlukan
    // cy.login(username, password)

    // Klik link/halaman untuk menghapus kategori
    // Asumsi ada tombol/link untuk menghapus kategori dengan ID 20
    cy.get('a[href*="delete_category.php?cat_del=20"]').click()

    // Tambahkan validasi setelah menghapus kategori
    // Cek apakah kategori dengan ID 20 sudah dihapus
    cy.url().should('include', 'add_category.php')
    cy.get('table#myTable tbody').should('not.contain', 'td:contains("20")')
  })
})

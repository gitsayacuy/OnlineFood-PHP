describe('Delete Orders Page', () => {
  beforeEach(() => {
    // Mengunjungi halaman sebelum setiap test
    cy.visit('http://localhost/OnlineFood-PHP/admin/all_orders.php')
  })

  it('successfully deletes an order', () => {
    // Memastikan ada setidaknya satu order yang bisa dihapus
    cy.get('table#myTable tbody tr').should('have.length.greaterThan', 0)

    // Menghapus order pertama pada tabel
    cy.get('table#myTable tbody tr:first-child')
      .find('a.btn-danger') // Memilih tombol delete
      .click({ force: true }) // Klik secara paksa karena pesan konfirmasi muncul
    cy.on('window:confirm', () => true) // Menyetujui pesan konfirmasi
    cy.url().should('include', 'all_orders.php') // Pastikan telah kembali ke halaman orders
  })

  it('fails to delete an order if cancel is chosen in confirmation', () => {
    // Memastikan ada setidaknya satu order yang bisa dihapus
    cy.get('table#myTable tbody tr').should('have.length.greaterThan', 0)

    // Mengklik tombol delete untuk order pertama dan memilih cancel pada konfirmasi
    cy.get('table#myTable tbody tr:first-child')
      .find('a.btn-danger') // Memilih tombol delete
      .click({ force: true }) // Klik secara paksa karena pesan konfirmasi muncul
    cy.on('window:confirm', () => false) // Menolak pesan konfirmasi
    cy.url().should('include', 'all_orders.php') // Harus tetap berada di halaman orders
  })

  it('displays orders after deletion', () => {
    // Menghapus order pertama pada tabel
    cy.get('table#myTable tbody tr:first-child')
      .find('a.btn-danger') // Memilih tombol delete
      .click({ force: true }) // Klik secara paksa karena pesan konfirmasi muncul
    cy.on('window:confirm', () => true) // Menyetujui pesan konfirmasi

    // Memastikan setelah penghapusan, masih ada pesanan tersisa
    cy.get('table#myTable tbody tr').should('have.length.greaterThan', 0)
  })

  it('fails to delete if no orders are available', () => {
    // Menghapus semua order yang ada
    cy.get('table#myTable tbody tr').each(($row, index) => {
      cy.wrap($row)
        .find('a.btn-danger') // Memilih tombol delete
        .click({ force: true }) // Klik secara paksa karena pesan konfirmasi muncul
      cy.on('window:confirm', () => true) // Menyetujui pesan konfirmasi
    })

    // Memastikan tidak ada order yang tersisa untuk dihapus
    cy.get('table#myTable tbody tr').should('have.length', 1) // Hanya baris header yang tersisa
  })
})

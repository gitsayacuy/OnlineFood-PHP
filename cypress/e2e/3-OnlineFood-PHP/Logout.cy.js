describe('Logout Page Tests', () => {
  beforeEach(() => {
    // Lakukan login sebelumnya untuk menguji logout
    cy.visit('http://localhost/OnlineFood-PHP/login.php')
    cy.get('input[name="username"]').type('fatahillah')
    cy.get('input[name="password"]').type('fatahillah1234')
    cy.get('#buttn').click()
    // Tambahkan asersi untuk memastikan bahwa login berhasil sebelum pengujian logout
    // Contohnya, bisa melakukan pengecekan apakah sudah diarahkan ke halaman dashboard atau tidak
    // cy.url().should('include', '/dashboard')
  })

  it('should logout when logged in', () => {
    cy.contains('Logout').click()
    // Tambahkan asersi untuk memastikan bahwa setelah logout,
    // pengguna diarahkan kembali ke halaman login
    cy.url().should('include', 'login.php')
  })

  it('should redirect to login page if already logged out', () => {
    // Lakukan logout terlebih dahulu sebelum pengujian
    cy.contains('Logout').click()
    cy.visit('http://localhost/OnlineFood-PHP/login.php') // Kunjungi kembali halaman login
    // Tambahkan asersi untuk memastikan bahwa setelah logout, pengguna diarahkan ke halaman login
    cy.url().should('include', 'login.php')
  })

  it('should not have access to restricted pages after logout', () => {
    // Lakukan logout terlebih dahulu sebelum pengujian
    cy.contains('Logout').click()
    // Kunjungi halaman tertentu yang hanya dapat diakses setelah login
    // Ganti URL di bawah ini dengan URL dari halaman yang hanya dapat diakses setelah login
    cy.visit('http://localhost/OnlineFood-PHP/login.php')
    // Tambahkan asersi untuk memastikan bahwa pengguna diarahkan kembali ke halaman login
    cy.url().should('include', 'login.php')
  })

  it('should redirect to home page after logout', () => {
    cy.contains('Logout').click()
    // Tambahkan asersi untuk memastikan bahwa setelah logout, pengguna diarahkan ke halaman beranda
    cy.url().should('include', 'index.php')
    // Tambahkan asersi tambahan jika ingin memastikan elemen tertentu muncul di halaman beranda setelah logout
  })
})

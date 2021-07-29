describe('Home', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('main').within(() => {
      cy.findByText('Home Page from Prismic').should('be.visible')
    })
  })
})

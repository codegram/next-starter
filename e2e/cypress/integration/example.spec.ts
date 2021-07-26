describe('Home', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('main').within(() => {
      cy.findByText('Awesome kitties').should('be.visible')
    })
  })
})

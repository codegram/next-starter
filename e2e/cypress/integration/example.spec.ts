describe('Home', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('main').within(() => {
      cy.findByText('Greetings').should('be.visible')
    })
  })
})

describe('App', () => {
  it('should link text exists', () => {
    cy.visit('/')
    cy.get('.App-link').contains("Learn React")
  })

  it('should login to the system', () => {
    cy.visit('/')

    cy.login();

    cy.get('[data-testid="email"]').should('not.exist');
    cy.get('[data-testid="password"]').should('not.exist');
    cy.get('[data-testid="submit"]').should('not.exist');
  })
})

import { testId } from "../../support/selectors";

describe('App', () => {
  it('should link text exists', () => {
    cy.visit('/')
    cy.get('.App-link').contains("Learn React")
  })

  it('should login to the system', () => {
    cy.visit('/')

    cy.login();

    cy.get(testId("email")).should('not.exist');
    cy.get(testId("password")).should('not.exist');
    cy.get(testId("submit")).should('not.exist');
  })
})

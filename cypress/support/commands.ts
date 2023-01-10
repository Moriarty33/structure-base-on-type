import { authEmailSelector, authPasswordSelector, authSubmitSelector } from "./selectors";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.get(authEmailSelector).type(Cypress.env("USER_EMAIL"));
  cy.get(authPasswordSelector).type(Cypress.env("USER_PASSWORD"));
  cy.get(authSubmitSelector).click();
})

export {}

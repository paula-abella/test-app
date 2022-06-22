// https://docs.cypress.io/api/introduction/api.html

describe("Header", () => {
  it("Property menu", () => {
    cy.visit("/");

    cy.contains('Park Hyatt Sydney').click();
    cy.contains('Switch property').should('be.visible');
    cy.contains('Settings').should('be.visible');
    cy.contains('Property settings').should('not.be.visible');
    cy.contains('User management').should('not.be.visible');

    cy.contains('Settings').click();
    cy.contains('Property settings').should('be.visible');
    cy.contains('User management').should('be.visible');

  });
});

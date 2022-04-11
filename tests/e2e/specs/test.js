// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");

    // cy.contains("Cowan Hotel").click();
    // cy.contains('Cowan Hotel').should('be.visible');
    // cy.contains('Switch property').should('be.visible');
    // cy.contains('Property setting').should('be.visible');
    // cy.contains("Cowan Hotel").click();

    // cy.get('[aria-label="Go to support"]').should('be.visible');

    // cy.get('[aria-label="Toggle popover"]').click();
    // cy.get('[id^=sm-popover__content_]')
    // cy.contains('Popover content').should('be.visible')

    // cy.contains('.sm-button--disabled', 'Submit')
    // cy.contains('Submit').should('be.disabled')

    // cy.get('.sm-toast .sm-toast__content .sm-toast__action a').click()
    // cy.contains('Action').click()

    // cy.get('.sm-button .sm-icon--action-edit').click()
    // cy.get('.sm-button [aria-label="Edit property"]').click();

    cy.contains('Success toast').should('not.be.visible')
    cy.contains('Show toast').click()
    cy.contains('Success toast').should('be.visible')
  });
});

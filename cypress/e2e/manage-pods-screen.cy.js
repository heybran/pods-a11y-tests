describe('Pods Manage Pods screen', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host') + '/wp-admin/');
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.visit(Cypress.env('host') + '/wp-admin/admin.php?page=pods');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load (custom configuration)', () => {
    cy.checkA11y();
  });
});
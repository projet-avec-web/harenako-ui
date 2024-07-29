describe('begin test e2e', () => {
  it('visit the current url', () => {
    cy.visit('/');
    cy.get('.layout');
  });
});

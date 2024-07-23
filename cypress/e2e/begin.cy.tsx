describe('begin test e2e', () => {
  it('visit the current url', () => {
    cy.visit('/');
    cy.get('h1');
    cy.get('button');
  });
});

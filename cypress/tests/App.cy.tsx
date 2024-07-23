import App from '../../src/App';

describe('component test', () => {
  it('mount the App component', () => {
    cy.mount(<App />);
  });
});

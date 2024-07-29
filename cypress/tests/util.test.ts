import { addIdentifier } from '../../src/providers/utils';

describe('test of the utils', () => {
  it('should be equal to an object with id', () => {
    const objectWithoutId = {
      nom: 'name',
    };
    const objectWithId = {
      id: 'name',
      nom: 'name',
    };
    expect(addIdentifier(objectWithoutId, 'nom')).equal(objectWithId);
  });
});

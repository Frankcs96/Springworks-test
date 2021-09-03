import { sum } from '../src/main';

//I'm Following TDD so I will start writing tests first.

describe('Springworks Assaingment', () => {

  it('Tests are working', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

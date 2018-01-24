const sortLogic = require('../sortLogic')

describe('sort logic', () => {
  it('sorts the characters in a string in reverse order by unicode value', () => {
    let input = '123';
    let expected = '321';
    expect(sortLogic(input)).toEqual(expected);
  })
})
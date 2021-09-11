import { queryStringCreator } from './query-string-creator';

describe('queryStringCreator', () => {
  it.each([
    [{ a: 'b' }, '?a=b'],
    [{ a: 'b', c: '2' }, '?a=b&c=2'],
    [{ a: [1, 2, 3].toString(), foo: 'bar' }, '?a=1%2C2%2C3&foo=bar'],
  ])(
    'should map passed params object into the query string',
    (input, output) => {
      expect(queryStringCreator(input)).toEqual(output);
    },
  );
});

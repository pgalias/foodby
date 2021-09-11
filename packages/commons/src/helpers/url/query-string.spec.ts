import { QueryString } from './query-string';

describe('QueryString', () => {
  it('should be able to append values to the params', () => {
    const queryString = new QueryString();
    queryString.append('foo', 'abc');
    queryString.append('bar', 'def');
    queryString.append('baz', 'ghi');

    expect(queryString.toString()).toEqual('foo=abc&bar=def&baz=ghi');
  });

  it('should create a query string params from passed object', () => {
    const queryString = QueryString.fromObject({
      abc: 'foo',
      def: 'bar',
      ghi: 'baz',
    });

    expect(queryString.toString()).toEqual('abc=foo&def=bar&ghi=baz');
  });
});

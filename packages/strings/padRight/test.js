var padRight = require('./padRight');

describe('String/padRight', function () {
  it('pads a string on the right side to the given length', function () {
    expect(padRight('Hello', 10, ' ')).toBe('Hello     ');

    expect(padRight('Hello', 10)).toBe('Hello     ');

    expect(padRight('Hello', 10, '-')).toBe('Hello-----');

    expect(padRight('Hello', 3, '-')).toBe('Hello');

    expect(function () {
      return padRight(123456, 3);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return padRight('Hello', '10');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});

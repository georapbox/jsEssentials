var randomString = require('./randomString');

describe('String/randomString', function () {
  it('generates a pseudo-random string of n characters', function () {
    var charsError = 'Expected a string for second argument, that contains one or more of the following characters: "#", "a", "A", "!"';

    expect(randomString(16)).toHaveLength(16);

    expect(randomString(NaN)).toHaveLength(0);

    expect(randomString(10, '#')).toMatch(/\d/);

    expect(randomString(10, 'a')).toMatch(/[a-z]/);

    expect(randomString(10, 'A')).toMatch(/[A-Z]/);

    expect(randomString(10, '!')).toMatch(/[!#$%&()*+,\-./:;<=>?@[\]^_{|}~]/);

    expect(function () {
      return randomString();
    }).toThrow(new TypeError('Expected a number for first argument'));

    expect(function () {
      return randomString(10, '');
    }).toThrow(new TypeError(charsError));

    expect(function () {
      return randomString(10, ' ');
    }).toThrow(new TypeError(charsError));

    expect(function () {
      return randomString(10, '\t\n\v\r');
    }).toThrow(new TypeError(charsError));

    expect(function () {
      return randomString(10, 123);
    }).toThrow(new TypeError(charsError));
  });
});

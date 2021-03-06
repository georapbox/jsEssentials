var findIndex = require('./findIndex');

describe('Array/findIndex', function () {
  var arr = ['a', 'b', 'c', 'd', 'e'];

  it('returns the index in the array', function () {
    expect(findIndex(arr, function (chr) {
      return chr === 'b';
    })).toBe(1);

    expect(findIndex(arr, function (chr) {
      return chr === 'Hello';
    })).toBe(-1);

    expect(function () {
      return findIndex({}, function (chr) {
        return chr === 'b';
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(function () {
      return findIndex(arr);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});

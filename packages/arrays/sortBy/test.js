var sortBy = require('./sortBy');

describe('Array/sortBy', function () {
  var people = [
    { name: 'Elena', age: '2' },
    { name: 'George', age: '33' },
    { name: 'Vasiliki', age: '32' },
    { name: 'Vaggelis', age: '30' }
  ];

  it('sorts an array of objects by property', function () {
    expect(sortBy(people, 'name')).toEqual([
      { name: 'Elena', age: '2' },
      { name: 'George', age: '33' },
      { name: 'Vaggelis', age: '30' },
      { name: 'Vasiliki', age: '32' }
    ]);

    expect(sortBy(people, 'name', false)).toEqual([
      { name: 'Vasiliki', age: '32' },
      { name: 'Vaggelis', age: '30' },
      { name: 'George', age: '33' },
      { name: 'Elena', age: '2' }
    ]);

    expect(sortBy(people, 'age', true, function (age) {
      return age * 2;
    })).toEqual([
      { name: 'Elena', age: '2' },
      { name: 'Vaggelis', age: '30' },
      { name: 'Vasiliki', age: '32' },
      { name: 'George', age: '33' }
    ]);

    expect(sortBy(people, 'nonExistentProperty')).toEqual([
      { name: 'Elena', age: '2' },
      { name: 'George', age: '33' },
      { name: 'Vasiliki', age: '32' },
      { name: 'Vaggelis', age: '30' }
    ]);

    expect(sortBy(people, 'nonExistentProperty', false)).toEqual([
      { name: 'Elena', age: '2' },
      { name: 'George', age: '33' },
      { name: 'Vasiliki', age: '32' },
      { name: 'Vaggelis', age: '30' }
    ]);

    expect(function () {
      return sortBy({}, 'age');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});

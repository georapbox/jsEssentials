var pick = require('./pick');

describe('Object/pick', function () {
  it('creates an object composed of the picked object properties', function () {
    var o1 = Object.create({
      foo: 'bar'
    });

    Object.defineProperties(o1, {
      a: {
        value: 1
      },
      b: {
        value: 2
      },
      c: {
        value: 3
      }
    });

    function O(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    O.prototype.foo = 'bar';

    var o2 = new O(1, 2, 3);

    expect(pick(o1, ['a', 'c', 'foo'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(o1, ['a', 'c', 'foo'], false)).toStrictEqual({ a: 1, c: 3, foo: 'bar' });

    expect(pick(o2, ['a', 'c', 'foo'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(o2, ['a', 'c', 'foo'], false)).toStrictEqual({ a: 1, c: 3, foo: 'bar' });

    expect(pick(o1, ['d', 'e'])).toStrictEqual({});
    expect(pick(o1, ['d', 'e'], false)).toStrictEqual({});

    expect(function () {
      return pick(null, ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(undefined, ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(['a', 'b', 'c'], ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(new Map(), ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(new WeakMap(), ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(new Set(), ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(new WeakSet(), ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(NaN, ['a']);
    }).toThrow(new TypeError('Expected a plain object for first argument'));

    expect(function () {
      return pick(o1, 'a');
    }).toThrow(new TypeError('Expected an array for second argument'));

    expect(function () {
      return pick(o1, ['a', 'b'], 1);
    }).toThrow(new TypeError('Expected a boolean for third argument'));
  });
});

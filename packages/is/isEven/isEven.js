'use strict';

/**
 * Checks if a value is even.
 *
 * @param {Number} value The value to check.
 * @return {Boolean} True if number is even, else false.
 * @example
 *
 * isEven(0);
 * // -> true
 *
 * isEven(2);
 * // -> true
 *
 * isEven(3);
 * // -> false
 *
 * isEven(5);
 * // -> false
 *
 * isEven('2');
 * // -> true
 *
 * isEven(null);
 * // -> false
 *
 * isEven();
 * // -> false
 */
function isEven(value) {
  if (typeof value === 'object' || typeof value === 'undefined') {
    return false;
  }

  return value % 2 === 0;
}

module.exports = isEven;
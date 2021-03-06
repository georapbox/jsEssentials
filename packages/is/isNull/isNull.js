'use strict';

/**
 * Checks if a value is `null`.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is null, else false.
 * @example
 *
 * isNull(null);
 * // -> true
 *
 * isNull(true);
 * // -> false
 *
 * isNull({a: 'a'});
 * // -> false
 *
 * isNull();
 * // -> false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;

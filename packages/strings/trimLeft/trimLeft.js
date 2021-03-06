'use strict';

/**
 * Removes whitespace from the left end of a string.
 *
 * @param {String} subjectString The string to left trim.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * trimLeft('    Lorem ipsum dolor si amet.');
 * // -> 'Lorem ipsum dolor si amet.'
 */
function trimLeft(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return String.prototype.trimStart
    ? subjectString.trimStart()
    : subjectString.replace(/^\s+/, '');
}

module.exports = trimLeft;
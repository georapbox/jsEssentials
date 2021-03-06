
'use strict';

/**
 * Returns the index of the first element that passes the callback check.
 * If no element passes the callback check, returns -1.
 *
 * @param {Array} array The array to check.
 * @param {function} callback The function called per iteration.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `callback` is not function.
 * @return {Number} Returns the index of the first element that matches the callback check.
 * @example
 *
 * var heroes = [
 *   {name: 'Bruce Wayne', hero: 'Batman'},
 *   {name: 'Clark Kent', hero: 'Superman', specialPowers: ['speed', 'flying', 'strength']},
 *   {name: 'Peter Parker', hero: 'Spiderman', specialPowers: ['climbing']}
 * ];
 *
 * var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
 * var numbers = [1, 2, 3];
 *
 * findIndex(characters, function (chr, index, array) {
 *   return chr === 'E';
 * });
 * // -> 4
 *
 * findIndex(heroes, function (hero, index, array) {
 *   return hero.name === 'Clark Kent';
 * });
 * // -> 1
 *
 * findIndex(heroes, function (hero, index, array) {
 *   if (hero.specialPowers) {
 *     for (var i = 0; i < hero.specialPowers.length; i++) {
 *       if (hero.specialPowers[i] === 'climbing') return true;
 *     }
 *   }
 * });
 * // -> 2
 *
 * findIndex(numbers, function (n) {
 *   return n > 10;
 * });
 * // -> -1
 */
function findIndex(array, callback) {
  var index, length;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  index = -1;
  length = array.length;

  while (++index < length) {
    if (callback(array[index], index, array) === true) {
      return index;
    }
  }

  return -1;
}

module.exports = findIndex;
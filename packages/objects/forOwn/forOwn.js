'use strict';

/**
 * Iterates over own enumerable properties of an object, executing the callback for each property.
 * The callback is invoked with three arguments (value, key, object)
 *
 * @param {Object} obj The object to iterate over.
 * @param {function} [callback] The function called per iteration.
 * @returns {Object} The original object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.move = function (x, y) {
 *   this.x += x;
 *   this.y += y;
 * };
 *
 * forOwn(new Shape(), function (value, key, obj) {
 *   console.log(key);
 *   // -> "x", "y"
 * });
 */
function forOwn(obj, callback) {
  var key;

  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      typeof callback === 'function' && callback(obj[key], key, obj);
    }
  }

  return obj;
}

module.exports = forOwn;

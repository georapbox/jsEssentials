'use strict';

/**
 * Removes all HTML tags from a string.
 *
 * @param {String} subjectString The string to strip.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The stripped string.
 * @example
 *
 * var str = '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';
 *
 * stripHTML(str);
 * // -> 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis.'
 */
function stripHTML(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString.replace(/<[^>]+>/g, '');
}

module.exports = stripHTML;
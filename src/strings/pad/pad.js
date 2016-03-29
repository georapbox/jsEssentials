/**
 * Pad `subjectString` on both sides to the given `len`, with optional `chars` defaulting to a space.
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] The character(s) to use for padding. Default is space.
 * @returns {String} The processed string.
 */
function pad(subjectString, len, chars) {
    'use strict';

    chars = chars || ' '; // Set default character.

    if (subjectString.length >= len) {
        return subjectString;
    }

    len = len - subjectString.length;

    var left = [],
        right = [];

    left.length = Math.ceil(len / 2) + 1;
    right.length = Math.floor(len / 2) + 1;
    left = left.join(chars);
    right = right.join(chars);

    return left + subjectString + right;
}

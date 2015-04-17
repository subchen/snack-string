var chars = require('./chars');

/**
 * Removes all occurrences of a character from within the source string.
 * 
 * @param {string} string
 * @param {char} char
 */
module.exports = function removeChars(string, char) {
    return chars(string).map(function(ch) {
        return (ch !== char) ? ch : null;
    }).join('');
};

var chars = require('./chars');
var toString = require('./toString');

/**
 * Removes all occurrences of a character from within the source string.
 *
 * @param {string} string
 * @param {string} char
 */
module.exports = function removeChars(string, char) {
    string = toString(string);
    char = toString(char);

    if (char.length === 0) {
        return string;
    } else if (char.length === 1) {
        return chars(string).map(function(ch) {
            return (ch !== char) ? ch : null;
        }).join('');
    } else {
        return chars(string).map(function(ch) {
            return (char.indexOf(ch) === -1) ? ch : null;
        }).join('');
    }
};

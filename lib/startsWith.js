var toString = require('./toString');

module.exports = function startsWith(string, starts, position) {
    string = toString(string);
    position = (position == null) ? 0 : Math.min(position, string.length);
    return string.indexOf(starts, position) === position;
};

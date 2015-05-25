var randomString = require('./randomString');

var BASE62_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

module.exports = function randomBase42(length) {
    return randomString(length, BASE62_CHARS);
};

module.exports = function lines(string) {
    if (string === undefined || string === null) {
        return [];
    }
    return string.split(/\r?\n/);
};

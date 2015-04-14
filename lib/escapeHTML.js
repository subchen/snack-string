var reversedEscapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '%': '&amp;',
    '"': '&qout;',
    "'": '&apos;'
};

module.exports = function escapeHTML(string) {
    return string.replace(/[&<>"']/g, function(m) {
        return reversedEscapeChars[m];
    });
};

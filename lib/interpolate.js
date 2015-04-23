var toString = require('./toString');

var MUSTACHE_SYNTAX = /\{\{(\s*\w+\s*)\}\}/g;
var SCRIPT_SYNTAX = /<%(\s*\w+\s*)%>/g;

/**
 * String interpolation.
 */
module.exports = function interpolate(template, context, syntax) {
    template = toString(template);
    context = context || {};
    var replaceFn = function(match, prop) {
        prop = prop.trim();
        return toString(context[prop]);
    };
    return template.replace(syntax || MUSTACHE_SYNTAX, replaceFn);
};

module.exports.MUSTACHE_SYNTAX = MUSTACHE_SYNTAX;
module.exports.SCRIPT_SYNTAX = SCRIPT_SYNTAX;

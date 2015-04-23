var toString = require('./toString');

var MUSTACHE_SYNTAX = /\{\{(\w+)\}\}/g;

/**
 * String interpolation.
 */
module.exports = function interpolate(template, replacements, syntax){
    template = toString(template);
    var replaceFn = function(match, prop){
        return (prop in replacements) ? toString(replacements[prop]) : '';
    };
    return template.replace(syntax || MUSTACHE_SYNTAX, replaceFn);
};

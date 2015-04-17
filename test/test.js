var assert = require('assert');
var string = require('../');

describe('String', function() {

    var equal = assert.strictEqual;

    describe('#toString()', function() {
        it('Returns a string representation of the object', function() {
            var toString = string.toString;
            equal(toString(undefined) , '');
            equal(toString(null)      , '');
            equal(toString(NaN)       , '');
            equal(toString(Infinity)  , '');
            equal(toString(123)       , '123');
            equal(toString('123')     , '123');
            equal(toString({})        , '[object Object]');
            equal(toString([])        , '');
        });
    });

    describe('#hashCode()', function() {
        it('Returns a hash code for this string', function() {
            var hashCode = string.hashCode;
            equal(hashCode(undefined) , 0);
            equal(hashCode(null)      , 0);
            equal(hashCode('')        , 0);
            equal(hashCode('abc')     , 96354);
        });
    });

    describe('#isEmpty()', function() {
        it('Checks if a String is empty or null', function() {
            var isEmpty = string.isEmpty;
            equal(isEmpty(undefined) , true);
            equal(isEmpty(null)      , true);
            equal(isEmpty('')        , true);
            equal(isEmpty('\n')      , false);
            equal(isEmpty('aaa')     , false);
        });
    });
    describe('#isBlank()', function() {
        it('Checks if a String is whitespace, empty or null', function() {
            var isBlank = string.isBlank;
            equal(isBlank(undefined) , true);
            equal(isBlank(null)      , true);
            equal(isBlank('')        , true);
            equal(isBlank('\n')      , true);
            equal(isBlank('aaa')     , false);
        });
    });

    describe('#startsWith()', function() {
        it('Check if a String starts with a specified prefix.', function() {
            var startsWith = string.startsWith;
            equal(startsWith(undefined, '*') , false);
            equal(startsWith(null, '*')      , false);
            equal(startsWith('', '*')        , false);
            equal(startsWith('', '')         , true);
            equal(startsWith('abc', 'a')     , true);
            equal(startsWith('abc', 'c')     , false);
            equal(startsWith('abc', '')      , true);
        });
    });
    describe('#endsWith()', function() {
        it('Check if a String ends with a specified suffix.', function() {
            var endsWith = string.endsWith;
            equal(endsWith(undefined, '*') , false);
            equal(endsWith(null, '*')      , false);
            equal(endsWith('', '*')        , false);
            equal(endsWith('', '')         , true);
            equal(endsWith('abc', 'a')     , false);
            equal(endsWith('abc', 'c')     , true);
            equal(endsWith('abc', '')      , true);
        });
    });

    describe('#before()', function() {
        it('Gets the substring before the first occurrence of a separator', function() {
            var before = string.before;
            equal(before(null, '*')    , '');
            equal(before('', '*')      , '');
            equal(before('abc', 'a')   , '');
            equal(before('abcba', 'b') , 'a');
            equal(before('abc', 'c')   , 'ab');
            equal(before('abc', 'd')   , 'abc');
            equal(before('abc', '')    , '');
            equal(before('abc', null)  , 'abc');
        });
    });
    describe('#beforeLast()', function() {
        it('Gets the substring before the last occurrence of a separator', function() {
            var beforeLast = string.beforeLast;
            equal(beforeLast(null, '*')    , '');
            equal(beforeLast('', '*')      , '');
            equal(beforeLast('abc', 'a')   , '');
            equal(beforeLast('abcba', 'b') , 'abc');
            equal(beforeLast('abc', 'c')   , 'ab');
            equal(beforeLast('abc', 'd')   , 'abc');
            equal(beforeLast('abc', '')    , 'abc');
            equal(beforeLast('abc', null)  , 'abc');
        });
    });
    describe('#after()', function() {
        it('Gets the substring after the first occurrence of a separator', function() {
            var after = string.after;
            equal(after(null, '*')    , '');
            equal(after('', '*')      , '');
            equal(after('*', null)    , '');
            equal(after('abc', 'a')   , 'bc');
            equal(after('abcba', 'b') , 'cba');
            equal(after('abc', 'c')   , '');
            equal(after('abc', 'd')   , '');
            equal(after('abc', '')    , 'abc');
        });
    });
    describe('#afterLast()', function() {
        it('Gets the substring after the last occurrence of a separator', function() {
            var afterLast = string.afterLast;
            equal(afterLast(null, '*')    , '');
            equal(afterLast('', '*')      , '');
            equal(afterLast('*', null)    , '');
            equal(afterLast('abc', 'a')   , 'bc');
            equal(afterLast('abcba', 'b') , 'a');
            equal(afterLast('abc', 'c')   , '');
            equal(afterLast('abc', 'd')   , '');
            equal(afterLast('abc', '')    , '');
        });
    });
    describe('#between()', function() {
        it('Gets the substring between open and close tag', function() {
            var between = string.between;
            equal(between(null, '*')         , '');
            equal(between('abcba', 'a')      , 'bcb');
            equal(between('abcba', 'a', 'c') , 'b');
        });
    });

    describe('#pad()', function() {
        it('Pads string on the left and right sides if it is shorter than length', function() {
            var pad = string.pad;
            equal(pad(null, 5)      , '     ');
            equal(pad('a', 5)       , '  a  ');
            equal(pad('ab', 5)      , '  ab ');
            equal(pad('a', 5, '0')  , '00a00');
            equal(pad('abcde', 3)   , 'abcde');
        });
    });
    describe('#padLeft()', function() {
        it('Pads string on the left side if it is shorter than length', function() {
            var padLeft = string.padLeft;
            equal(padLeft(null, 5)      , '     ');
            equal(padLeft('a', 5)       , '    a');
            equal(padLeft('ab', 5)      , '   ab');
            equal(padLeft('a', 5, '0')  , '0000a');
            equal(padLeft('abcde', 3)   , 'abcde');
        });
    });
    describe('#padRight()', function() {
        it('Pads string on the right side if it is shorter than length', function() {
            var padRight = string.padRight;
            equal(padRight(null, 5)      , '     ');
            equal(padRight('a', 5)       , 'a    ');
            equal(padRight('ab', 5)      , 'ab   ');
            equal(padRight('a', 5, '0')  , 'a0000');
            equal(padRight('abcde', 3)   , 'abcde');
        });
    });

    describe('#repeat()', function() {
        it('Repeats the given string n times', function() {
            var repeat = string.repeat;
            equal(repeat(null, 2)      , '');
            equal(repeat('a', 2)       , 'aa');
            equal(repeat('ab', 2)      , 'abab');
            equal(repeat('ab', -2)     , '');
            equal(repeat('ab', 2, ',') , 'ab,ab');
        });
    });
    describe('#removeChars()', function() {
        it('Removes all occurrences of a character from within the source string', function() {
            var removeChars = string.removeChars;
            equal(removeChars(null, '')     , '');
            equal(removeChars('abcba', '')  , 'abcba');
            equal(removeChars('abcba', 'a') , 'bcb');
            equal(removeChars('abcba', 'd') , 'abcba');
            equal(removeChars('abcba', 'ab'), 'c');
        });
    });

    describe('#capitalize()', function() {
        it('Capitalizes the first character of string', function() {
            var capitalize = string.capitalize;
            equal(capitalize(null)     , '');
            equal(capitalize('abcba')  , 'Abcba');
            equal(capitalize('ab ba')  , 'Ab ba');
            equal(capitalize('ABCBA')  , 'ABCBA');
        });
    });
    describe('#decapitalize()', function() {
        it('Decapitalizes the first character of string', function() {
            var decapitalize = string.decapitalize;
            equal(decapitalize(null)     , '');
            equal(decapitalize('Abcba')  , 'abcba');
            equal(decapitalize('ab ba')  , 'ab ba');
            equal(decapitalize('ABCBA')  , 'aBCBA');
        });
    });
    describe('#camelize()', function() {
        it('Converts string to camel case', function() {
            var camelize = string.camelize;
            equal(camelize(null)           , '');
            equal(camelize('abcba')        , 'abcba');
            equal(camelize('ABCBA')        , 'abcba');
            equal(camelize('ab ba')        , 'abBa');
            equal(camelize('ab ba', true)  , 'AbBa');
        });
    });
    describe('#dasherize()', function() {
        it('Converts string to dasherize case', function() {
            var dasherize = string.dasherize;
            equal(dasherize(null)           , '');
            equal(dasherize('Abcba')        , 'abcba');
            equal(dasherize('ABCBA')        , 'a-b-c-b-a');
            equal(dasherize('ab ba')        , 'ab-ba');
            equal(dasherize('ab BA')        , 'ab-b-a');
        });
    });
    describe('#classify()', function() {
        it('Converts string to classify case', function() {
            var classify = string.classify;
             equal(classify(null),                       '');
             equal(classify(''),                         '');
             equal(classify('some_class_name'),          'SomeClassName');
             equal(classify('my wonderfull class_name'), 'MyWonderfullClassName');
             equal(classify('my wonderfull.class.name'), 'MyWonderfullClassName');
             equal(classify('myLittleCamel'),            'MyLittleCamel');
             equal(classify('myLittleCamel.class.name'), 'MyLittleCamelClassName');
             equal(classify(123),                        '123');
        });
    });

});

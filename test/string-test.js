var assert = require('assert');
var string = require('../');

/* jshint mocha: true */
describe('String', function() {

    var equal = assert.strictEqual;
    var deepEqual = assert.deepEqual;

    describe('#toString()', function() {
        it('Returns a string representation of the object', function() {
            var toString = string.toString;
            equal(toString(undefined), '');
            equal(toString(null), '');
            equal(toString(NaN), '');
            equal(toString(Infinity), '');
            equal(toString(123), '123');
            equal(toString('123'), '123');
            equal(toString({}), '[object Object]');
            equal(toString([]), '');
        });
    });

    describe('#hashCode()', function() {
        it('Returns a hash code for this string', function() {
            var hashCode = string.hashCode;
            equal(hashCode(undefined), 0);
            equal(hashCode(null), 0);
            equal(hashCode(''), 0);
            equal(hashCode('abc'), 96354);
        });
    });

    describe('#isEmpty()', function() {
        it('Checks if a String is empty or null', function() {
            var isEmpty = string.isEmpty;
            equal(isEmpty(undefined), true);
            equal(isEmpty(null), true);
            equal(isEmpty(''), true);
            equal(isEmpty('\n'), false);
            equal(isEmpty('aaa'), false);
        });
    });
    describe('#isBlank()', function() {
        it('Checks if a String is whitespace, empty or null', function() {
            var isBlank = string.isBlank;
            equal(isBlank(undefined), true);
            equal(isBlank(null), true);
            equal(isBlank(''), true);
            equal(isBlank('\n'), true);
            equal(isBlank('aaa'), false);
        });
    });

    describe('#contains()', function() {
        it('Determines whether one string may be found within another string', function() {
            var contains = string.contains;
            equal(contains(null, '*'), false);
            equal(contains('', '*'), false);
            equal(contains('', ''), true);
            equal(contains('abc', 'a'), true);
            equal(contains('abc', 'c'), true);
            equal(contains('abc', 'x'), false);
            equal(contains('abc', ''), true);
        });
    });
    describe('#startsWith()', function() {
        it('Checks if a String starts with a specified prefix', function() {
            var startsWith = string.startsWith;
            equal(startsWith(undefined, '*'), false);
            equal(startsWith(null, '*'), false);
            equal(startsWith('', '*'), false);
            equal(startsWith('', ''), true);
            equal(startsWith('abc', 'a'), true);
            equal(startsWith('abc', 'c'), false);
            equal(startsWith('abc', ''), true);
        });
    });
    describe('#endsWith()', function() {
        it('Checks if a String ends with a specified suffix', function() {
            var endsWith = string.endsWith;
            equal(endsWith(undefined, '*'), false);
            equal(endsWith(null, '*'), false);
            equal(endsWith('', '*'), false);
            equal(endsWith('', ''), true);
            equal(endsWith('abc', 'a'), false);
            equal(endsWith('abc', 'c'), true);
            equal(endsWith('abc', ''), true);
        });
    });

    describe('#before()', function() {
        it('Gets the substring before the first occurrence of a separator', function() {
            var before = string.before;
            equal(before(null, '*'), '');
            equal(before('', '*'), '');
            equal(before('abc', 'a'), '');
            equal(before('abcba', 'b'), 'a');
            equal(before('abc', 'c'), 'ab');
            equal(before('abc', 'd'), 'abc');
            equal(before('abc', ''), '');
            equal(before('abc', null), 'abc');
        });
    });
    describe('#beforeLast()', function() {
        it('Gets the substring before the last occurrence of a separator', function() {
            var beforeLast = string.beforeLast;
            equal(beforeLast(null, '*'), '');
            equal(beforeLast('', '*'), '');
            equal(beforeLast('abc', 'a'), '');
            equal(beforeLast('abcba', 'b'), 'abc');
            equal(beforeLast('abc', 'c'), 'ab');
            equal(beforeLast('abc', 'd'), 'abc');
            equal(beforeLast('abc', ''), 'abc');
            equal(beforeLast('abc', null), 'abc');
        });
    });
    describe('#after()', function() {
        it('Gets the substring after the first occurrence of a separator', function() {
            var after = string.after;
            equal(after(null, '*'), '');
            equal(after('', '*'), '');
            equal(after('*', null), '');
            equal(after('abc', 'a'), 'bc');
            equal(after('abcba', 'b'), 'cba');
            equal(after('abc', 'c'), '');
            equal(after('abc', 'd'), '');
            equal(after('abc', ''), 'abc');
        });
    });
    describe('#afterLast()', function() {
        it('Gets the substring after the last occurrence of a separator', function() {
            var afterLast = string.afterLast;
            equal(afterLast(null, '*'), '');
            equal(afterLast('', '*'), '');
            equal(afterLast('*', null), '');
            equal(afterLast('abc', 'a'), 'bc');
            equal(afterLast('abcba', 'b'), 'a');
            equal(afterLast('abc', 'c'), '');
            equal(afterLast('abc', 'd'), '');
            equal(afterLast('abc', ''), '');
        });
    });
    describe('#between()', function() {
        it('Gets the substring between open and close tag', function() {
            var between = string.between;
            equal(between(null, '*'), '');
            equal(between('abcba', 'a'), 'bcb');
            equal(between('abcba', 'a', 'c'), 'b');
        });
    });

    describe('#pad()', function() {
        it('Pads string on the left and right sides if it is shorter than length', function() {
            var pad = string.pad;
            equal(pad(null, 5), '     ');
            equal(pad('a', 5), '  a  ');
            equal(pad('ab', 5), '  ab ');
            equal(pad('a', 5, '0'), '00a00');
            equal(pad('abcde', 3), 'abcde');
        });
    });
    describe('#padLeft()', function() {
        it('Pads string on the left side if it is shorter than length', function() {
            var padLeft = string.padLeft;
            equal(padLeft(null, 5), '     ');
            equal(padLeft('a', 5), '    a');
            equal(padLeft('ab', 5), '   ab');
            equal(padLeft('a', 5, '0'), '0000a');
            equal(padLeft('abcde', 3), 'abcde');
        });
    });
    describe('#padRight()', function() {
        it('Pads string on the right side if it is shorter than length', function() {
            var padRight = string.padRight;
            equal(padRight(null, 5), '     ');
            equal(padRight('a', 5), 'a    ');
            equal(padRight('ab', 5), 'ab   ');
            equal(padRight('a', 5, '0'), 'a0000');
            equal(padRight('abcde', 3), 'abcde');
        });
    });

    describe('#capitalize()', function() {
        it('Capitalizes the first character of string', function() {
            var capitalize = string.capitalize;
            equal(capitalize(null), '');
            equal(capitalize('abcba'), 'Abcba');
            equal(capitalize('ab ba'), 'Ab ba');
            equal(capitalize('ABCBA'), 'ABCBA');
        });
    });
    describe('#decapitalize()', function() {
        it('Decapitalizes the first character of string', function() {
            var decapitalize = string.decapitalize;
            equal(decapitalize(null), '');
            equal(decapitalize('Abcba'), 'abcba');
            equal(decapitalize('ab ba'), 'ab ba');
            equal(decapitalize('ABCBA'), 'aBCBA');
        });
    });
    describe('#camelize()', function() {
        it('Converts string to camel case', function() {
            var camelize = string.camelize;
            equal(camelize(null), '');
            equal(camelize('abcba'), 'abcba');
            equal(camelize('ABCBA'), 'abcba');
            equal(camelize('ab ba'), 'abBa');
            equal(camelize('ab ba', true), 'AbBa');
        });
    });
    describe('#dasherize()', function() {
        it('Converts string to dasherize case', function() {
            var dasherize = string.dasherize;
            equal(dasherize(null), '');
            equal(dasherize('Abcba'), 'abcba');
            equal(dasherize('ABCBA'), 'a-b-c-b-a');
            equal(dasherize('ab ba'), 'ab-ba');
            equal(dasherize('ab BA'), 'ab-b-a');
            equal(dasherize(' a b '), 'a-b');
        });
    });
    describe('#classify()', function() {
        it('Converts string to classify case', function() {
            var classify = string.classify;
            equal(classify(null), '');
            equal(classify(''), '');
            equal(classify('some_class_name'), 'SomeClassName');
            equal(classify('my wonderfull class_name'), 'MyWonderfullClassName');
            equal(classify('my wonderfull.class.name'), 'MyWonderfullClassName');
            equal(classify('myLittleCamel'), 'MyLittleCamel');
            equal(classify('myLittleCamel.class.name'), 'MyLittleCamelClassName');
            equal(classify(123), '123');
        });
    });

    describe('#addStart()', function() {
        it('Adds a substring only if it is at the begining of a source string', function() {
            var addStart = string.addStart;
            equal(addStart(null, null), '');
            equal(addStart('', 'abc'), 'abc');
            equal(addStart('domain.com', 'www.'), 'www.domain.com');
            equal(addStart('www.domain.com', 'www.'), 'www.domain.com');
            equal(addStart('abc', null), 'abc');
        });
    });
    describe('#addEnd()', function() {
        it('Adds a substring only if it is at the ending of a source string', function() {
            var addEnd = string.addEnd;
            equal(addEnd(null, null), '');
            equal(addEnd('', 'abc'), 'abc');
            equal(addEnd('www.domain', '.com'), 'www.domain.com');
            equal(addEnd('www.domain.com', '.com'), 'www.domain.com');
            equal(addEnd('abc', null), 'abc');
        });
    });
    describe('#removeStart()', function() {
        it('Removes a substring only if it is at the begining of a source string', function() {
            var removeStart = string.removeStart;
            equal(removeStart(null, null), '');
            equal(removeStart('', 'abc'), '');
            equal(removeStart('www.domain.com', 'www.'), 'domain.com');
            equal(removeStart('domain.com', 'www.'), 'domain.com');
            equal(removeStart('abc', null), 'abc');
        });
    });
    describe('#removeEnd()', function() {
        it('Removes a substring only if it is at the ending of a source string', function() {
            var removeEnd = string.removeEnd;
            equal(removeEnd(null, null), '');
            equal(removeEnd('', 'abc'), '');
            equal(removeEnd('www.domain.com', '.com'), 'www.domain');
            equal(removeEnd('www.domain', '.com'), 'www.domain');
            equal(removeEnd('abc', null), 'abc');
        });
    });
    describe('#removeChars()', function() {
        it('Removes all occurrences of a character from within the source string', function() {
            var removeChars = string.removeChars;
            equal(removeChars(null, ''), '');
            equal(removeChars('abcba', ''), 'abcba');
            equal(removeChars('abcba', 'a'), 'bcb');
            equal(removeChars('abcba', 'd'), 'abcba');
            equal(removeChars('abcba', 'ab'), 'c');
        });
    });

    describe('#toCharArray()', function() {
        it('Converts this string to a new character array', function() {
            var toCharArray = string.toCharArray;
            deepEqual(toCharArray(null), []);
            deepEqual(toCharArray(''), []);
            deepEqual(toCharArray('a'), ['a']);
            deepEqual(toCharArray('abc'), ['a', 'b', 'c']);
        });
    });
    describe('#lines()', function() {
        it('Splits this string to line', function() {
            var lines = string.lines;
            deepEqual(lines(null), []);
            deepEqual(lines(''), []);
            deepEqual(lines('00'), ['00']);
            deepEqual(lines('00\n11\r22\r\n33'), ['00', '11', '22', '33']);
        });
    });
    describe('#truncate()', function() {
        it('Truncates this string with fixed width', function() {
            var truncate = string.truncate;
            equal(truncate(null, 5), '');
            equal(truncate('hello', 5), 'hello');
            equal(truncate('hello world', 5), 'hello...');
            equal(truncate('hello world', 5, '>>'), 'hello>>');
        });
    });
    describe('#slugify()', function() {
        it('Slugifies this string', function() {
            var slugify = string.slugify;
            equal(slugify(null), '');
            equal(slugify(''), '');
            equal(slugify('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/'),
                'jack-jill-like-numbers-1-2-3-and-4-and-silly-characters');
            equal(slugify('Un éléphant à l\'orée du bois'), 'un-elephant-a-l-oree-du-bois');
            equal(slugify('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț'),
                'i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
            equal(slugify('I am a word too, even though I am but a single letter: i!'),
                'i-am-a-word-too-even-though-i-am-but-a-single-letter-i');
            equal(slugify('Some asian 天地人 characters'), 'some-asian-characters');
        });
    });
    describe('#repeat()', function() {
        it('Repeats the given string n times', function() {
            var repeat = string.repeat;
            equal(repeat(null, 2), '');
            equal(repeat('a', 2), 'aa');
            equal(repeat('ab', 2), 'abab');
            equal(repeat('ab', -2), '');
            equal(repeat('ab', 2, ','), 'ab,ab');
        });
    });

    describe('#interpolate()', function() {
        it('Interpolates string', function() {
            var interpolate = string.interpolate;
            equal(interpolate(null, null), '');
            equal(interpolate('a', null), 'a');
            equal(interpolate('a={{a}}', null), 'a=');
            equal(interpolate('a={{a}}', {
                a: 123
            }), 'a=123');
            equal(interpolate('{a}', {
                a: 123
            }, interpolate.SIMPLE_SYNTAX), '123');
            equal(interpolate('<% a %>', {
                a: 123
            }, interpolate.SCRIPT_SYNTAX), '123');
            equal(interpolate('/user/:id/addresses', {
                id: 123
            }, interpolate.NAMED_PARAM_SYNTAX), '/user/123/addresses');
        });
    });
    describe('#template()', function() {
        it('Replace string using template', function() {
            var template = string.template;
            equal(template(null, null), '');
            equal(template('a', null), 'a');
            equal(template('a={{1+2*3}}', null), 'a=7');
            equal(template('a={{a.length}}', {
                a: '000'
            }), 'a=3');
            equal(template('<% a + 1 %>', {
                a: 123
            }, template.syntax('<%', '%>')), '124');

            var compiled = template.compile('a={{a+1}}');
            equal(compiled({
                a: 1
            }), 'a=2');
            equal(compiled({
                a: 1
            }), 'a=2');
        });
    });

    describe('#escapeHTML()', function() {
        it('Escapes the characters in a String using HTML entities', function() {
            var escapeHTML = string.escapeHTML;
            equal(escapeHTML(null), '');
            equal(escapeHTML(''), '');
            equal(escapeHTML('abc'), 'abc');
            equal(escapeHTML('<a & b>'), '&lt;a&nbsp;&amp;&nbsp;b&gt;');
            equal(escapeHTML('0"1\'2'), '0&quot;1&apos;2');
        });
    });
    describe('#unescapeHTML()', function() {
        it('Unescapes a string containing entity escapes to a string', function() {
            var unescapeHTML = string.unescapeHTML;
            equal(unescapeHTML(null), '');
            equal(unescapeHTML(''), '');
            equal(unescapeHTML('abc'), 'abc');
            equal(unescapeHTML('&lt;a&nbsp;&amp;&nbsp;b&gt;'), '<a & b>');
            equal(unescapeHTML('0&quot;1&apos;2'), '0"1\'2');
            equal(unescapeHTML('&#34;'), '"');
        });
    });
});

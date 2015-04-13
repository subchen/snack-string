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
});

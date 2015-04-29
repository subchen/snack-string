[![Build Status](https://travis-ci.org/subchen/snack-string.svg?branch=master)](https://travis-ci.org/subchen/snack-string)
[![Code Coverage](https://img.shields.io/coveralls/subchen/snack-string/master.svg)](https://coveralls.io/r/subchen/snack-string?branch=master)
[![NPM Repo](https://img.shields.io/npm/v/snack-string.svg)](https://www.npmjs.com/package/snack-string)
[![License](http://img.shields.io/badge/License-Apache_2-red.svg?style=flat)](http://www.apache.org/licenses/LICENSE-2.0)

**SNACK-STRING** is javscript string manipulation extensions
that can be used in the browser or on node.js


# Install by npm

```shell
npm install snack-string
```

# Example

```js
var ss = require('snack-string');

console.log(ss.startsWith('abc', 'a'));
```

# APIs

* addEnd
* addStart
* after
* afterLast
* before
* beforeLast
* between
* camelize
* capitalize
* classify
* contains
* dasherize
* decapitalize
* endsWith
* escapeHTML
* hashCode
* interpolate
* isBlank
* isEmpty
* lines
* pad
* padLeft
* padRight
* removeChars
* removeEnd
* removeStart
* repeat
* slugify
* startsWith
* toCharArray
* toString
* template
* truncate
* unescapeHTML


# License

Released under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0).

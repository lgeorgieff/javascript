// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/10/2015
// Description: Illustrate the usage of the new string methods defined in ES6.
// ====================================================================================================================

// ====================================================================================================================
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation, either version 3 of the License, or any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
// details.
//
// You should have received a copy of the GNU General Public License along with this program.
// If not, see http://www.gnu.org/licenses/.
// ====================================================================================================================

'use strict';

let assert = require('assert');

// Check the startsWith method.
assert('Hello World!'.startsWith(''));
assert('Hello World!'.startsWith('Hello'));
assert(!'Hello World!'.startsWith('h'));
assert('Hello World!'.startsWith('', 0));
assert('Hello World!'.startsWith('Hello', 0));
assert(!'Hello World!'.startsWith('h', 0));
assert('Hello World!'.startsWith('', 2));
assert(!'Hello World!'.startsWith('Hello', 3));
assert(!'Hello World!'.startsWith('h', 99));
assert('Hello World!'.startsWith(' World', 5));

// Check the endsWith method.
assert('Hello World!'.endsWith(''));
assert('Hello World!'.endsWith('World!'));
assert(!'Hello World!'.endsWith('d'));
assert('Hello World!'.endsWith('', 12));
assert('Hello World!'.endsWith('World!', 12));
assert(!'Hello World!'.endsWith('d', 12));
assert('Hello World!'.endsWith('', 8));
assert(!'Hello World!'.endsWith(' Wor', 11));
assert(!'Hello World!'.endsWith('d', 99));
assert('Hello World!'.endsWith(' Wor', 9));

// Check the repeat method.
assert.strictEqual('Hello World!'.repeat(0), '');
assert.throws(function () {
    'Hello World!'.repeat(-2);
}, Error);
assert.strictEqual('Hello World!'.repeat(1), 'Hello World!');
assert.strictEqual('Hello World!'.repeat(3), 'Hello World!Hello World!Hello World!');

// Check the includes method.
assert(!'Hello World'.includes('  '));
assert('Hello World'.includes(' '));
assert('Hello World'.includes(' ', 0));
assert('Hello World'.includes(' ', 5));
assert(!'Hello World'.includes(' ', 6));
assert(!'Hello World'.includes(' ', 99));
assert('Hello World'.includes('Hello', 0));
assert('Hello World'.includes('ello ', 1));
assert(!'Hello World'.includes('ello ', 2));

// Check the static method fromCodePoint.
assert.strictEqual(String.fromCodePoint(63), '?');
assert.strictEqual(String.fromCodePoint(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33), 'Hello World!');
assert.strictEqual(String.fromCodePoint(0x2F804), '你');
assert.throws(function () {
    String.fromCodePoint('?');
}, RangeError);

// Check the codePointAt method.
let charPoints = [];
for(let c of 'Hello World!') charPoints.push(c.codePointAt(0));
assert.deepEqual(charPoints, [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);

// Check the unicode point literal notation.
assert.strictEqual('\u{2F804}', '你');

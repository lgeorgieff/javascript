// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/02/2015
// Description: Illustrate the ES6 feature "WeakMap".
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

/**
 * A WeakMap instance used for illustrating the WeakMap functionality.
 *
 * In contrast to a Map instance a WeakMap instance uses only weak references to its key values. This causes a key
 * value to be garbage collected if no other strong reference to the key value exists, i.e. the element including the
 * value is removed from the WeakMap. As a side effect it is not possible to use simple type as keys within a WeakMap.
 *
 * @type {WeakMap<*, *>}
 */
let testMap = new WeakMap();

// Simple types are not allowed as key values within WeakMaps.
assert.throws(function () { testMap.set(1, '1'); }, TypeError);
assert.throws(function () { testMap.set('2', 2); }, TypeError);
assert.throws(function () { testMap.set(NaN, ''); }, TypeError);

// A key requires a string reference to no being garbage collected when used in a WeakMap
let key1 = {value: 1};
assert.deepEqual(testMap.set(key1, 1), testMap);
assert(testMap.has(key1));
assert.strictEqual(testMap.get(key1), 1);
let key2 = {value: '2'};
testMap.set(key2, '2');
assert(testMap.has(key2));
assert.strictEqual(testMap.get(key2), '2');
// If no string reference is used to an object used as a key, it will be removed by the garbage collector.
testMap.set(new String('abc'), NaN);
// For the get() and has() method a reference comparison is used, i.e. by passing an equal value will not lead to the
// expected result. Indeed in this case the object could already be garbage collected, since no string reference for
// this key exists.
assert(!testMap.delete(new String('abc')));
// The delete() method allows to remove entries from the WeakMap if a strong reference to the key value exists.
assert(testMap.delete(key1));
assert(!testMap.has(key1));
assert(testMap.has(key2));

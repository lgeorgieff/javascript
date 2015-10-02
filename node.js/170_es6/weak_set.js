// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/02/2015
// Description: Illustrate the ES6 feature "WeakSet".
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
 * A WeakSet instance used for illustrating the WeakSet functionality.
 *
 * In contrast to a Set instance a WeakSet instance uses only weak references to its values. This causes a value to be
 * garbage collected if no other strong reference to this value exists, i.e. the element is removed from the WeakSet.
 * As a side effect it is not possible to use simple type values within a WeakSet.
 *
 * @type {WeakSet<*, *>}
 */
let testSet = new WeakSet();

// Simple types are not allowed as values within WeakSets.
assert.throws(function () { testSet.add(1); }, TypeError);
assert.throws(function () { testSet.add('2'); }, TypeError);
assert.throws(function () { testSet.add(NaN); }, TypeError);

// A key requires a strong reference to not being garbage collected when used in a WeakSet.
let value1 = {value: 1};
assert.deepEqual(testSet.add(value1), testSet);
assert(testSet.has(value1));
let value2 = {value: '2'};
testSet.add(value2);
assert(testSet.has(value2));
// If no strong reference is used to an object used as a value within a WeakSet, it will be removed by the garbage
// collector.
testSet.add(new String('abc'));
// For the has() method a reference comparison is used, i.e. passing an equal value will not lead to the expected
// result. Indeed in this case the object could already be garbage collected, since no strong reference to this value
// exists.
assert(!testSet.delete(new String('abc')));
// The delete() method allows to remove entries from the WeakSet if a strong reference to the key value exists.
assert(testSet.delete(value1));
assert(!testSet.has(value1));
assert(testSet.has(value2));

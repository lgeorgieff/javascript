// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/02/2015
// Description: Illustrate the ES6 feature "Set".
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
 * A Set instance used for illustrating the Set functionality.
 *
 * @type {Set<*>}
 */
let testSet = new Set();
// Instead of the property length a Set instance uses the property size to get number of entries.
assert.strictEqual(testSet.size, 0);
// The add() method is chainable
assert.strictEqual(testSet.add(0), testSet);
assert.strictEqual(testSet.size, 1);
assert(testSet.has(0));
testSet.add(-2);
assert.strictEqual(testSet.size, 2);
assert(testSet.has(-2));
testSet.add(1);
assert.strictEqual(testSet.size, 3);
assert(testSet.has(1));
// Calling add() on a value that already exists overwrites the value in the existing entry.
testSet.add(-2);
assert.strictEqual(testSet.size, 3);

// Remove all entries.
testSet.clear();
assert.strictEqual(testSet.size, 0);
testSet.add('0');
// The keys need not to be of the same type - the values can be also from different types.
let key2 = {value: '2'};
testSet.add(key2);
let key3 = {value: '3'};
testSet.add(key3);
testSet.add('1');
testSet.add( -1);
assert.strictEqual(testSet.size, 5);

// The method has() indicates whether a value exists in the set or not.
// The method has() and add() identify the keys in case of objects by the reference not by the value.
assert(testSet.has(key3));
assert(!testSet.has({value: '3'}));
assert(testSet.has(-1));
assert(testSet.has('1'));
let key3_2 = {value: '3'};
testSet.add(key3_2);
assert.strictEqual(testSet.size, 6);
assert(testSet.has(key3));
assert(testSet.has(key3_2));

// The method delete() removes an entry from the set.
assert(!testSet.delete(123));
assert.strictEqual(testSet.size, 6);
assert(testSet.delete(key2));
assert.strictEqual(testSet.size, 5);
assert(!testSet.delete(key2));
assert.strictEqual(testSet.size, 5);
assert(testSet.delete('1'));
assert.strictEqual(testSet.size, 4);

// With the method forEach it is possible to iterate over all entries of the set.
// The signature of the function passed to forEach is <element value> <element value> <set>. This is due to the
// compatibility of the forEach function from the Map class.

var accumulatedKeys = 0;
var accumulatedValues = 0;
testSet.forEach((value1, value2, set) => {
    let key = value1;
    let value = value2;
    if (typeof value1 === 'object') key = value1.value;
    if (typeof value2 === 'object') value = value2.value;
    accumulatedKeys += parseInt(key);
    accumulatedValues += parseInt(value);
    assert.strictEqual(testSet, testSet);
});
assert.strictEqual(accumulatedKeys, 5);
assert.strictEqual(accumulatedKeys, accumulatedValues);

// Get an iterator for all keys. This method exists only for compatibility reasons with Map.
// The actual values returned are the set's values.
let keysIterator = testSet.keys();
assert.deepEqual(keysIterator.next(), {value: '0', done: false});
assert.deepEqual(keysIterator.next(), {value: {value: '3'}, done: false});
assert.deepEqual(keysIterator.next(), {value: '-1', done: false});
assert.deepEqual(keysIterator.next(), {value: {value: '3'}, done: false});
assert.deepEqual(keysIterator.next(), {value: undefined, done: true});

// Get an iterator for all values.
let valuesIterator = testSet.values();
assert.deepEqual(valuesIterator.next(), {value: '0', done: false});
assert.deepEqual(valuesIterator.next(), {value: {value: '3'}, done: false});
assert.deepEqual(valuesIterator.next(), {value: '-1', done: false});
assert.deepEqual(valuesIterator.next(), {value: {value: '3'}, done: false});
assert.deepEqual(valuesIterator.next(), {value: undefined, done: true});

// Get an iterator for all entries.
let entriesIterator = testSet.entries();
assert.deepEqual(entriesIterator.next(), {value: ['0', '0'], done: false});
assert.deepEqual(entriesIterator.next(), {value: [{value: '3'}, {value: '3'}], done: false});
assert.deepEqual(entriesIterator.next(), {value: ['-1', '-1'], done: false});
assert.deepEqual(entriesIterator.next(), {value: [{value: '3'}, {value: '3'}], done: false});
assert.deepEqual(entriesIterator.next(), {value: undefined, done: true});

// In contrast to the normal semantics (i.e. NaN === NaN || NaN == NaN is always false) the type Map handles NaN in the
// methods has() and get() as equal if a key is existing with the value NaN.
testSet.add(NaN);
assert.strictEqual(testSet.size, 5);
assert(testSet.has(NaN));

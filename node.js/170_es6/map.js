// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 09/30/2015
// Description: Illustrate the ES6 feature "Map".
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
 * A Map instance used for illustrating the Map functionality.
 *
 * @type {Map<*, *>}
 */
let stringNumberMap = new Map();
// Instead of the property length a Map instance uses the property size to get number of entries.
assert.strictEqual(stringNumberMap.size, 0);
stringNumberMap.set('0', 0);
assert.strictEqual(stringNumberMap.size, 1);
assert.strictEqual(stringNumberMap.get('0'), 0);
stringNumberMap.set('2', -2);
assert.strictEqual(stringNumberMap.size, 2);
assert.strictEqual(stringNumberMap.get('2'), -2);
stringNumberMap.set('1', 1);
assert.strictEqual(stringNumberMap.size, 3);
assert.strictEqual(stringNumberMap.get('1'), 1);
stringNumberMap.set('2', 2);
assert.strictEqual(stringNumberMap.size, 3);
// Calling set() on a key that already exists overwrites the value in the existing entry.
assert.strictEqual(stringNumberMap.get('2'), 2);
// Calling get() on a key that does not exist yet returns undefined.
assert.strictEqual(stringNumberMap.get('123'), undefined);

// Remove all entries.
stringNumberMap.clear();
assert.strictEqual(stringNumberMap.size, 0);
stringNumberMap.set('0', 0);
// The keys need not to be of the same type.
// The values can be also from different types.
let key2 = {value: '2'};
stringNumberMap.set(key2, 2);
let key3 = {value: '3'};
stringNumberMap.set(key3, 3);
stringNumberMap.set('1', 1);
stringNumberMap.set('-1', -1);
assert.strictEqual(stringNumberMap.size, 5);

// The method has() indicates whether a key exists or not.
assert(stringNumberMap.has(key2));
// The methods has() and get() identify the keys in case of objects by their references not by their values.
assert(!stringNumberMap.has({value: '2'}));
assert(stringNumberMap.has('1'));

// The method get() returns the value of the entry identified by the corresponding key.
assert.strictEqual(stringNumberMap.get(key2), 2);
assert.strictEqual(stringNumberMap.get({value: '2'}), undefined);
assert.strictEqual(stringNumberMap.get('1'), 1);

// The method delete() removes an entry identified by the corresponding key.
assert(!stringNumberMap.delete({value: '2'}));
assert.strictEqual(stringNumberMap.size, 5);
assert(stringNumberMap.delete(key2));
assert.strictEqual(stringNumberMap.size, 4);
assert(!stringNumberMap.delete(key2));
assert.strictEqual(stringNumberMap.size, 4);
assert(stringNumberMap.delete('-1'));
assert.strictEqual(stringNumberMap.size, 3);

let accumulatedKeys = '';
let accumulatedValues = 0;
// with the method forEach it is possible to iterate over all entries.
stringNumberMap.forEach((value, key, map) => {
    if (typeof key === 'object') map.set(key, value += 123);
});

assert.strictEqual(stringNumberMap.size, 3);
assert.strictEqual(stringNumberMap.get(key3), 126);

// Get an iterator for all keys.
let keysIterator = stringNumberMap.keys();
assert.deepEqual(keysIterator.next(), {value: '0', done: false});
assert.deepEqual(keysIterator.next(), {value: {value: '3'}, done: false});
assert.deepEqual(keysIterator.next(), {value: '1', done: false});
assert.deepEqual(keysIterator.next(), {value: undefined, done: true});

// Get an iterator for all values.
let valuesIterator = stringNumberMap.values();
assert.deepEqual(valuesIterator.next(), {value: 0, done: false});
assert.deepEqual(valuesIterator.next(), {value: 126, done: false});
assert.deepEqual(valuesIterator.next(), {value: 1, done: false});
assert.deepEqual(valuesIterator.next(), {value: undefined, done: true});

// Get an iterator for all entries.
let entriesIterator = stringNumberMap.entries();
assert.deepEqual(entriesIterator.next(), {value: ['0', 0], done: false});
assert.deepEqual(entriesIterator.next(), {value: [{value: '3'}, 126], done: false});
assert.deepEqual(entriesIterator.next(), {value: ['1', 1], done: false});
assert.deepEqual(entriesIterator.next(), {value: undefined, done: true});

// In contrast to the normal semantics (i.e. NaN === NaN || NaN == NaN is always false) the type Map handles NaN in the
// methods has() and get() as equal if a key is existing with the value NaN.
stringNumberMap.set(NaN, '...');
assert.strictEqual(stringNumberMap.size, 4);
assert.strictEqual(stringNumberMap.get(NaN), '...');
assert(stringNumberMap.has(NaN));

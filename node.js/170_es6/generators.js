// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/04/2015
// Description: Illustrate the ES6 feature "generator functions".
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
 * A generator functions that generates an infinte list of positive integers starting by 0.
 *
 * @return {object} An iterator object that in turn points to numbers
 * @param {boolean=} even If set to true only even numbers are generated. Default value is false.
 */
function* INFINITE_NUMBER_LIST(even) {
    if (even) {
        // With yield* it is possible to forward/return other generator functions.
        yield* INFINITE_EVEN_NUMBER_LIST();
    } else {
        let counter = 0;
        while (true) yield counter++;
    }
}

/**
 * A generator functions that generates an infinte list of even, positive integers starting by 0.
 *
 * @return {object} An iterator object that in turn points to numbers
 */
function* INFINITE_EVEN_NUMBER_LIST() {
    let counter = 0;
    while (true) {
        let result = counter;
        counter += 2;
        yield result;
    }
}

/**
 * The iterator for an infinitive interger list.
 *
 * @type {object} 
 */
let numbers1 = INFINITE_NUMBER_LIST();
/**
 * The iterator for an infinitive interger list.
 *
 * @type {object} 
 */
let numbers2 = INFINITE_NUMBER_LIST();
/**
 * The iterator for an infinitive interger list of only even numbers.
 *
 * @type {object} 
 */
let evenNumbers = INFINITE_NUMBER_LIST(true);

assert.deepEqual(numbers1, {});
assert.deepEqual(numbers2, {});
assert.deepEqual(evenNumbers, {});

assert.deepEqual(numbers1.next(), {value: 0, done: false});
// Every generator instance has its own context, i.e. numbers1 and numbers2 don't collide.
assert.deepEqual(numbers2.next(), {value: 0, done: false});
assert.deepEqual(evenNumbers.next(), {value: 0, done: false});
// Every generator function stores its context, i.e. calling next step-by-step will store the internal state of
// counter in the generator function itself.
assert.deepEqual(numbers1.next(), {value: 1, done: false});
assert.deepEqual(numbers1.next(), {value: 2, done: false});
assert.deepEqual(numbers1.next(), {value: 3, done: false});
assert.deepEqual(numbers2.next(), {value: 1, done: false});
assert.deepEqual(numbers2.next(), {value: 2, done: false});
assert.deepEqual(numbers2.next(), {value: 3, done: false});
assert.deepEqual(evenNumbers.next(), {value: 2, done: false});
assert.deepEqual(evenNumbers.next(), {value: 4, done: false});
assert.deepEqual(evenNumbers.next(), {value: 6, done: false});

let currentCounter = 3;
for(let n of numbers1) {
    assert.strictEqual(n, ++currentCounter);
    if (currentCounter === 100) break;
}

currentCounter = 3;
for(let n of numbers2) {
    assert.strictEqual(n, ++currentCounter);
    if (currentCounter === 100) break;
}

currentCounter = 6;
for(let n of evenNumbers) {
    currentCounter += 2
    assert.strictEqual(n, currentCounter);
    if (currentCounter === 100) break;
}


/**
 * A generator function which only fowards other generator functions from iterable containers. Indeed when passing pure
 * generator function instead of an iterable this example works as well.
 *
 * @param {object} g Anything that is iterable.
 */
function* yieldContainer (g) {
    // With yield* it is possible to forward/return other generator functions from contianers which implement the
    // iterable API.
    yield* g;
}

let HELLO_WORLD = 'Hello World!';
let currentPosition = 0;
for(let c of yieldContainer(HELLO_WORLD)) {
    assert.strictEqual(HELLO_WORLD.charAt(currentPosition++), c);
}
assert.strictEqual(currentPosition, HELLO_WORLD.length);

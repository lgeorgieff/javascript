// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/10/2015
// Description: Illustrate the ES6 feature "spread operator".
// cmd: node --es-staging spread_operator.js
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
 * Concate all passed strings to a single string value.
 *
 * @returns {string} The concatenated string based on <tt>args</tt>.
 *
 * @param {...string} args All strings that will be concatenated.
 */
function concatenateStrings (...args) {
    let result = '';
    for(let str of args) result += str;
    return result;
}
assert.strictEqual(concatenateStrings('He', 'llo W', 'orl' , '', 'd!'), 'Hello World!');


let a = 1;
let b = 2;
let c = [3, 4, 5, 'Hello', ' ', 'World!', 6];
let d = 7;
/**
 * An array containing all values from a, b, c, d as flat structure by using the sprad operator.
 *
 * @type {Array<number|string>}
 */
let all = [a, b, ...c, d];
assert.deepEqual(all, [1, 2, 3, 4, 5, 'Hello', ' ', 'World!', 6, 7]);


/**
 * Adds the passed numbers and returns the result.
 *
 * @return {number} The result of <tt>arg1 + arg2</tt>.
 *
 * @param {!number} arg1 Any number.
 * @param {!number} arg2 Any number.
 */
function add (arg1, arg2) {
    return arg1 + arg2;
}
// The method Function.apply is not needed anymore, since the spread operator can be used when invoking a function
// with all its argument contained in a single array.
assert.strictEqual(add(...[3, 5]), 8);

let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [0, 2, 4, 6, 8];
let allNumbers = [];

allNumbers.push(...oddNumbers);
allNumbers.push(...evenNumbers);
assert.deepEqual(allNumbers, [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]);

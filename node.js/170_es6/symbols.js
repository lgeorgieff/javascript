// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/04/2015
// Description: Illustrate the ES6 feature "Symbol".
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
 * A symbol without a description.
 *
 * @type {symbol}
 */
let symbolA = Symbol();
/**
 * A symbol with the description 'B'.
 *
 * @type {symbol}
 */
let symbolB = Symbol('B');
/**
 * A symbol with the description 'c'.
 *
 * @type {symbol}
 */
let symbolC = Symbol('c');

assert(symbolA);
assert(symbolB);
assert(symbolC);

// symbolB === symbolB is true
assert.strictEqual(symbolB, symbolB);
// Every created symbol is a different and unique object, i.e. Symbol('a') !== Symbol('a').
assert.notStrictEqual(Symbol('a'), Symbol('a'));
// It is not allowed to call Symbol with the new operator.
assert.throws(function () { new Symbol('a'); }, TypeError);
assert.strictEqual(typeof symbolA, 'symbol');

// ES6 defiens several standard symbols, e.g. Symbol.iterator.
let symbolIter = Symbol.iterator;
let symbolAdd = Symbol('add');
function Container () {}
Container[symbolIter] = function (){}
Container[symbolAdd] = function (){}

// Get all symbols of an object.
let symbols = Object.getOwnPropertySymbols(Container);
assert.strictEqual(symbols.length, 2);
assert.strictEqual(symbols[0], symbolIter);
assert.strictEqual(symbols[1], symbolAdd);

// Symbol.for searches for a globally defined symbol. It a symbol with the given description exists, it is returned. If no such symbols exists, it is created.
let symbolD1 = Symbol.for('D');
let symbolD2 = Symbol.for('D');

// symbolD1 and symbolD2 are the same object, i.e. symbolD1 === symbolD2.
assert.strictEqual(symbolD1, symbolD2);

// Get the description of an existing symbol.
assert.strictEqual(Symbol.keyFor(symbolD1), 'D');

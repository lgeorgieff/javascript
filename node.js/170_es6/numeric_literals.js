// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/04/2015
// Description: Illustrate numeric literals in ES6.
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

var assert = require('assert');

// === Binary numbers
assert.strictEqual(0b11, 3);
assert.strictEqual(0b0011, 3);
assert.strictEqual(0B1101, 13);
assert.strictEqual(-0B1101, -13);
assert.strictEqual(+0B1101, +13);

// === Octal numbers
assert.strictEqual(011, 9);
assert.strictEqual(077, 63);
assert.strictEqual(-077, -63);
assert.strictEqual(+077, +63);
// If a numeric literal starts with 0 but is followed by a number > 7, it is treateds as a decimal number.
assert.strictEqual(-081, -81);

// === Hexadecimal numbers
assert.strictEqual(0XFF, 255);
assert.strictEqual(-0XFF, -255);
assert.strictEqual(+0XFF, +255);
assert.strictEqual(0x00000ABCDEF, 11259375);

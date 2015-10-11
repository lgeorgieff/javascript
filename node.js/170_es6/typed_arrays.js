// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/11/2015
// Description: Illustrate the usage of typed arrays in ES6.
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

// Request a byte buffer of 16 bytes in memory. It is initialized with zeros.
let buffer = new ArrayBuffer(16);
assert.strictEqual(buffer.byteLength, 16);

// Create a view on the requested byte buffer. This view is represented by Int8 values.
let int8View = new Int8Array(buffer);
assert.strictEqual(int8View.length, 16);
assert.deepEqual(int8View, {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0});

// Create a second view on the requested byte buffer. This view is represented by Int32 values.
let int32View = new Int32Array(buffer);
assert.strictEqual(int32View.length, 4);
assert.deepEqual(int32View, {'0': 0, '1': 0, '2': 0, '3': 0});

// Write some values into the requested buffer by using the Int32 view. All other views refering to the same buffer
// are updated as well.
for (let i = 0; i !== buffer.byteLength; ++i) int32View[i] = i * 2;

assert.deepEqual(int8View, {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 2,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 4,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 6,
    '13': 0,
    '14': 0,
    '15': 0});

assert.deepEqual(int32View, {'0': 0, '1': 2, '2': 4, '3': 6});

assert.deepEqual(Array.from(int8View), [0, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0]);
assert.deepEqual(Array.from(int32View), [0, 2, 4, 6]);

// Create a third view for the requested buffer. It uses an offset of 2 bytes and a length of 4 bytes.
let int8View4Byte = new Int8Array(buffer, 2, 4);
assert.strictEqual(int8View4Byte.length, 4);
assert.deepEqual(int8View4Byte, {'0': 0, '1': 0, '2': 2, '3': 0});
assert.deepEqual(Array.from(int8View4Byte), [0, 0, 2, 0]);

// Create a generic data view refering to the requested byte buffer.
let dataView = new DataView(buffer);
// Set the Int8 value on the index 4.
assert.strictEqual(dataView.getInt8(4), 2);
// Set the Int8 value to 3 on the index 0.
dataView.setInt8(0, 3);

assert.deepEqual(int8View, {
    '0': 3,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 2,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 4,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 6,
    '13': 0,
    '14': 0,
    '15': 0});

assert.deepEqual(int32View, {'0': 3, '1': 2, '2': 4, '3': 6});

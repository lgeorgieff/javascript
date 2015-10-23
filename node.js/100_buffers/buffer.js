// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/24/2015
// Description: Illustrates the usage of buffer in a node.js environment.
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

// Check if the given encoding id is a valid encoding identifier.
assert(Buffer.isEncoding('utf8'));
assert(Buffer.isEncoding('ascii'));
assert(Buffer.isEncoding('hex'));
assert(!Buffer.isEncoding('bla bla bla'));

// Check if the passed object is a Buffer instance.
assert(!Buffer.isBuffer('Hello World!'));

// Check the byte length of a string
assert.strictEqual(Buffer.byteLength('s'), 1);
// Note the byte length is not always equal to the string length, i.e. characters that are not in teh ASCII range will
// have more than one byte.
assert.strictEqual(Buffer.byteLength('ß'), 2);

// Create an empty buffer with the allcoated size of 32 bytes. The buffer size cannot be changed later.
let buffer1 = new Buffer(32);
assert(Buffer.isBuffer(buffer1));
assert.strictEqual(buffer1.byteLength, 32);
// The buffer is not initialized, i.e. to by sure that we have a clean state we need to set all the values (a better
// way to do this is to use the method fill()).
assert.strictEqual(buffer1.writeUIntBE(0x111111111111, 0, 6), 6);
assert.strictEqual(buffer1.writeUIntLE(0x111111111111, 6, 6), 12);
assert.strictEqual(buffer1.writeUIntLE(0x111111111111, 12, 6), 18);
assert.strictEqual(buffer1.writeUIntLE(0x111111111111, 18, 6), 24);
assert.strictEqual(buffer1.writeUIntLE(0x111111111111, 24, 6), 30);
assert.strictEqual(buffer1.writeUIntLE(0x1111, 30, 2), 32);
for (let pos = 0; pos !== buffer1.byteLength; ++pos) assert.strictEqual(buffer1[pos.toString()], 17);
assert.strictEqual(buffer1.readUIntLE(0, 6), 18764998447377);
assert.strictEqual(buffer1.writeUIntLE(0x000000000000, 0, 6), 6);
assert.strictEqual(buffer1.writeUIntLE(0x000000000000, 6, 6), 12);
assert.strictEqual(buffer1.writeUIntLE(0x000000000000, 12, 6), 18);
assert.strictEqual(buffer1.writeUIntLE(0x000000000000, 18, 6), 24);
assert.strictEqual(buffer1.writeUIntLE(0x000000000000, 24, 6), 30);
assert.strictEqual(buffer1.writeUIntLE(0x0000, 30, 2), 32);
for (let pos = 0; pos !== buffer1.byteLength; ++pos) assert.strictEqual(buffer1[pos.toString()], 0);
assert.strictEqual(buffer1.byteLength, 32);
assert.strictEqual(buffer1.length, 32);

let buffer2 = new Buffer(buffer1);
assert(Buffer.isBuffer(buffer2));
assert.strictEqual(buffer1.byteLength, buffer2.byteLength);
for (let pos = 0; pos !== buffer1.length; ++pos) assert.strictEqual(buffer1[pos.toString()], buffer2[pos.toString()]);

let buffer3 = new Buffer('Hello World!', 'utf8');
assert(Buffer.isBuffer(buffer3));
assert.strictEqual(buffer3.byteLength, 12);
assert.strictEqual(buffer3['0'], 72);
assert.strictEqual(buffer3['1'], 101);
assert.strictEqual(buffer3['2'], 108);
assert.strictEqual(buffer3['3'], 108);
assert.strictEqual(buffer3['4'], 111);
assert.strictEqual(buffer3['5'], 32);
assert.strictEqual(buffer3['6'], 87);
assert.strictEqual(buffer3['7'], 111);
assert.strictEqual(buffer3['8'], 114);
assert.strictEqual(buffer3['9'], 108);
assert.strictEqual(buffer3['10'], 100);
assert.strictEqual(buffer3['11'], 33);
assert.strictEqual(buffer3.toString(), 'Hello World!');
assert.deepEqual(buffer3.toJSON(), {
    type: 'Buffer',
    data: [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
});
// Equals compares the contents of two buffers.
assert(buffer3.equals(new Buffer('Hello World!', 'utf8')));
assert(!buffer3.equals(new Buffer('...', 'utf8')));

let buffer4 = new Buffer([0, 0, 1, 2, 3, 0, 255, 8]);
assert(Buffer.isBuffer(buffer4));
assert.strictEqual(buffer4.byteLength, 8);
assert.strictEqual(buffer4['0'], 0);
assert.strictEqual(buffer4['1'], 0);
assert.strictEqual(buffer4['2'], 1);
assert.strictEqual(buffer4['3'], 2);
assert.strictEqual(buffer4['4'], 3);
assert.strictEqual(buffer4['5'], 0);
assert.strictEqual(buffer4['6'], 255);
assert.strictEqual(buffer4['7'], 8);

let buffer5 = Buffer.concat([new Buffer([0, 1]), new Buffer([2, 3]), new Buffer([4])]);
assert(Buffer.isBuffer(buffer5));
assert.strictEqual(buffer5.byteLength, 5);
assert.strictEqual(buffer5['0'], 0);
assert.strictEqual(buffer5['1'], 1);
assert.strictEqual(buffer5['2'], 2);
assert.strictEqual(buffer5['3'], 3);
assert.strictEqual(buffer5['4'], 4);
// Compare returns -1 of the first buffer has a smaller value to the second buffer, 0 if both are equal and 1 if the
// second buffer has a smaller value than the first buffer.
assert.strictEqual(buffer5.compare(buffer5), 0);
assert.strictEqual(Buffer.compare(buffer5, buffer5), 0);
assert.strictEqual(buffer5.compare(buffer4), 1);
assert.strictEqual(Buffer.compare(buffer5, buffer4), 1);
assert.strictEqual(buffer4.compare(buffer5), -1);
assert.strictEqual(Buffer.compare(buffer4, buffer5), -1);

let buffer6 = new Buffer(2);
// Copy the content of one buffer to another buffer.
buffer5.copy(buffer6, 0, 2, 4);
assert(Buffer.isBuffer(buffer6));
assert.strictEqual(buffer6.byteLength, 2);
assert.strictEqual(buffer6['0'], 2);
assert.strictEqual(buffer6['1'], 3);

// Create a second buffer for a particular place in an already existing buffer.
// Note: the actual memory is the same for both buffers, i.e. if the values are changed in one buffer instance, they
// will also be changed in the other one.
let buffer7 = buffer5.slice(2, 4);
assert(Buffer.isBuffer(buffer7));
assert.strictEqual(buffer7.byteLength, 2);
assert.strictEqual(buffer7['0'], 2);
assert.strictEqual(buffer7['1'], 3);
buffer7.writeUIntLE(0x1111, 0, 2);
assert.strictEqual(buffer7['0'], 17);
assert.strictEqual(buffer7['1'], 17);

assert.strictEqual(buffer5['0'], 0);
assert.strictEqual(buffer5['1'], 1);
assert.strictEqual(buffer5['2'], 17);
assert.strictEqual(buffer5['3'], 17);
assert.strictEqual(buffer5['4'], 4);

// Fill the entire buffer with the value 2.
buffer5.fill(2);
assert(Buffer.isBuffer(buffer5));
assert.strictEqual(buffer5.byteLength, 5);
assert.strictEqual(buffer5['0'], 2);
assert.strictEqual(buffer5['1'], 2);
assert.strictEqual(buffer5['2'], 2);
assert.strictEqual(buffer5['3'], 2);
assert.strictEqual(buffer5['4'], 2);

// Get an iterator for all values of the buffer.
let valueIter = buffer5.values();
assert.deepEqual(valueIter.next(), {value: 2, done: false});
assert.deepEqual(valueIter.next(), {value: 2, done: false});
assert.deepEqual(valueIter.next(), {value: 2, done: false});
assert.deepEqual(valueIter.next(), {value: 2, done: false});
assert.deepEqual(valueIter.next(), {value: 2, done: false});
assert.deepEqual(valueIter.next(), {value: undefined, done: true});

// Get an iterator for all keys of the buffer.
let keyIter = buffer5.keys();
assert.deepEqual(keyIter.next(), {value: '0', done: false});
assert.deepEqual(keyIter.next(), {value: '1', done: false});
assert.deepEqual(keyIter.next(), {value: '2', done: false});
assert.deepEqual(keyIter.next(), {value: '3', done: false});
assert.deepEqual(keyIter.next(), {value: '4', done: false});
assert.deepEqual(keyIter.next(), {value: undefined, done: true});

// Get an iterator for all key-value-pairs of the buffer.
let entryIter = buffer5.entries();
assert.deepEqual(entryIter.next(), {value: [0, 2], done: false});
assert.deepEqual(entryIter.next(), {value: [1, 2], done: false});
assert.deepEqual(entryIter.next(), {value: [2, 2], done: false});
assert.deepEqual(entryIter.next(), {value: [3, 2], done: false});
assert.deepEqual(entryIter.next(), {value: [4, 2], done: false});
assert.deepEqual(entryIter.next(), {value: undefined, done: true});

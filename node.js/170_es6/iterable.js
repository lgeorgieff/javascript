// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/02/2015
// Description: Illustrate the ES6 feature "iterable objects" and "iterator objects".
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
 * Constructor function for the class <tt>MyIterable</tt>.
 *
 * @classdesc Illustrates how to implement an iterable API and a how to return an iterator object.
 */
function MyIterable () {
    /**
     * The internal container structure for the stored values.
     *
     * @private
     * @type {Array<*>}
     */
    this._container = [];
}

/**
 * Add a new item to the tail of this container.
 *
 * @return {number} The new size of the container.
 * @param {*} item The item to be added to this container.
 */
MyIterable.prototype.push = function (item) {
    return this._container.push(item);
}

/**
 * Remove the tail item from this container.
 *
 * @return {*} The removed item.
 */
MyIterable.prototype.pop = function () {
    return this._container.pop();
}

/**
 * A getter for requesting the size of this container.
 *
 * @readonly 
 * @type {number}
 */
Object.defineProperty(MyIterable.prototype, 'size', {
    get: function () {
        return this._container.length;
    }});

/**
 * Get an iterator for this container.
 *
 * @private
 *
 * @return {Object} The iterator for this container.
 */
MyIterable.prototype._iteratorImplObject = function () {
    let self = this;
    return {
        _pos: 0,
        next: function () {
            if (this._pos === self.size) return {value: undefined, done: true};
            return {value: self._container[this._pos++], done: false}
        },
    };
};

/**
 * Get an iterator for this container in form of a generator function.
 *
 * @private
 *
 * @return {Object} The iterator for this container.
 */
MyIterable.prototype._iteratorImplGenerator = function* () {
    for(let i = 0; i !== this._container.length; ++i) yield this._container[i];
};

let iterable  = new MyIterable();
assert.strictEqual(iterable.size, 0);
iterable.push(1);
assert.strictEqual(iterable.size, 1);
assert.strictEqual(iterable.push(3), 2);
iterable.pop();
assert.strictEqual(iterable.size, 1);
iterable.push(2);
iterable.push(3);
assert.strictEqual(iterable.size, 3);

/**
 * Set the actual function for requesting an iterator.
 *
 * @return {Object} An iterator for this container.
 */
MyIterable.prototype[Symbol.iterator] = function () {
    return this._iteratorImplGenerator();
};

// Use the iterator from the MyIterable container in a for-of-loop.
// This loop iterates over all pushed values by using the iterator API.
let checkContainer = [];
for (let item of iterable) checkContainer.push(item);
assert.strictEqual(checkContainer.length, 3);
assert.strictEqual(checkContainer[0], 1);
assert.strictEqual(checkContainer[1], 2);
assert.strictEqual(checkContainer[2], 3);

/**
 * Set the actual function for requesting an iterator.
 *
 * @return {Object} An iterator for this container.
 */
MyIterable.prototype[Symbol.iterator] = function () {
    return this._iteratorImplObject();
};

// Use the iterator from the MyIterable container in a for-of-loop.
// This loop iterates over all pushed values by using the iterator API.
checkContainer = [];
for (let item of iterable) checkContainer.push(item);
assert.strictEqual(checkContainer.length, 3);
assert.strictEqual(checkContainer[0], 1);
assert.strictEqual(checkContainer[1], 2);
assert.strictEqual(checkContainer[2], 3);

// Illustrate the different between a for-of-loop and a for-in-loop.
// Here all defined propertiy keys/names are returned - but not the actual values which were pushed.
checkContainer = []
for (let item in iterable) checkContainer.push(item);
assert.strictEqual(checkContainer.length, 5);
assert.strictEqual(checkContainer[0], '_container');
assert.strictEqual(checkContainer[1], 'push');
assert.strictEqual(checkContainer[2], 'pop');
assert.strictEqual(checkContainer[3], '_iteratorImplObject');
assert.strictEqual(checkContainer[4], '_iteratorImplGenerator');

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/04/2015
// Description: Illustrate new ES6 features regarding object literals.
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
 * Constructor function for the class <tt>Car</tt>.
 *
 * @classdesc Represents a real world car.
 *
 * @param {number=} speed The initial speed of the car.
 */
function Car (speed) {
    /**
     * The current speed of the car.
     *
     * @type {number}
     */
    this.speed = speed || 0;
    /**
     * The current driving state of the car.
     *
     * @type {boolean}
     */
    this.isDriving = false;
}

/**
 * Sets the car into a driving state.
 */
Car.prototype.drive = function () {
    this.isDriving = true;
};

/**
 * Sets the car into a non-driving state.
 */
Car.prototype.stop = function () {
    this.isDriving = false;
};

/**
 * A factory function that returns an object which extends the <tt>Car</tt> type.
 *
 * @return {Object} An object representing a specialied instance of the type <tt>Car</tt>.
 * @param {string} color The color of hte car.
 */
function createBmw (color) {
    return {
        __proto__: new Car(0),
        color,
        ['is' + 'Honking']: false,
        honk (stop) {
            this.isHonking = !stop;
        },
        get protoProperty() {
            return this.__proto__;
        },
        *getKeys() {
            for(let k in this) yield k;
        }
    };
}

let bmw = createBmw('white');

assert.deepEqual(Object.getPrototypeOf(bmw), new Car(0));
assert.strictEqual(bmw.protoProperty, Object.getPrototypeOf(bmw));
assert.strictEqual(bmw.speed, 0);
assert.strictEqual(bmw.isDriving, false);
bmw.drive();
assert.strictEqual(bmw.isDriving, true);
bmw.stop();
assert.strictEqual(bmw.isDriving, false);
assert.strictEqual(bmw.color, 'white');
assert.strictEqual(bmw.isHonking, false);
bmw.honk();
assert.strictEqual(bmw.isHonking, true);
bmw.honk(true);
assert.strictEqual(bmw.isHonking, false);

let keys = [];
for(let k of bmw.getKeys()) keys.push(k);

let controlKeys = ['color', 'isHonking', 'honk', 'protoProperty', 'getKeys', 'isDriving', 'speed', 'drive', 'stop'];

assert.strictEqual(keys.length, controlKeys.length);
for(let key of controlKeys) assert.notStrictEqual(keys.indexOf(key), -1)

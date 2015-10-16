// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/16/2015
// Description: Illustrate the ES6 feature "class".
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

// Define a class Vehicle which is used as base class for the type Car.
class Vehicle {
    // Maps to the constructor function.
    constructor (speed) {
        this._speed = speed;
    }

    // Maps to an instance method move (bind to the protype of Vehicle).
    move (speedKmh) {
        if (typeof speedKmh !== 'number') throw new Error('speedKmh must be a number!');
        this._speed = speedKmh;
    }

    // Maps to a static method kmh2mph (bind to the contructor function object).
    static kmh2mph(kmh) {
        if (typeof kmh !== 'number') throw new Error('kmh must be a number!');
        return kmh * 0.621371;
    }
};

// Define a class Car which is derived from Vehicle, i.e. the prototype of Car is an instance of Vehicle.
class Car extends Vehicle {
    // This constructor is not called by node.js - seems to be not implemented yet.
    constuctor (speed, brand, color) {
        // Calling the super constructor inside a constructor is not supported by node.js yet.
        //super(speed);
        this._color = color;
        this._brand = brand;
        console.log(this);
    }

    // Maps to an instance method drive (bind to the protype of Car). Internally the method move of the super class
    // is called.
    drive (speedKmh) {
        super.move(speedKmh);
    }
};

let vehicle = new Vehicle(37);
assert.strictEqual(vehicle._speed, 37);
vehicle.move(199);
assert.strictEqual(vehicle._speed, 199);
assert.throws(function () {
    vehicle.drive(231);
}, TypeError);
assert.strictEqual(vehicle._speed, 199);

let bmw = new Car(123, 'BMW', 'White');
assert.strictEqual(bmw._speed, 123);
assert.strictEqual(bmw._color, undefined);
assert.strictEqual(bmw._brand, undefined);
bmw.move(210);
assert.strictEqual(bmw._speed, 210);
bmw.drive(231);
assert.strictEqual(bmw._speed, 231);

assert.strictEqual(Math.round(Car.kmh2mph(12) * 1000), 7.456 * 1000);
assert.strictEqual(Math.round(Vehicle.kmh2mph(12) * 1000), 7.456 * 1000);
assert.throws(function () {
    bmw.kmh2mph(12);
}, TypeError);

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 11/28/2015
// Description: Illustrates garbage collection of circular references without a connection to the
//              root node (global object).
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

let events = require('events');
let EventEmitter = events.EventEmitter;

// A class that represents a car and is used for demonstrating callback registration and scope.
class Car extends EventEmitter{
    constructor (brand) {
        super();
        this.brand = brand;
        this._speed = 0;
    }

    setSpeed (speed) {
        this._speed = speed;
        this.emit('speedChanged', this._speed);
    }
};

// Create a global property called car.
global.car = new Car('BMW');

// Registers a handler on the global property "car".
function setHandler () {
    let car = global.car;
    car.on('speedChanged', (speed) => {
        // In this closure we have a circular reference to car (which is an alias to global.car).
        console.log(`speed: ${speed}`);
    });
};

// Here the actual handler is set.
setHandler();

// We delete the reference to the object "global.car". Still there exist two references between the
// object that was referenced by global.car and its "speedChanged" handler. Since there is no
// connection to the root (global object) this object is removed with all it's children nodes.
global.car = undefined;

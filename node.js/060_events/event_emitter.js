// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/25/2015
// Description: Illustrates the usage of the class events.EventEmitter.
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

// Define the class Car.
function Car() {
    this._engineIsRunning = false;
}

// Let Car inherit from events.EventEmitter, i.e. we have all methods available that are implemented on event emitter.
Car.prototype = new (require('events').EventEmitter)();

// Define the constructor for Car to the function Car.
Car.prototype.constructor = Car;

// Define the method startEngine which sets the property _engineIsRunning to true and emits the event 'start' if the
// car was stopped before.
Car.prototype.startEngine = function() {
    var emit = !this._engineIsRunning;
    this._engineIsRunning = true;
    if(emit) this.emit('start');
}

// Define the method stopEngine which sets the property _engineIsRunning to false and emits the event 'stop' if the
// car was started before.
Car.prototype.stopEngine = function() {
    var emit = this._engineIsRunning;
    this._engineIsRunning = false;
    if(emit) this.emit('stop');
}

// Define the method honk which  emits the event 'honk' with a volume argument in the range from [1 ... 10].
Car.prototype.honk = function(volume) {
    var normalizedVolume = volume;
    if(isNaN(normalizedVolume) || normalizedVolume < 1) normalizedVolume = 1;
    else if(normalizedVolume > 10) normalizedVolume = 10;
    this.emit('honk', normalizedVolume);
}


// Create an instance of Car.
var x6 = new Car();

// Define four functions that will act as event listeners.
function onStart() {
    console.log('Engine started');
}

function onStop() {
    console.log('Engine stopped');
}

function onHonk(volume) {
    console.log('Honking with volume ' + volume);
}

function onFirstStart() {
    console.log('Engine started for first time');
}

// Register the event listener onStart for the event 'start'. The return value is the event emitter object itself,
// i.e. x6.
assert.equal(x6.on('start', onStart), x6);
assert.equal(x6.listeners('start').length, 1);
assert.equal(x6.listeners('start')[0], onStart);

// Register the event listener onFirstStart for the event 'start'. This listener is removed after the first invocation.
assert.equal(x6.once('start', onFirstStart), x6);
assert.equal(x6.listeners('start').length, 2);

// Register the event listener onStop for the event 'stop'.
assert.equal(x6.addListener('stop', onStop), x6);
assert.equal(x6.listeners('stop').length, 1);
assert.equal(x6.listeners('stop')[0], onStop);

// Register the event listener onHonk for the event 'honk'.
x6.on('honk', onHonk);
assert.equal(x6.listeners('honk').length, 1);
assert.equal(x6.listeners('honk')[0], onHonk);

// Call startEngine on x6. After this call the listener onStart, onFirstStart are invoked. Finally the listener.
// onFirstStart is removed from the x6 instance.
x6.startEngine();
assert.equal(x6.listeners('start').length, 1);
assert.equal(x6.listeners('start')[0], onStart);

// Here nothing changes, i.e. we still have only one listener registered for 'start', namely onStart.
x6.startEngine();
assert.equal(x6.listeners('start').length, 1);
assert.equal(x6.listeners('start')[0], onStart);

x6.honk(8);
x6.stopEngine();
x6.honk();
x6.stopEngine();

// Remove the onStart listener for 'start'. The return value is the event emitter itself, i.e. x6.
assert.equal(x6.removeListener('start', onStart), x6);
// There is no event listener registered for 'start' anymore.
assert.equal(x6.listeners('start').length, 0);
// No event listener is called at this point.
x6.startEngine();

// Register the onStop listener a second time for the event 'stop'.
x6.on('stop', onStop);
assert.equal(x6.listeners('stop').length, 2);
x6.stopEngine();

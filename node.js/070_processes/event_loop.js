// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/26/2015
// Description: Illustrates the usage of process.nextTick().
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


// A basic example to demonstrate how to use process.nextTick().
// This statement goes into the evenet loop.
console.log('before process.nextTick()');
// This statement is executed after the last statement of the current event loop turn is executed.
// This function is not an alias for setTimeout(funciton(){}, 0). It is more efficient, i.e. it is executed before
// the last turn of the event loop is executed and before any I/O events or timers are fired after the last turn of the
// event loop.
process.nextTick(function () {
    console.log('process.nextTick()');
});
setTimeout(function () {
    console.log('setTimeout()');
}, 0);
// This statement goes into the evenet loop.
console.log('after process.nextTickt()');



// process.nextTick() can be used to initialize objects and give the user a chance to register events before the
// initialization is started.
function MyType () {
    this.init();
}

// Make the MyType a subtype of events.EventEmitter.
require('util').inherits(MyType, require('events').EventEmitter);

// Define a init function that is initializing the object in a function passed to process.nextTick(). So the user has a
// chance to do some other stuff on the event loop ebfore the initialization takes place. Afterwards the event
// 'initialized' is called.
MyType.prototype.init = function () {
    process.nextTick(function () {
        this.value = 123;
        this.emit('initialized', this.value);
    }.bind(this));
};

// Create an object of MyType.
var myObject = new MyType();

// Register a function for the initialized event. This callback is called after the initialized method is executed.
// Since the initialized method is executed in the process.nextTick() function the callback registration is executed
// before because it is executed on the event loop directly.
myObject.on('initialized', function (value) {
    console.log('myObject initialized with: ' + value);
});

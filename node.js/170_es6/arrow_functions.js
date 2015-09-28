// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 09/28/2015
// Description: Illustrate the ES6 feature "arrow function".
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

var assert = require('assert');

/**
 * An arrow function definition that always returns the number 123 when called.
 *
 * @function
 * @return number
 */
let fun = () => {
    return 123;
};

assert.strictEqual(typeof fun, 'function');
assert.strictEqual(fun(), 123);

/**
 * An arrow function that takes one argument, increments it and returns the incremented value.
 *
 * @function
 * @return number
 * @param {number} arg
 */
let funWithOneArgument = arg => {
    return arg + 1;
};

assert.strictEqual(typeof funWithOneArgument, 'function');
assert.strictEqual(funWithOneArgument(7), 8);

/**
 * An arrow function that takes two argumenta, creates the sum and returns it.
 *
 * @function
 * @return number
 * @param {number} arg1
 * @param {number} arg2
 */
let funWithMultipleArguments = (arg1, arg2) => {
    return arg1 + arg2;
};

assert.strictEqual(typeof funWithMultipleArguments, 'function');
assert.strictEqual(funWithMultipleArguments(4, 4), 8);

/**
 * An array containing some strings. Each representing only one character.
 *
 * @type {Array<string>}
 */
let characters = ['a', 'b', 'C', 'd', 'e', 'F', 'G', 'H'];

/**
 * An array containing some strings. Each representing only one lowercase character.
 *
 * @type {Array<string>}
 */
let lowerCaseCharacters = characters.filter((item) => {
    return item.toLowerCase() === item;
});

assert.deepEqual(lowerCaseCharacters, ['a', 'b', 'd', 'e']);

/**
 * The constructor functions for the <tt>Car</tt> type.
 *
 * @classdesc Represents a Car type.
 * @constructor
 */
function Car () {
    this.speed = 0;
    this.driveFaster = () => {
        ++this.speed;
    };
}

/**
 * An instance of the type <tt>Car</tt>.
 *
 * @type {Car}
 */
let car = new Car();
assert(car);
assert.strictEqual(car.speed, 0);
car.driveFaster();
assert.strictEqual(car.speed, 1);
/**
 * An object that imitates an instance of the type  <tt>Car</tt>.
 */
let otherObject = {
    speed: 5,
    driveFaster: car.driveFaster
};

assert.strictEqual(otherObject.speed, 5);
otherObject.driveFaster();
assert.strictEqual(otherObject.speed, 5);
assert.strictEqual(car.speed, 2);
otherObject.driveFaster.call(otherObject);
assert.strictEqual(otherObject.speed, 5);
assert.strictEqual(car.speed, 3);


/**
 * A global number value.
 *
 * @type {number}
 */
let value = 42;
/**
 * An arrow function that references a global value without using a block. I.e. in thias case no return statement
 * is required.
 *
 * @type {function():number}
 */
let fValue = () => value;
assert.strictEqual(fValue(), value);
fValue = () => { return value; }
assert.strictEqual(fValue(), value);

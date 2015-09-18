/**
 * @fileoverview Illustrates how to annotate classes with type information in JSDoc syntax.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */

var assert = require('assert');

/**
 * A constructor function for the type <tt>Vehicle</tt>.
 * @classdesc The class <tt>Vehicle</tt> is thought to be the base type for all forms of vehicles.
 * @public
 * @constructor
 */
function Vehicle () { }

/**
 * A getter indicating whether the vehicle is moving or not.
 *
 * @public
 * @abstract
 *
 * @type {boolean}
 * @name Vehicle#isMoving
 */
Object.defineProperty(Vehicle.prototype, 'isMoving', {
    get: function () {
        throw new Error('Must be implemented by derived type!');
    }
});


/**
 * A constructor function for the type <tt>Car</tt>.
 * @classdesc The class <tt>Car</tt> is thought to represent a car.
 *
 * @public
 * @constructor
 * @extends Vehicle
 */
function Car () { }

require('util').inherits(Car, Vehicle);

/**
 * A private property of the class {@link Car} that holds the speed information.
 *
 * @private
 * @type {number}
 * @default 0
 */
Car.prototype._speed = 0;

/**
 * A getter for the speed of the car.
 *
 * @public
 *
 * @type {number}
 * @name Car#speed
 */
Object.defineProperty(Car.prototype, 'speed', {
    get: function () {
        return this._speed;
    }
});

/**
 * Sets the car instance into drive state.
 *
 * @public
 *
 * @throws {Error} Thrown if <tt>speed</tt> is not a number.
 *
 * @param {number} speed A positive number that sets the speed property of the car.
 */
Car.prototype.drive = function (speed) {
    if (typeof speed !== 'number') throw new Error('speed: NaN');
    this._speed = speed;
    this._isMoving = speed !== 0;
}

/**
 * A property of the class {@link Car} that holds the moving information.
 *
 * @protected
 * @type {boolean}
 * @default false
 */
Car.prototype._isMoving = false;


/**
 * A getter indicating whether the car is moving or not.
 *
 * @public
 * @override
 *
 * @type {boolean}
 * @name Car#isMoving
 */
Object.defineProperty(Car.prototype, 'isMoving', {
    get: function () {
        return this._isMoving;
    }
});


var car = new Car();
assert(car);
assert.strictEqual(car.isMoving, false);
assert.strictEqual(car.speed, 0);
car.drive(3);
assert.strictEqual(car.isMoving, true);
assert.strictEqual(car.speed, 3);
car.drive(0);
assert.strictEqual(car.isMoving, false);
assert.strictEqual(car.speed, 0);

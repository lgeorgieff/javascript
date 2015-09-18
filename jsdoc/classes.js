/**
 * @fileoverview Illustrates how to annotate classes with type information in JSDoc syntax.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */

/**
 * A constructor function for the type <tt>Car</tt>.
 * @classdesc The class <tt>Car</tt> is thought to represent a car.
 * @public
 * @constructor
 */
function Car () { }

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
 * @throws {Error} Thrown if <tt>speed</tt> is a negative number.
 *
 * @param {number} speed A positive number that sets the speed property of the car.
 */
Car.prototype.drive = function (speed) {
    if (typeof speed !== 'number') throw new Error('speed: NaN');
    if (speed < 0) throw new Error('speed: ' + speed + ' < 0');
    this._speed = speed;
}

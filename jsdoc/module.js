/**
 * @fileoverview Illustrates how to annotate modules in JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 */

/**
 * @module modules/module
 */

/**
 * The constructor function for creating instances of the type <tt>Car</tt>.
 * @classdesc A type representing a car that is able to drive.
 *
 * @public
 * @constructor
 * @memberOf module:modules/module
 */
function Car () { }

/**
 * An internal property that holds the information whether the car is driving or not.
 *
 * @private
 * @type {boolean}
 * @default false
 */
Car.prototype._isDriving = false;

/**
 * Sets the <tt>Car</tt> instance into driving state.
 *
 * @public
 */
Car.prototype.drive = function () {
    this._isDriving = true;
}

/**
 * Sets the <tt>Car</tt> instance into non-driving state.
 *
 * @public
 */
Car.prototype.stop = function () {
    this._isDriving = false;
}

/**
 * A property that holds the information whether the car is driving or not.
 *
 * @public
 * @readonly
 * @type {boolean}
 * @default false
 */
Object.defineProperty(Car.prototype, 'isDriving',
                      { get: function () {
                          return this._isDriving;
                      }});

/**
 * The constructor function for creating instances of the type <tt>Person</tt>.
 * @classdesc A type representing a person that has a name.
 *
 * @public
 * @constructor
 * @memberOf module:modules/module
 *
 * @throws {Error} If <tt>name</tt> is not of the type <tt>string</tt>.
 *
 * @param {!string} name The initial name of the <tt>Person</tt> instance.
 */
function Person (name) {
    if (typeof name !== 'string') throw new Error('name must be a string');
    this.name = name;
}

/**
 * A getter and setter for the name of the <tt>Person</tt> instance.
 *
 * @public
 *
 * @type {!string}
 * @default ''
 */
Person.prototype.name = '';

/**
 * Checks whether the passed instance is of the type {@link Car} or not.
 *
 * @public
 * @memberOf module:modules/module
 *
 * @return {boolean} <tt>true</tt> if the passed instance is of hte type {@link Car}. <tt>false</tt> otherwise.
 */
function isCar (instance) {
    return instance instanceof Car;
}

/**
 * Checks whether the passed instance is of the type {@link Person} or not.
 *
 * @public
 * @memberOf module:modules/module
 *
 * @return {boolean} <tt>true</tt> if the passed instance is of hte type {@link Person}. <tt>false</tt> otherwise.
 */
function isPerson (instance) {
    return instance instanceof Person;
}

module.exports.Car = Car;
module.exports.Person = Person;
module.exports.isCar = isCar;
module.exports.isPerson = isPerson;

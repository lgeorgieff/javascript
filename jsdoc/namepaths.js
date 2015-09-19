/**
 * @fileoverview Illustrates how to use name paths in JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */

/**
 * A constructor function to create instances of the type <tt>Car</tt>.
 * @classdesc A class to show the name paths possibilities of JSDoc.
 *
 * @pubic
 * @constructor
 */
function Car () {
    /**
     * An inner function inside the constructor function of <tt>Car</tt>.
     */
    function drive () {
        console.log('inner member: drive()');
    }
}

/**
 * An instance function of the type <tt>Car</tt>.
 *
 * @public
 */
Car.prototype.drive = function () {
    console.log('instance member: drive()');
}

/**
 * A static function of the type <tt>Car</tt>.
 *
 * @public
 */
Car.drive = function () {
    console.log('static member: drive()');
}

/**
 * Represents the entry point of this file. It creates an instance of the type {@link Car} and invokes the instance
 * method {@link Car#drive} and the static method {@link Car.drive}. But it cannot invoke the inner function
 * {@link Car~drive}.
 *
 * @public
 */
function main () {
    var car = new Car();
    car.drive();
    Car.drive();
    // no possibility to access the inner member drive()
}

main();

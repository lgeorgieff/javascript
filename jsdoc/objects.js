/**
 * @fileoverview Illustrates how to annotate objects with JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 */


/**
 * A factory function for <tt>Person</tt> instances.
 *
 * @public
 * @throws {Error} Thrown if <tt>firstName</tt> or <tt>lastName</tt> is not of the type <tt>string</tt>.
 * @throws {Error} Thrown if <tt>age</tt>  is not of the type <tt>number</tt>.
 *
 * @return {Person}
 *
 * @param {!string} firstName The first name of the <tt>Person</tt> instance.
 * @param {!string} lastName The last name of the <tt>Person</tt> instance.
 * @param {!number} age The age of the <tt>Person</tt> instance in years.
 */
function createPerson (firstName, lastName, age) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string')
        throw new Error('"firstName" and "lastName" must be strings');
    if (typeof age !== 'number')
        throw new Error('"age" must a number');

    /**
     * @typedef {Object} Person
     * @property {string} firstName The first name of the <tt>Person</tt> instance.
     * @property {string} lastName The last name of the <tt>Person</tt> instance.
     * @property {number} age The age of the <tt>Person</tt> instance.
     * @property {function(boolean): !string} serialize Returns the string representation of this
     *           <tt>Person</tt> instance.
     */
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        serialize: function (withAge) {
            if (withAge !== true) return this.firstName + ' ' + this.lastName;
            return this.firstName + ' ' + this.lastName + ' [' + this.age + ']';
        }
    };
    return person;
}

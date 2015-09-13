'use strict';

/**
 * @module person
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 */


/**
 * The name module that is used internally by this module for representing a person's name.
 *
 * @private
 */
var name = require('./name');

/**
 * A factory function that creates a Person object and returns it.
 *
 * @public
 *
 * @return {Person} person The person that is created corresponding to the passed parameters.
 *
 * @param {string} firstname A string that represents the first name of the created person. If multiple first names
 *        should be set, the string must contain blanks between each first name.
 * @param {string} lastName A string that represents the last name of the created person.
 * @param {Date} dateOfBirth A Date object that represents the date of birth of the created person.
 */
function createPerson (firstname, lastname, dateOfBirth) {
    /**
     * @name Person
     * @type Object
     * @property {ComplexName} name The name of the created person.
     * @property {Date} dateOfBirth The date of birth of the created person.
     * @todo make getAge member of Person
     */
    var person = {
        /**
         * Calculates the age of a person in full years depending on the current date.
         *
         * @todo make ComplexName (type) of Person.name a link to the class description of name.ComplexName
         *
         * @public
         * @function getAge
         *
         * @return {number} The age of a person in full years
         */
        getAge: function () {
            var diff = new Date() - this.dateOfBirth;
            return Math.floor( diff / 1000 / 60 / 60 / 24 / 365);
        }
    };

    Object.defineProperty(person, 'name', { writable: false,
                                            configurable: false,
                                            value: new name.ComplexName(firstname, lastname)});
    Object.defineProperty(person, 'dateOfBirth', {writable: false,
                                                  configurable: false,
                                                  value: new Date(dateOfBirth)});

    return person;
}

module.exports = exports = createPerson;

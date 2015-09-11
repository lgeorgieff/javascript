/**
 * @module Name
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */

/**
 * The Node.js 'util' module that is used internally by this module.
 *
 * @private
 */
var util = require('util');

/**
 * The constructor function for instances of the type <tt>ComplexName</tt>.
 *
 * @public
 * @constructor
 *
 * @param {string} firstnames A string that represents the first name of a full name. If the first name contains
 *        multiple character sequences separated by blanks, they are treated as multiple first names.
 * @param {string} lastname A string that represents the lastname of a full name.
 */
function ComplexName(firstnames, lastname) {
    var self = this;
    this._firstnames = [];
    if (typeof firstnames === 'string') {
        firstnames.split(' ').forEach(function (n) {
            if (n.trim()) self._firstnames.push(n.trim());
        });
    }

    this._lastname = '';
    if (typeof lastname === 'string') this._lastname = lastname.trim();
}

/**
 * A getter that indicates whether the <tt>ComplexName</tt> object has a last name or not.
 *
 * @public
 *
 * @return {boolean} <tt>true</tt> if at least one last name exists. <tt>false</tt> otherwise.
 */
ComplexName.prototype.hasLastName = function () {
    return this._lastname.length !== 0;
}

/**
 * A getter that indicates whether the <tt>ComplexName</tt> object has a first name or not.
 *
 * @public
 *
 * @return {boolean} <tt>true</tt> if at least one first name exists. <tt>false</tt> otherwise.
 */
ComplexName.prototype.hasFirstNames = function (order) {
    return (order === undefined && this.getFirstNameCount() !== 0) ||
        (!isNaN(order) && this._firstnames[order] !== undefined) 
}

/**
 * A getter for the full name of a <tt>ComplexName</tt> object.
 *
 * @public
 *
 * @return {string} The full name represented as a string. It includes all first names and the last name. Each of them
 *         is separated by a blank character.
 */
ComplexName.prototype.getFullName = function () {
    var result = '';
    for(var i = 0; i !== this._firstnames.length; ++i) {
        if (i === 0) result = this._firstnames[i];
        else result += ' ' + this._firstnames[i];
    }
    
    if (this.hasLastName() && this.hasFirstNames()) result += ' ' + this._lastname;
    else if (this.hasLastName()) result = this._lastname;
    return result;
}

/**
 * A getter for the first name of a <tt>ComplexName</tt> object.
 *
 * @public
 *
 * @return {string} The first name of the full name object. If no first name is set, an empty string is returned. If
 *         multiple first names are present, one string is returned with blanks as separators between each first name.
 */
ComplexName.prototype.getFirstName = function (order) {
    if (order === undefined || order === null) {
        var result;
        for (var i = 0; i !== this._firstnames.length; ++i) {
            if (i !== 0) result += ' ' + this._firstnames[i];
            else result = this._firstnames[i];
        }
        return result;
    } else {
        return this._firstnames[order];
    }
}

/**
 * Creates and returns a shallow copy of the passed array.
 *
 * @private
 *
 * @returns {Array<T>} A shallow copy of <tt>arr</tt>.
 *
 * @param {Array<T>} The array of which a shallow copy will be returned. If it is null, undefined or not an array the
 *        return value is an empty array.
 */
function cloneArray (arr) {
    if (arr === null || arr === undefined) return [];
    else return arr.slice(0);
}

/**
 * A getter for the first names of a <tt>ComplexName</tt> object.
 *
 * @public
 *
 * @return {Array<string>} An array of strings. Each string represents a first name of a full name.
 */
ComplexName.prototype.getFirstNames = function () {
    return cloneArray(this._firstnames);
}

/**
 * A getter for the count of all first names of a <tt>ComplexName</tt> object.
 *
 * @public
 *
 * @return {number} A positive integer.
 */
ComplexName.prototype.getFirstNameCount = function () {
    return this._firstnames.length;
}

/**
 * A getter for the last name of a <tt>ComplexName</tt> object.
 *
 * @public
 *
 * @return {string} The last name of the full name object. If no first name is set, an empty string is returned.
 */
ComplexName.prototype.getLastName = function () {
    return this._lastname;
}

/**
 * The maximum amount of first names that is supported for instances of the type SimpleName.
 *
 * @public
 * @exports name/SIMPLE_NAME_FIRST_NAMES_MAX
 *
 * @const
 * @type {number}
 * @default 1
 */
var SIMPLE_NAME_FIRST_NAMES_MAX = 1;

/**
 * The constructor function for instances of the type SimpleName.
 *
 * @public
 * @constructor
 * @extends ComplexName
 *
 * @param {string} firstnames A string that represents the first name of a full name. It must not contain blanks that
 *                 separate non-blank sequences.
 * @param {string} lastname A string that represents the lastname of a full name.
 */
function SimpleName (firstname, lastname) {
    ComplexName.call(this, firstname, lastname);
    if (this.getFirstNameCount() > SIMPLE_NAME_FIRST_NAMES_MAX)
        throw new Error('A SimpleName may only have one first name but has: ' + this.getFirstNameCount());
}

/**
 * A getter for the first name of a <tt>SimpleName</tt> object.
 *
 * @public
 *
 * @return {string} The first name of the full name object. If no first name is set, an empty string is returned.
 */
SimpleName.prototype.getFirstName = function () {
    if (this._firstnames.length === 0) return '';
    else return this._firstnames[0];
}

util.inherits(SimpleName, ComplexName);

module.exports.ComplexName = ComplexName;
module.exports.SimpleName = SimpleName;
module.exports.SIMPLE_NAME_FIRST_NAMES_MAX = SIMPLE_NAME_FIRST_NAMES_MAX;

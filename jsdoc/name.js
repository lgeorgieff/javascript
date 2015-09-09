/**
 * @module Name
 * @fileOverview This file illustrates how to use JSDoc to generate documentation resources for JavaScript source
 *               files. <br/>
 *               In particular this file defines some logic and exports it as Node.js module.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


/**
 * @todo Create some logic
 * @todo Expose a Node.js module
 * @todo Create a second Node.js module that references this module
 * @todo Create a entry script that uses this module and the second module
 * @todo Create some getters
 * @todo Create some setters
 */


var util = require('util');

/**
 *
 */
function Name(firstnames, lastname) {
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
 *
 */
Name.prototype.hasLastName = function () {
    return this._lastname.length !== 0;
}

/**
 *
 */
Name.prototype.hasFirstNames = function (order) {
    return (order === undefined && this.getFirstNameCount() !== 0) ||
        (!isNaN(order) && this._firstnames[order] !== undefined) 
}

/**
 *
 */
Name.prototype.getFullName = function () {
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
 *
 */
Name.prototype.getFirstName = function (order) {
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
 *
 */
function cloneArray (arr) {
    if (arr === null || arr === undefined) return [];
    else return arr.slice(0);
}

/**
 *
 */
Name.prototype.getFirstNames = function () {
    return cloneArray(this._firstnames);
}

/**
 *
 */
Name.prototype.getFirstNameCount = function () {
    return this._firstnames.length;
}

/**
 *
 */
Name.prototype.getLastName = function () {
    return this._lastname;
}

/**
 *
 */
var SIMPLE_NAME_FIRST_NAMES_MAX = 1;

/**
 *
 */
function SimpleName (firstname, lastname) {
    Name.call(this, firstname, lastname);
    if (this.getFirstNameCount() > SIMPLE_NAME_FIRST_NAMES_MAX)
        throw new Error('A SimpleName may only have one first name but has: ' + this.getFirstNameCount());
}

SimpleName.prototype.getFirstName = function () {
    if (this._firstnames.length === 0) return '';
    else return this._firstnames[0];
}

util.inherits(SimpleName, Name);

/**
 *
 */
module.exports.Name = Name;
/**
 *
 */
module.exports.SimpleName = SimpleName;

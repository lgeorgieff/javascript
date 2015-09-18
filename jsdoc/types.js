/**
 * @fileoverview Illustrates how to annotate variables with type information in JSDoc syntax.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


/**
 * A number value.
 *
 * @type {number}
 */
var aNumber = 6;

/**
 * A non-nullable number value.
 *
 * @type {!number}
 */
var anotherNumber = 6;

/**
 * A string valur or null.
 *
 * @type {string|null}
 */
var stringOrNull = null;

/**
 * A string valur or null.
 *
 * @type {?string}
 */
var anotherStringOrNull = 'abc';

/**
 * A constant value indicating 0.
 *
 * @const
 * @default 0
 */
var ZERO = 0;

/**
 * An array contianing odd numbers.
 *
 * @type {Array<number>}
 */
var oddNumbers = [0, 2, 4, 6, 8]

/**
 * Sums all numbers that are passed to this function.
 *
 * @return {number} The sum of all arguments
 *
 * @param {...number} numbers Numbers to be summed up.
 */
function sum (numbers) {
    var result = 0;
    for(var i = 0; i !== arguments.length; ++i)
        result += arguments[i];
    return result;
}

/**
 * Prints the passed data to the object <tt>out</tt> refers to.
 *
 * @param {*=} data An optional argument that is printed. The default value is <tt>''</tt>.
 */
function print (data) {
    if (data !== null && data !== undefined) console.log(data)
    else printer.log('');
}

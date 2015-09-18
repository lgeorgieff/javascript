/**
 * @fileoverview Illustrates how to annotate enums with JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


/**
 * Enumerations of colors.
 *
 * @readonly
 * @enum {number}
 */
var Color = {
    /** Black color */
    Black: 1,
    /** Blue color */
    Blue: 2,
    /** Green color */
    Green: 4,
    /** Orange color */
    Orange: 8,
    /** Red color */
    Red: 16,
    /** White color */
    White: 32,
    /** Yellow color */
    Yellow: 64
};

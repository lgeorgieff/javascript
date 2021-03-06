// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/06/2015
// Description: Illustrates how to use jsdoc anntotations to improve the compilation results of the closure compiler.
// Compilation: ccompiler --warning_level=VERBOSE --compilation_level=ADVANCED_OPTIMIZATIONS --jscomp_error=const
//              --language_in=ECMASCRIPT6_STRICT --language_out=ECMASCRIPT5_STRICT --js jsdoc_annotations.js
// Compilation: ccompiler --warning_level=VERBOSE --compilation_level=ADVANCED_OPTIMIZATIONS
//              --language_in=ECMASCRIPT6_STRICT --language_out=ECMASCRIPT5_STRICT --js jsdoc_annotations.js
// ====================================================================================================================

// ====================================================================================================================
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation, either version 3 of the License, or any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
// details.
//
// You should have received a copy of the GNU General Public License along with this program.
// If not, see http://www.gnu.org/licenses/.
// ====================================================================================================================

'use strict';

/**
 * @preserve
 * This file demonstrates the usage of JSDoc annotations for the closure compiler.
 *
 */

/**
 * A const string variable in this script.
 * @type {string}
 * @const
 */
var MY_CONST = 'I am a const'

/**
 * @param {T} arg An argument that is printed on the console.
 * @return {T} Returns always true.
 * @template T
 */
function myCrazyFun(arg) {
    console.log('hello from myCrazyFun(' + arg + ')');
    return true;
}

console.log('myCrazyFun(arg): ' + myCrazyFun(123));

// Causes a warning by the compiler when changing a const value.
// If compiled with --jscomp_error=const, throws an error. Otherwise a warning is shown
MY_CONST = 'New value';
console.log('MY_CONST: ' + MY_CONST);

/**
 * A JSON string that will be used to create a JS array.
 *
 * @type {string}
 */
let someJson = '[1, 2, 3, 4, 5, 6]';

/**
 * A JS array that is generated from a JSON string. Here the return value from <tt>JSON.parse</tt> must be casted to
 * <tt>!Array&ltnumber&gt;</tt>.
 *
 * @type {!Array<number>}
 */
let someObject = /** @type {!Array<number>} */ (JSON.parse(someJson));

for(let item of someObject) console.log(`item: ${item}`);

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 09/25/2015
// Description: Illustrate the ES6 feature "const".
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

var assert = require('assert');

/**
 * Define A constant variable, i.e. a read-only reference to a value.
 * It cannot be re-assigned in the entire script and cannot be re-declared in the same scope.
 * @const
 * @type {number}
 * @default 1
 */
const MY_CONST_1 = 1;

assert.strictEqual(MY_CONST_1, 1);
assert.throws(function () { MY_CONST_1 = 2; }, TypeError);

// var MY_CONST_1 = 2; // forbidden => SyntaxError

// We can create a different varaible with the same name as the constant, but it must be in a different scope.
(function () {
    var MY_CONST_1 = 2;
    assert.strictEqual(MY_CONST_1, 2);
})()

/**
 * A constant reference can also be used in a function.
 * It is important that a constant reference does not make the object itself imutable, but only the reference to it.
 */
function fn () {
    const INNER_CONST = {a: 1, b: 2};
    assert.throws(function () { INNER_CONST = 2; }, TypeError);
    INNER_CONST.a = 'a';
    INNER_CONST.b = 'b';
    INNER_CONST.c = 'c';
    assert.deepEqual(INNER_CONST, {a: 'a', b: 'b', c: 'c'});
}

fn();

/**
 * Another constant. This one refers to a function.
 * @const
 * @type {funcion(): number}
 */
const CONST_FN = function () {
    return 12;
};

assert.strictEqual(CONST_FN(), 12);

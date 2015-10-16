// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/16/2015
// Description: Illustrates the block level declaration of function which is allowed in ES6.
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

let assert = require('assert');

function fn (arg) {
    if (arg === true) {
        assert.strictEqual(innerFn('abc'), 'abc');
        // Declare a function inside a block.
        // It is hoisted within this block but not visible outside.
        // This definition is not valid in ES5.
        function innerFn (someValue) {
            return someValue;
        }
        assert.strictEqual(innerFn(123), 123);
    } else {
        assert.throws(function () {
            innerFn();
        }, ReferenceError);
    }
    assert.throws(function () {
        innerFn();
    }, ReferenceError);
}

fn(true);
fn(false);

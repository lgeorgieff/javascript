// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 09/25/2015
// Description: Illustrate the ES6 feature "let".
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
 * Demonstrate the general usage of let and shows the scoping og varaibles defined with let.
 *
 * @param {boolean} arg If <tt>true</tt> the if-block is executed. If <tt>false</tt>, the else-block is executed.
 */
function demo1 (arg) {
    if (arg) {
        let valueTrue = 123;
        assert.strictEqual(valueTrue, 123);
        assert.throws(function () { valueFalse; }, ReferenceError);
    } else {
        let valueFalse = 321;
        assert.strictEqual(valueFalse, 321);
        assert.throws(function () { valueTrue; }, ReferenceError);
    }
    assert.throws(function () { valueTrue; }, ReferenceError);
    assert.throws(function () { valueFalse; }, ReferenceError);
}

/**
 * Demonstrate how to use let inside a loop to create closures that use a local variable only valid for the current
 * iteration of the loop only.
 */
function demo2 () {
    var funCollection = [];
    var iMax = 10;
    for (var i = 0; i !== iMax; ++i) {
        let j = i;
        funCollection.push(function () {
            return {i: i, j: j};
        });
    }

    for (let i = 0; i !== iMax; ++i)
        assert.deepEqual(funCollection[i](), {i: 10, j: i});
}

/**
 * Demonstrate the lack of hoisting for variables declared with <tt>let</tt>.
 */
function demo3 () {
    assert.throws(function () { value; }, ReferenceError);
    let value = 123;
    assert.strictEqual(value, 123);
}

/**
 * Demonstrate the scope of a variable declared with <tt>let</tt> inside a for-loop.
 */
function demo4 () {
    for (let i = 0; i !== 10; ++i)
        assert.notStrictEqual(i, undefined);
    assert.throws(function () { i; }, ReferenceError);
}


demo1(true);
demo1(false);

demo2();

demo3();

demo4();

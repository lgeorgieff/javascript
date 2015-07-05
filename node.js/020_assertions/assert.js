// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/05/2015
// Description: Illustrate how to use the assert module.
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

var assert = require('assert');


// assert(value) checks for the value true.
assert(true);
assert(true, 'Check assert(true)');
// assert(value) is the same as
assert.equal(true, !!12);


// assert.equal() checks with the operator ==.
assert.equal('abc', 'abc');
assert.equal(1, 1, 'Check assert.equal(1, 1)');
assert.equal(12, '12');
var obj = { };
assert(obj, obj);


// assert.notEqual() checks with the operator !=.
assert.notEqual('abc', 'ABC');
assert.notEqual(1, 2, 'Check assert.notEqual(1, 2)');
assert.notEqual(12, '120');
assert.notEqual({}, {});
assert.notEqual([], []);


// assert.strictEqual() checks with the operator ===.
assert.strictEqual('abc', 'abc');
assert.strictEqual(1, 1, 'Check assert.strictEqual(1, 1)');
assert.strictEqual(true, !!12);


// assert.notStrictEqual() checks with the operator !==.
assert.notStrictEqual('abc', 'ABC');
assert.notStrictEqual(1, 2, 'Check assert.notStrictEqual(1, 2)');
assert.notStrictEqual(12, '12');
assert.notStrictEqual({}, {});
assert.notStrictEqual([], []);


// assert.deepEqual() checks objects for equality.
// assert.equal does not work for objects since the operator == and === compares objects by reference equaliy.
// Thus for two identical instances it still throws an error.
assert.deepEqual(12, 12);

var errorThrown;
try {
    assert.equal({}, {});
} catch(err) {
    errorThrown = true;
}
assert(errorThrown, 'Check assert equal on objects');

assert.deepEqual({}, {});
assert.deepEqual({value: {value: 123}}, {value: {value: '123'}}
);
assert.deepEqual([1, 2, 3], ['1', '2', '3']);


// assert.notDeepEqual() checks objects for unequality.
assert.notDeepEqual(12, 13);
assert.notDeepEqual({}, {value: 12});
assert.notDeepEqual([1, 2, 3], [2, 3, 4]);


// assert.throws() checks if a code block throws an exception.
assert.throws(function() { throw new Error('Encountered error!'); },
              Error);

assert.throws(function() { throw new Error('Encountered error!'); },
              Error, 'Check assert.throw(function() { throw new Error(\'Encountered error!\'); }, Error)');


// assert.doesNotThrow()
assert.doesNotThrow(function() { });
assert.doesNotThrow(function() { }, 'Check assert.doesNotThrow(function() { })');


// assert.ifError(value) throws an error if the given value is true.
assert.ifError(false);
assert.ifError(undefined);

errorThrown = false;
try {
    assert.ifError(true);
} catch(err) {
    errorThrown = true;
}
assert(errorThrown, 'Check assert.ifError()');


// assert.fail(actual, expected, message, operator) throws an exception that contains the data actual, expected,
// message and operator in the thrown AssertionError instance.
errorThrown = false;
try {
    assert.fail(21, '21', 'Test Failed', '===');
} catch(err) {
    errorThrown = true;
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.actual, 21);
    assert.strictEqual(err.expected, '21');
    assert.strictEqual(err.message, 'Test Failed');
    assert.strictEqual(err.operator, '===');
}
assert(errorThrown, 'Check assert.fail()');

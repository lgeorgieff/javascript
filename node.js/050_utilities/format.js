// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/27/2015
// Description: Demonstrates the usage of util.format.
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
var format = require('util').format;

assert.equal(format('format: %s', 'This is a string value!'), 'format: This is a string value!');
assert.equal(format('format: %d', 123), 'format: 123');
assert.equal(format('format: %j', 123), 'format: 123');
assert.equal(format('format: %j', 'This is a string value!'), 'format: "This is a string value!"');
assert.equal(format('format: %j', [1, '2', {value: 3}]), 'format: [1,"2",{"value":3}]');

assert.equal(format('%s, %s', 'string1'), 'string1, %s');
assert.equal(format('%s', 'string1', 'string2'), 'string1 string2');
assert.equal(format('%d', 'string and not a number!'), 'NaN');
assert.equal(format('%s', 123), '123');

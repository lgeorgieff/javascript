// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/03/2015
// Description: Demonstrates the usage of util.inherits.
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
var inherits = require('util').inherits;

// Define the base class 'Base' with a method 'getValue'.
function Base (arg) {
    this.value = arg;
}

Base.prototype.getValue = function() {
    return this.value;
};

// Define a derived class 'Derived' from 'Base' by using 'inherits'.
function Derived (arg) {
    this.value = arg;
}

inherits(Derived, Base);

var base = new Base(123);
var derived = new Derived(456);

assert.strictEqual(typeof(base.getValue), 'function');
assert.strictEqual(typeof(derived.getValue), 'function');
assert.strictEqual(base.getValue(), 123);
assert.strictEqual(derived.getValue(), 456);

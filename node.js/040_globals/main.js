// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/22/2015
// Description: Illustrates the difference between global, module scope and caching.
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

// MY_GLOBAL is not defined yet, so accessing it will throw a ReferrenceError.
assert.throws(function(){ MY_GLOBAL; }, ReferenceError);

// MY_GLOBAL is still not defined, but when using global.MY_GLOBAL we will get undefined as value.
assert.equal(global.MY_GLOBAL, undefined);

// Load the module.
var m1 = require('./module');

// Since the module is loaded also the code in the module was processed, i.e. MY_GLOBAL is defined with 0 at this point.
assert.equal(global.MY_GLOBAL, 0);
assert.equal(MY_GLOBAL, 0);

// Call the exported function by the module, i.e. myLocal and MY_GLOBAL are incremented by 1, i.e. myLocal and
// MY_GLOBAL is 0 but will be 1 after the call.
m1(0);
assert.equal(global.MY_GLOBAL, 1);

// Call the exported function by the module, i.e. myLocal and MY_GLOBAL are incremented by 1, i.e. myLocal and
// MY_GLOBAL is 1 but will be 2 after the call.
m1(1);
assert.equal(global.MY_GLOBAL, 2);

// Load the module a second time.
var m2 = require('./module');
// MY_GLOBAL is still 2 and not 0 as defined in the module, since require() does not execute the module's code a second
// time if it is already loaded, i.e. it is cached.
assert.equal(global.MY_GLOBAL, 2);
// Same here: since the module's code is not executed a second time also myLocal is still equal to 2
m2(2);
// After this call myLocal and MY_GLOBAL are incremted by 1, i.e. myLocal = MY_GLOBAL = 3.
assert.equal(global.MY_GLOBAL, 3);

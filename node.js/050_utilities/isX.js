// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/30/2015
// Description: Illustrates the usage of the function util.isArray, util.isRegExp, util.isDate and util.isError.
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
var util = require('util');

// util.isArray - Array.isArray
assert(util.isArray([]));
assert(util.isArray([1, '...']));
var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
assert(util.isArray(arr));
assert(!util.isArray({}));
assert(!util.isArray({'0': 0, '1': 1, '2': 2}));

// util.isRegExp
assert(util.isRegExp(/.*abc.*/));
assert(util.isRegExp(new RegExp('.*abc.*')));
assert(!util.isRegExp('.*abc.*'));
assert(!util.isRegExp({}));

// util.isDate
assert(util.isDate(new Date()));
assert(!util.isDate(Date()));
assert.equal(typeof Date(), 'string');
assert(!util.isDate('.*abc.*'));
assert(!util.isDate({}));

// util.isError
assert(util.isError(new Error()));
assert(util.isError(new ReferenceError()));
assert(!util.isError({}));

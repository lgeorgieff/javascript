// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/03/2015
// Description: Define some functions that are exported as a module.
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

// Definition of several functions that will be exported as a module.
function fancy_function() {
    for(var index = 0; index < arguments.length; ++index)
        console.log("fancy: " + arguments[index]);
}

function funky_function() {
    for(var index = 0; index < arguments.length; ++index)
        console.log("funky: " + arguments[index]);
}


function fancy_object() { }
fancy_object.prototype.fancy = fancy_function;
fancy_object.prototype.funky = funky_function;

// Define a global variable that will be bound to the global object and can be accessed from other modules if this
// module has already been loaded.
global_variable = 'global variable';
// Define a local variable that can be accessed only from this module.
var local_variable = 'local variable';

module.exports = exports = fancy_object;

assert(global.global_variable === 'global variable');
assert(global.local_variable === undefined);

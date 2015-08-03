// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/03/2015
// Description: Demonstrates the usage of util.deprecate.
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
var deprecate = require('util').deprecate;

// Define the function my_fun
function my_fun () {
    console.log('>> my_fun <<');
}

// Call deprecate on my_fun. It returns a modified function of my_fun that prints a message on the screen
deprecate(my_fun, 'my_fun is deprecated')();

console.log();

// Call my_fun again to show that my_fun itself was not modified
my_fun();

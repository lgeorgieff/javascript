// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/22/2015
// Description: Illustrates the difference between global and module scope.
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

// Define a global variable that is not only visible in this module but to the entire applicaiton via global.MY_GLOBAL.
global.MY_GLOBAL = 0;

// Define a module wide variable that is only visible in this module but not in the global scope.
var myLocal = 0;

module.exports = function(expectedMyLocal) {
    // Compare the variable myLocal with the passed argument.
    assert.equal(myLocal, expectedMyLocal);

    // Increment both the local and global variable.
    ++myLocal;
    ++global.MY_GLOBAL;
}

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/01/2015
// Description: Shows the relation between module.exports and exports.
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



var overrideExports = true;

// Define several functions inside this module.
function fun_1() { console.log('fun_1'); }
function fun_2() { console.log('fun_2'); }
function fun_3() { console.log('fun_3'); }


// If we enter this branch, fun_1 is added to module.exports. Afterwards, a new object is assigned to the variable
// exports which finally has no effect, since we override the reference to module.exports. When calling require(...)
// only fun_1 is exported.
if(overrideExports) {
    module.exports.fun_1 = fun_1;
    exports = {
        fun_2: fun_2,
        fun_3: fun_3
    };
}
// If we enter this branch, fun_1 is added to module.exports. Afterwards, fun_2 and fun_3 are added to the variable
// exports, so that the finally exported object includes fun_1, fun_2 and fun_3.
else {
    module.exports.fun_1 = fun_1;
    exports.fun_2 = fun_2;
    exports.fun_3 = fun_3;
}

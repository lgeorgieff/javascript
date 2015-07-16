// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/16/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS mode eliminating dead code.and performing object property flattening.
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

// Define an empty object.
var foo = {};

// Add the method bar to the empty object that uses the this keyword to add the property "value" to the bar object.
foo.bar = function(arg){ this.value = arg; };

// Call foo.bar and set the property foo.value to '...'.
foo.bar('...');

// Print the variable foo.value on the console.
console.log(foo.value);


// The result will be undefined.
// The reason for this is that the compiler flattens the objetc foo to be able to use shorter names, i.e. it will
// generate in the first step the following code for foo.bar:
// var foo$bar = function(a) { this.value = a; }
// This finally means "value" will be set to the global object since this does not refer anymore to foo.

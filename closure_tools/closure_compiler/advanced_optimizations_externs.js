// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/19/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS and non-compiled code is referenced by the compiled source file.
//
//              Node for getting the compiled script running you must provide the original definitions of the
//              referenced externals, i.e. in this example you have to provide a function defintion for
//              "external_function" and an object definition for "external_object" with the property "property"

// Compilation: ccompiler --warning_level=VERBOSE --compilation_level=ADVANCED_OPTIMIZATIONS --externs=externs.js
//              --js advanced_optimizations_externs.js
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


// Reference the external function "external_function".
var external_1 = external_function();
// Reference the property "property" from the external object "external_object".
var external_2 = external_object.property;
console.log('external_1: ' + external_1);
console.log('external_2: ' + external_2);

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/19/2015
// Description: Define several values like functions and objects that can be used during compilation with the clusure
//              compiler for a target source file which uses the values defined in here. These values can be referenced
//              by the origin name, i.e. the closure compiler does not rename them.
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


// Define a function that can be referenced inside a compiled JavaScript source file when this file is included via
// the --externs switch.
// The function does not need to be fully defined, i.e. an empty function body is fine for us, since we will have to
// provide the entire implementation for the final production code later.
function external_function() {}

// Define an object with the property 'property' that can be referenced inside a compiled JavaScript source file when
// this file is included via the --externs switch.
// We do not have to provide the full object implementation. The referenced parts in the compiled JavaScript source
// are enough. But for the production code we have to provide an implementation for every used property of this
// object.
var external_object = {
    property: 123
};

// Define the Node.js module.exports property that can be used to export functionality within a JavaScript source file
// that ius compiled by the closure compiler. It is mandatory to reference this file viw the --externs switch.
var module = {
    exports: {}
}

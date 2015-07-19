// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/19/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS and compiled code must be exported, i.e. function must be be renamed or
//              eliminated (dead code). This ensures the compatibility to other (non-compiled) files. In constrast to
//              the first example of exporting a Node.js module we use a extern for the Node.js module.exports object
//              property, i.e. we do not need a warning whitelist file anymore.
// Compilation: 
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


// Define a function that will be exported and so will not be deleted.
function funA() {
    console.log('>> funA()');
}

// Define a function that will not be exported and so will be deleted.
function funB() {
    console.log('>> funB()');
}

// Define the actual export, i.e. Node.js' module.export object is used to export funA. For disabling the renaming of
// the funA property it is assigned by a quoted string.
// To make the closure compiler capable of finding the module object and property we have to use an externs file with
// a corresponding declarion inside it.
module.exports['funA'] = funA;

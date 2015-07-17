// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/17/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS and compiled code must be exported, i.e. function must be be renamed or
//              eliminated (dead code). This ensures the compatibility to other (non-compiled) files.
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
// the exports and the funA property they are assigned by quoted strings.
// When compiled with the option --warning_level=VERBOSE, an error is thrown since the variable module is undefined.
// For this we have to use an warnings whitelist file.
// You can compile this script in the following way: java -jar compiler.jar --compilation_level=ADVANCED_OPTIMIZATIONS
// --formatting=PRETTY_PRINT --js advanced_optimizations_export.js --warning_level=VERBOSE
// --warnings_whitelist_file warnings_whitelist.txt
module['exports']['funA'] = funA;

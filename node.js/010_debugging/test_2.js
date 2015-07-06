// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/06/2015
// Description: Defines a function, exports it and sets a breakpoint.
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

// Define a function that has a breakpoint and export is.
function fun(arg1, arg2) {
    console.log('arg1: ' + arg1);
    // Define a breakpoint for the debugger, i.e. running node debug <script> will stop the execution here.
    debugger;
    console.log('arg2: ' + arg2);
}

module.exports = fun;

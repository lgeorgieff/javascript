// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/09/2015
// Description: Defines several functions and illustrates how "out"/"o" in the debugger works.
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


function level_3(arg1, arg2) {
    // Define a break point. If the debugger stops here and the user presses "out" / "o", the debugger will go to the
    // end of function level_2. After the next step out it will go to the end of function level_1, ...
    debugger;
    return arg1 + arg2;
}

function level_2(arg1) {
    return level_3(arg1, 3);
}

function level_1() {
    return level_2(2);
}

function main() {
    console.log(level_1());
}


main();

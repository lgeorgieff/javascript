// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/14/2015
// Description: Illustrates the usage of signal handling in Node.js.
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

// Listen on stdin to prevent Node.js to exit.
process.stdin.resume();

// Listne to SIGINT signals.
process.on('SIGINT', function () {
    console.log('on "SIGINT"');
    console.log('Press CTRL-D to exit');
});

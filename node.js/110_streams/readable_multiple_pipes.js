// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/17/2015
// Description: Illustrate the usage of pipes between streams.
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


var createWriteStream = require('fs').createWriteStream;

// Create two writable streams that abstract a file.
var destination1 = createWriteStream('destination1.txt');
var destination2 = createWriteStream('destination2.txt');

// Pipe the stdin stream into the prior created writable streams.
process.stdin.pipe(destination1);
process.stdin.pipe(destination2);

console.log('enter input that should be piped to the files "destinations1.txt" and "destinations2.txt"');

// Create a timer that unpipes the writable destination1 from stdin and closes it.
setTimeout(function () {
    process.stdin.unpipe(destination1);
    destination1.end();
}, 3000);

// Create a timer that unpipes the writable destination2 from stdin and closes it.
setTimeout(function () {
    process.stdin.unpipe(destination2);
    destination2.end();
}, 5000);

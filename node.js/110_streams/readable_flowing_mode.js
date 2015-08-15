// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/15/2015
// Description: Shows three examples how to set a readable stream into flowing mode:
//              * Registers a data handler on stdin to set stdin into flowing mode.
//              * Calls the resume() method on stdin to set stdin into flowing mode.
//              * Pipes stdin by calling the pipe(method) to stdout to set stdin into flowing mode.
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

var DELAY = 3000;

var ADD_DATA_HANDLER = 0;
var USE_RESUME = 1;
var USE_PIPE = 2;

var SHOW_EXAMPLE = ADD_DATA_HANDLER;
if (process.argv.length === 3 && !isNaN(process.argv[2]))
    SHOW_EXAMPLE = Number(process.argv[2]);

if (SHOW_EXAMPLE === ADD_DATA_HANDLER) {
    // When registering a data handler the stream is set to flowing mode.
    process.stdin.on('data', function (chunk) {
        process.stdout.write('>> ');
        console.log(chunk);
    });

    // By default a buffer is passed to the consumer, i.e. getting a string requires to set the encoding.
    // In this example a buffer is returned in the first 3 seconds, finally an utf-8 string is returned after calling
    // setEncoding('utf8').
    setTimeout(function () {
        process.stdin.setEncoding('utf8');
    }, DELAY);
} else if (SHOW_EXAMPLE === USE_RESUME) {
    // Open the steam flow explicitely. If no data handlers are registered, data can be lost.
    process.stdin.resume();
    // Register a data handler with 3 seconds delay, i.e. data entered in the first three seconds is lost.
    setTimeout(function () {
        process.stdin.on('data', function (chunk) {
            console.log('>> ' + chunk);
        });
    }, DELAY);
} else if (SHOW_EXAMPLE === USE_PIPE) {
    process.stdin.pipe(process.stdout);
} else {
    // Let the process.stdin stream in paused mode.
}

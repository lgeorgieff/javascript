// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/24/2015
// Description: Illustrates the usage of process.stdin and process.stdout.
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

// Set the encoding of stdin
process.stdin.setEncoding('utf8');

// Define which example is used - the old-style data event or the new style read function.
var data_event = !false;

// Use the process.stdout stream to override the console.log function by an own function.
var console = {
    log: function (data) {
        process.stdout.write('>> ' + data);
    }
};


if (data_event) {
    // Register a callback for the 'data' event that prints the data from stdin to stdout.
    var callback = function (chunk) {
        console.log(chunk);
    };
    process.stdin.on('data', callback);

    // Call end() on process.stdin. Remove the registered callback after 5 seconds. This leads to the fact that the
    // application will end after the timout as executed after the user presses ENTER.
    setTimeout(function () {
        process.stdin.end();
        process.stdin.removeListener('data', callback);
    }, 5000);
} else {
    // Register a callback for the 'readable' event that reads from stdin and prints the data to stdout.
    var callback = function () {
        var chunk = process.stdin.read();
        if (null !== chunk) console.log(chunk);
    };
    process.stdin.on('readable', callback);

    // Remove the registered callback after 5 seconds. This leads to the fact that the application will end after
    // the timout as executed after the user presses ENTER.
    setTimeout(function () {
        process.stdin.removeListener('readable', callback);
    }, 5000);
}

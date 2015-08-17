// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/17/2015
// Description: Illustrates the usage of events from Node.js writable streams.
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


var destination = require('fs').createWriteStream('destination.txt');

// The drain event is fired when writable.write() returns false and the writable stream wants to indicate that it is
// appropriate to write data into this stream again.
destination.on('drain', function () {
    console.log('destination.on(\'drain\'): now you can write more data into the stream');
});

// The finish event is fired when writable.end() was called and all data has been written into the abstracted source.
destination.on('finish', function () {
    console.log('destination.on(\'finish\'): destination.end() was called');
});

// The pipe event is fired when the writable stream is attached to a readable stream by the readable.pipe(writable)
// method.
destination.on('pipe', function () {
    console.log('destination.on(\'pipe\'): readable.pipe(destination) was called');
});

// The unpipe event is fired when the writable stream is dettached from a readable stream by the
// readable.unpipe(writable) method.
destination.on('unpipe', function () {
    console.log('destination.on(\'unpipe\'): readable.unpipe(destination) was called');
    destination.end();
});

// The error event is fired when an error occurs during a writing or piping data into this writable stream.
destination.on('error', function () {
    console.log('destination.on(\'error\'): ' + err);
});

process.stdin.pipe(destination);

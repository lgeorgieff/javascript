// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/16/2015
// Description: Illustrates the usage of events from Node.js readable streams.
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

var createReadStream = require('fs').createReadStream;
var stream = createReadStream(__filename);
stream.setEncoding('utf8');

// Is fired when a data chunk is available. With the registered handler the data can be consumed directly.
// Will set the stream to 'flowing mode' is not explicitly set to paused mode.
var streamContent = '';
stream.on('data', function (chunk) {
    console.log('stream "data"');
    streamContent += chunk;
});

// Is fired when there will be no more data to read.
stream.on('end', function () {
    console.log('stream "end" >> streamContent.length: ' + streamContent.length);
});

// Is fired when the source (descriptor) of the stream is closed.
stream.on('close', function () {
    console.log('stream "close"');
});

// Is fired when an error occurred during data reception from the source.
stream.on('error', function (err) {
    console.log('stream "error"');
    console.log('error: ' + err);
    console.log('streamContent.length: ' + streamContent.length);
});

// Is fired when a data chunk can be read from the stream.
stream.on('readable', function () {
    console.log('stream "readable"');
});

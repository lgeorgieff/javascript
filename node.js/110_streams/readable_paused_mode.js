// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/16/2015
// Description: Illustrate how to get the data from the stream buffer in paused mode.
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

var assert = require('assert');

// Create stream.
var createReadStream = require('fs').createReadStream;
var stream = createReadStream(__filename);
stream.setEncoding('utf8');


// Set stream to flowing mode and get stream content via 'data' event handler and via pipe.
var streamContent = '';
var dataConsumer = function (chunk) {
    streamContent += chunk;
};
stream.on('data', dataConsumer);

stream.pipe(process.stdout);


// Set stream to pause mode. To have a guarantee to get into the pause mode we remove all 'data' event handlers and
// all pipe destinations. In this implementation data could be lost between
// the calls stream.removeListener('data', dataConsumer); and stream.pause();.
stream.removeListener('data', dataConsumer);
stream.unpipe(process.stdout);
stream.pause();

// Ensure that we are in paused mode.
assert(stream.isPaused());


// Implement the function that pulls the the data from the buffer of the stream explicitly.
var counter = 0;
function readContent () {
    var chunk;
    while(null !== (chunk = stream.read(123))) {
        console.log('stream.read() [' + counter +']: ' + chunk.length);
        ++counter;
    }
}

stream.on('readable', readContent);

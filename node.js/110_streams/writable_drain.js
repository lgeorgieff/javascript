// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/19/2015
// Description: Illustrates how to write into a writable stream and how to use the drain event.
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

// Create the data that will be written into the writable stream.
var alphabet = 'abcdefghijklmnopqrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var data = '';
for(var i = 0; i !== 100000; ++i)
    for(var j = 0; j !== alphabet.length; ++j)
        data += alphabet[j];

// Create the writable stream.
var destination = require('fs').createWriteStream('destination.txt');

// Write the data the first time to the stream and register a callback that will be printed after the current chunk
// was written to the source abstracted by the stream.
var flushed = destination.write(data, 'utf8', function () {
    console.log('data(1) was flushed on destination');
});

if (flushed) {
    // If flushed is true, the entire chunk was written to the source abstracted by the stream.
    // In this case we directly call the end mehtod of this stream and write the data a second time into the abstracted
    // source before it is closed.
    console.log('data(1) was flushed directly on destination');
    destination.end(data, 'utf8', function () {
        console.log('destination finished');
    });
} else {
    // If flushed is false, no all data could be writte to the abstracted source and is buffered. so we wait until the
    // drain event is fired, which means all data was eventually written into the abstracted source, and we can write
    // new data to the stream without filling the stream's buffer more than needed.
    // Finally, data is written a second time into the stream.
    destination.once('drain', function () {
        console.log('destination#drain: write finished writing data(1)');
        var flushed2 = destination.write(data, 'utf8', function () {
            console.log('data(2) was flushed on destination');
        });
        // Here we check again if the data was written directly to the stream or if it is buffered. Finally, we call end() and write data a last time to the stream.
        if (flushed2) {
            console.log('data(2) was flushed directly on destination');
            destination.end(data, 'utf8', function () {
                console.log('destination finished');
            });
        } else {
            destination.once('drain', function () {
                console.log('destination#drain: write(2) second time');
                destination.end(data, 'utf8', function () {
                    console.log('destination finished');
                });
            });
        }
    });
}

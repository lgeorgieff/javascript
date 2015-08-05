// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/05/2015
// Description: Illustrates the usage of Node.js' console object.
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
var messages = ['My message 0', 'My message 1', 'My message 2', 'My message 3', 'My message 4'];


// Use the function 'log' to write to stdout.
console.log('=== console.log ============');
console.log(messages);
console.log();
console.log(messages[0], messages[1], messages[2], messages[3], messages[4]);

// Use the function 'info' to write to stdout. Same as console.log.
console.log();
console.log('=== console.info ===========');
console.info(messages);
console.log();
console.info(messages[0], messages[1], messages[2], messages[3], messages[4]);

// Use the function 'error' to write to stderr.
console.log();
console.log('=== console.error ==========');
console.error(messages);
console.log();
console.error(messages[0], messages[1], messages[2], messages[3], messages[4]);

// Use the function 'warn' to write to stdout. Same as console.error.
console.log();
console.log('=== console.warn ===========');
console.warn(messages);
console.log();
console.warn(messages[0], messages[1], messages[2], messages[3], messages[4]);

// Use the function 'dir' to print the internal structure of an object. console.dir uses util.inspect to generate the
// final string.
console.log();
console.log('=== console.dir ============');
console.dir(messages);
console.log();
console.dir(messages, {showHidden: true, colors: true, depth: null});

// Use the functions 'time' and 'timeEnd' to measure a time span between to operations.
console.log();
console.log('=== console.time ===========');
console.time('task 0');
console.time('task 1');
console.timeEnd('task 0');
console.timeEnd('task 1');
assert.throws(function(){ console.timeEnd('task 2'); }, Error,
              'console.timeEnd(\'task 2\'); must throw an error since no corresponding console.time call is defined!');

// Use the function 'trace' to write to stderr and print there a stack trace.
console.log();
console.log('=== console.trace ==========');
console.trace(messages);
console.log();
console.trace(messages[0], messages[1], messages[2], messages[3], messages[4]);

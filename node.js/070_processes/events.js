// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/14/2015
// Description: Illustrates the usage of events of the process property in Node.js.
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


// Is called if the process is exiting.
process.on('exit', function (exitCode) {
    console.log('on "exit": ' + exitCode);

    // This will not be called, since it is too late to add something to the event loop
    setTimeout(function () {
        console.log('on "exit": Too late');
    }, 0);
});


// Is called when Node.js has an empty event loop and would exit as next.
// I.e. this event is fired before 'exit'.
var alreadySet = false;
process.on('beforeExit', function (exitCode) {
    // Set the timeout only once, otherwise this woudl be an infinite loop, since everyone
    // the event loop is empty the setTimeout function would be called.
    if (!alreadySet) {
        setTimeout(function () {
            console.log('on "beforeExit": ' + exitCode);
            alreadySet = true;
        }, 0);
    }
});


// Is called everytime when an uncaught exception is thrown.
// The default behaviour is to print the stacktrace and exit the Node.js process with an error code.
// This handler just prints a short message on stdout and exists with the return code 0.
process.on('uncaughtException', function (err) {
    console.log('on "uncaughtException": ' + err);
});
nonExistingFunction();

// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/27/2015
// Description: Demonstrates how to use the REPL module of Node.js.
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

// Create an options object for the REPL instance that will be started.
var options = {
    // The string for the prompt on stdin.
    prompt: '>> $ ',
    // The input stream which is process.stdin as default (here explicitly set).
    input: process.stdin,
    // The output stream which is process.stdout as default (here it points to a file stream).
    output: require('fs').createWriteStream('./out.txt', {encoding: 'utf8'}),
    // We do not define a special eval function that evaluates each line but we take the default async-eval function.
    //eval: eval,
    // If set to true, stdout is treated as a TTY and supports ANSI/VT100 escape codes.
    terminal: false,
    // We define that the writer function should use colors on the screen.
    useColors: true,
    // If set to true, the global object is used. Otherwise a different context is used for evaluating the passed
    // JavaScript.
    useGlobal: false,
    // If set to true, return values of the type undefined are ignored and not printed on the specified output.
    ignoreUndefined: true,
    // The function that is invoked for each return value that is printed on output.
    writer: require('util').inspect
};

// Start the REPL instance.
var repl = require('repl').start(options);

// Register a callback for the exit event of the REPL instance. This is set when the user presses CTRL-D.
// CTRL-C, CTRL-C calls SIGTERM, i.e. this function is not called in this case.
repl.on('exit', function () {
    console.log('REPL will exit now!');
});

// Register a callback for the reset event which is fired when the context is reset, i.e. '.clear' or '.break'.
repl.on('reset', function (context) {
    console.log('REPL was reset!');
});

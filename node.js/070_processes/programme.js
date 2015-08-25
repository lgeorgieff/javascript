// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 08/25/2015
// Description: Illustrates the usage of several functions of the process object that control the application itself.
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

var abortUngracefully = false;

function nl () {
    console.log();
}

// Print all command line arguments passed to the script.
nl();
for(var i = 0; i != process.argv.length; ++i)
    console.log('process.argv[' + i + ']: ' + process.argv[i]);

// Print the full path of the executable that runs this script.
nl();
console.log('process.execPath: ' + process.execPath);

// Print all Node.js specific command line arguments passed by the user.
nl();
for(var i = 0; i != process.execArgv.length; ++i)
    console.log('process.execArgv[' + i + ']: ' + process.execArgv[i]);

// Print, change and print the working directory.
nl();
console.log('process.cwd(): ' + process.cwd());
process.chdir('..');
console.log('process.cwd(): ' + process.cwd());

// Print the environment variables of the current process. Changes has no effect on the outer world.
nl();
console.log('process.env:');
console.dir(process.env, {showHidden: true});

// Print the process' group ID.
nl();
console.log('process.getgid(): ' + process.getgid());

// Print the process' user ID.
nl();
console.log('process.getuid(): ' + process.getuid());

// Print the Node.js version that is executing this script.
nl();
console.log('process.version: ' + process.version);

// Print the version of Node.js and its dependencies.
nl();
console.log('process.versions:');
console.dir(process.versions);

// Print the configuration options that were used to compile the node executable that runs the current script.
nl();
console.log('process.config:');
console.dir(process.config);

// Print the memory usege of the current process.
nl();
console.log('process.memoryUsage():');
console.dir(process.memoryUsage());

if (abortUngracefully) {
    // Abort the current process and create a core dump.
    nl();
    process.abort();
} else {
    // Exit the process with the exit code 123.
    process.exitCode = 123;
    process.exit(); // process.exit(123) is also possible
}

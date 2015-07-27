// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/27/2015
// Description: Demonstrates the usage of util.debuglog.
// Run: NODE_DEBUG=foo,bar node debuglog.js
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


var debuglogFoo = require('util').debuglog('foo');
var debuglogBar = require('util').debuglog('bar');


var valFoo = 123;
var valBar = 456;

debuglogFoo('output from debuglogFoo: valFoo: ' + valFoo);
debuglogBar('output from debuglogBar: valBar: ' + valBar);

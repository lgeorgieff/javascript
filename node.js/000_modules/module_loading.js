// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/03/2015
// Description: Load some self-defined modules and check their members.
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


// Load and check a single-file, self-defined module.
var module = require('./module_definition.js');
assert(global.global_variable === 'global variable');
assert(global.local_variable === undefined);
assert(typeof module === 'function');

var moduleInstance = new module();
assert(typeof moduleInstance.fancy === 'function');
assert(typeof moduleInstance.funky === 'function');


// Load and check a self-defined folder module.
var folderModule = require('./folder_module');
assert(folderModule.referenced !== undefined);
assert(folderModule.main !== undefined);


// Load and check a self-defined module for caching.
var caching_1 = require('./caching');
assert(global.caching === 1);
var caching_2 = require('./caching');
assert(global.caching === 1);

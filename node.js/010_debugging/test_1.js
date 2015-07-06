// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/06/2015
// Description: Loads a module and runs the exported function which contains a breakpoint, i.e. started with
//              node debug test.js the debugger stops at the defined breakpoint.
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


var dependency = require('./test_2');

dependency(12, 34);

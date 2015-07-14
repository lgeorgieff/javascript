// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/14/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS mode and using global properties.
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


//
// NOTE: please insert this code snippet into the repl of a running Node.js instance. If this file is loaded via
//       require etc. the global object is not available in the module definition itself, i.e. this example will fail.
//


// This is how it should be done, i.e. in the compiled code global.foo is renamed to global.a in both cases.
global.foo = {};
console.log(global.foo);

// This is how it should not be done, i.e. for the compiler bar and global.bar are two diffeerent values.
// Finally var bar is treated as dead code and will not be part of the compiled code and global.bar is renamed to
// global.b.
var bar = {
    value: 123
};
console.log(global.bar);


// Is compiled to:
// global.a={};console.log(global.a);console.log(window.b);

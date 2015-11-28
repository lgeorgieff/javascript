// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 11/28/2015
// Description: Illustrates garbage collection in JavaScript/node.js.
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

'use strict';

function createName (name, description) {
    return {name, description};
}

function normalizeName (name) {
    name.name = name.name.toLowerCase();
    name.description = name.description.toLowerCase();
    return name;
}

function setProcessName (processName) {
    let name = processName;
    global.process.name = normalizeName(name);
    console.dir(global.process.name);
}

// Create a name object and set it as value of the global object's process property.
setProcessName(createName('name I', 'the first name of this process'));

// Create another name object, create a local reference for it and set it as value of the global object's process property.
// Here the first name object that we have created will be disposed by the garbage collector, since
// no other reference exists to this object.
let processName = createName('name II', 'the second name of this process');
setProcessName(processName);

// Create another name object and set it as value of the global object's process property.
// Here the second name object that we have created will not be disposed by the garbage collector,
// since the loval reference called "processName" still exists to this object.
setProcessName(createName('name III', 'the third name of this process'));

// Set the reference "processName" to the name object to undefined (or null). After this operation
// no reference to the name object exists, i.e. the garbage collector can delete it.
processName = undefined;

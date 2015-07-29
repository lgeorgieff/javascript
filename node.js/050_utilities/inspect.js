// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/29/2015
// Description: Illustrates the usage of the function util.inspect.
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
var inspect = require('util').inspect;

// Define the object that will be inspected with util.inspect().
var testObject = {
    // Define some properties referencing value types.
    value1: 1.1,
    value2: '2.22',
    // Define a property referencing an object type.
    value3: {
        // Define some properties referencing value types.
        value1: 0.01,
        value2: 2,
        // Define a property referencing an object type, which in turn contains value types and one object type.
        value3: [0, 1, 2, [3, 4]]
    },
    // Define an own inspect method that can be used by util.inspect(). This method again calls the util.inspect()
    // function but with the option customInspect = false.
    inspect: function(depts, options) {
        assert(depts === 2 || depts === null);
        assert(options);
        assert.deepEqual(options.seen, []);
        assert(options.colors === true || options.colors === false);
        assert(options.showHidden === true || options.showHidden === false);
        assert(options.depth === 2 || options.depth === null);
        assert(options.customInspect);
        return inspect(testObject, {depth: 2, showHidden: true, customInspect: false, colors: true});
    }
};

// Define a non-enumerable/hidden property.
Object.defineProperty(testObject, '_privateProperty', {
    value: -1,
    enumerable: false
});
// Define a circular reference that points to itself.
testObject.selfReference = testObject;
// Define a circular reference from the nested object that points to its parent object.
testObject.value3.value4 = testObject;


// Print first output from inspect when called with default options, i.e.
//  * depths = 2
//  * showHidden = false
//  * colors = false
//  * customInspect = true
console.log();
console.log();
console.log('=== default options ===================================================================================');
console.log(inspect(testObject));


// Print second output from inspect when called with custom options, i.e.
//  * depths = null (infinite)
//  * showHidden = tue
//  * colors = true
//  * customInspect = true
console.log();
console.log();
console.log('=== inidividual options[customInspect: true] ==========================================================');
var options = {
    depth: null,
    showHidden: true,
    colors: true
};
console.log(inspect(testObject, options));


// Print third output from inspect when called with custom options and custom colors, i.e.
//  * depths = null (infinite)
//  * showHidden = true
//  * colors = true
//  * customInspect = false
//  * inspect.styles.special = 'red'
console.log();
console.log();
console.log('=== individual options[customInspect: false][styles.special = \'red\'] ================================');
require('util').inspect.styles.special = 'red';

options = {
    depth: null,
    showHidden: true,
    colors: true,
    customInspect: false
};
console.log(inspect(testObject, options));

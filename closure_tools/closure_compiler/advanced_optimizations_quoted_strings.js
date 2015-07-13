// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/13/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS mode and using strings to refer to object properties.
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


// Define a color object that contains the properties red, green and blue.
var color = {
    red: 1,
    green: 2,
    blue: 4
};

// Define a car object that contains several properties and serves as main example in this script.
var x6 = {
    brand: 'BMW',
    model: 'X6 xDrive50i',
    power: 306
};

// Define the property color via a string to ensure that the closure compiler will not change the name of the property.
x6['color'] = color.blue;

// Define a function that calls the object properties of x6.
function printCarToConsoleValid(car) {
    console.log('Brand: ' + car.brand);
    console.log('Model: ' + car.model);
    console.log('Power (PS): ' + car.power);
    console.log('Is blue: ' + isBlue(car));
}

// Define a function that calls the object properties of x6 by using quoted strings.
function printCarToConsoleInvalid(car) {
    // Will print undefined since car.brand will be renamed.
    console.log('Brand: ' + car['brand']);
    // Will print undefined since car.model will be renamed.
    console.log('Model: ' + car['model']);
    // Will print undefined since car.power will be renamed.
    console.log('Power (PS): ' + car['power']);
    // Will print true since car['color'] is set as string and string values are not modefied by the closure compiler.
    console.log('Is blue: ' + isBlueStr(car));
}

// Check for the color property of the passed object. Will return always true in this script.
function isBlue(car) {
    return car.color === color.blue;
}

// Check for the color property of the passed object by using a quoted string. Will return true in this script since
// the property is defined by using a quoted string as well.
function isBlueStr(car) {
    return car['color'] === color.blue;
}

console.log('\nprintCarToConsoleValid(car):');
printCarToConsoleValid(x6);

console.log('\nprintCarToConsoleInvalid(car):');
printCarToConsoleInvalid(x6);

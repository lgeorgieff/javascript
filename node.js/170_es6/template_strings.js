// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/10/2015
// Description: Illustrate the ES6 feature "template strings".
// cmd: node --es-staging template_strings.js
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

let assert = require('assert');

// A template string without any expression, i.e. corresponds to a normal string definition.
let str1 = `Hello World!`
assert.strictEqual(str1, 'Hello World!');

// A template string without any expression but with line breaks, i.e. corresponds to a normal string definition with '\n' instead of line breaks.
let str2 = `Hello
  World
!!!`
assert.strictEqual(str2, 'Hello\n  World\n!!!');

// A template string definition which uses two expressions:
// 1) The Date function and an assignment
// 2) The variable name
// This string template corresponds to the following string definition:
// Date() + ': Hello \'' + name + '\'!'
let usedDate;
function sayHello (name) {
    return `${usedDate = Date()}: Hello '${name}'!`;
}
assert.strictEqual(sayHello('Lukas'), usedDate + ': Hello \'Lukas\'!');

var a = 8;
var b = 12;
// A function that can be used as tag in tagged string templates, i.e. this function generates a string from the string
// template when used as tag.
// Therefore this function gets an array with all string values and all expressions as further arguments passed. Even
// if the first value of a template string is an expression a tag function gets a string value (it is an empty string,
// i.e. '') as first argument. This means that the array (here strings) starts with an ''.
function processTaggedString(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length || i < values.length; ++i) {
        if (i < strings.length) result += strings[i];
        if (i < values.length) result += values[i];
    }
    return result;
}

let str3 = processTaggedString`Hello ${a + b} World ${a * b}!`;
assert.strictEqual(str3, 'Hello 20 World 96!');
let str4 = processTaggedString`Hello ${a + b} World ${a * b}!${a / b}`;
assert.strictEqual(str4, 'Hello 20 World 96!' + (8/12));
let str5 = processTaggedString`${a / b}Hello ${a + b} World ${a * b}!`;
assert.strictEqual(str5, (8/12) + 'Hello 20 World 96!');
let str6 = String.raw`${a / b}Hello ${a + b} World ${a * b}!`;
assert.strictEqual(str6, (8/12) + 'Hello 20 World 96!');

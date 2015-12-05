// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/05/2015
// Description: Illustrates how to use profiling in node.js.
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

const SEPARATORS = [
    '.',
    ':',
    ',',
    ';',
    '|'
];

const TEST_DATA = 'ab.cde:fg,h;ijklmnopqrstuvw||||xyzABCDEFG|H,I,J.K:LM,N;OPQRSTUVW.X,YZ;';

function multisplitFor (str, separators) {
    let result = [str || ''];
    if (!separators) return result;

    let iterativeResult = [];
    for (let separatorPos = 0; separatorPos !== separators.length; ++separatorPos) {
        for (let resultPos = 0; resultPos !== result.length; ++resultPos) {
            let currentSplit = result[resultPos].split(separators[separatorPos]);
            for (let currentSplitPos = 0; currentSplitPos !== currentSplit.length; ++currentSplitPos) {
                iterativeResult.push(currentSplit[currentSplitPos]);
            }
        }
        result = iterativeResult;
        iterativeResult = [];
    }
    return result;
}

function multisplitForOf (str, separators) {
    let result = [str || ''];
    if (!separators) return result;

    let iterativeResult = [];
    for (let separator of separators) {
        for (let resultItem of result) {
            let currentSplit = resultItem.split(separator);
            for (let currentItem of currentSplit) iterativeResult.push(currentItem);
        }
        result = iterativeResult;
        iterativeResult = [];
    }
    return result;
}

function multisplitForEach (str, separators) {
    let result = [str || ''];
    if (!separators) return result;

    let iterativeResult = [];
    separators.forEach((separator) => {
        result.forEach((resultItem) => {
            let currentSplit = resultItem.split(separator);
            currentSplit.forEach((currentItem) => {
                iterativeResult.push(currentItem);
            });
        });
        result = iterativeResult;
        iterativeResult = [];
    });
    return result;
}

function testFor (splitter, iterations, testName) {
    console.time(testName);
    for (let i = 0; i !== iterations; ++i) {
        splitter(TEST_DATA, SEPARATORS);
    }
    console.timeEnd(testName);
}

function main () {
    let iterations = 100000;
    testFor(multisplitFor, iterations, 'multisplitFor');
    testFor(multisplitForOf, iterations, 'multisplitForOf');
    testFor(multisplitForEach, iterations, 'multisplitForEach');
}

main();

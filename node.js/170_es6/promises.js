// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 10/09/2015
// Description: Illustrate the ES6 feature "Promise".
// cmd: node --es-staging promises.js
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

/**
 * The fs module for file system access.
 */
let fs = require('fs');
/**
 * The util module which offers the required inspect method.
 */
let util = require('util');
/**
 * Th assert module which offers several functions for checking application state.
 */
let assert = require('assert');

/**
 * An array which contains all available characters that are offered in this module by {@link randomString}.
 *
 * @type {Array<string>}
 */
let CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
/**
 * Generate a random string of a given length.
 *
 * @returns {string} The generated string based on {@link CHARACTERS}.
 *
 * @param {number=} length The string length of the generated string. The default value is <tt>0</tt>.
 */
function randomString(length) {
    let result = '';
    let normalizedLength = length;
    if (typeof normalizedLength !== 'number') normalizedString = 0;
    for(let i = 0; i !== length; ++i) result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    return result;
}

/**
 * Delays a passed function to simulate asynchronous behavior.
 *
 * @param {number} messageLength The length of the string that will be generated asynchronously via {@link randomString}.
 * @param {number} errorRate A percentage number (0 - 100) that indicates the rate of artificially generating errors
 *        in the asynchronous call. I.e. the given error-first callback will invoked with the error instance.
 * @param {function(Error, string): void} cb The callback which will be executed asynchronously.
 */
function asyncCall(messageLength, errorRate, cb) {
    let delay = Math.floor(Math.random() * 5001);
    let generateError = Math.floor(Math.random() * 100 + 1) < errorRate;
    let generatedMessage = randomString(messageLength);
    setTimeout(() => {
        if (generateError) cb(new Error('Oops something went wrong!'), undefined);
        else cb(undefined, generatedMessage);
    }, delay);
}

/**
 * Generates a promise for a given asynchronous function.
 *
 * @returns {Promise} The generated promise for the given asynchronous function.
 *
 * @param {function(...*): *} asyncFunction The asynchronous function for which the returned promise will be generated.
 * @param {Array<*>} args The arguments that are passed to the asynchronous function when it is called.
 * @param {boolean} errorFirstCallback <tt>true</tt> if the passed asynchronous function takes a callback that is an
 *        error-first callback.
 */
function promisify(asyncFunction, args, errorFirstCallback) {
    return new Promise((resolve, reject) => {
        let cb;
        if (!errorFirstCallback) {
            cb = function(ok) {
                resolve(ok);
            };
        } else {
            cb = function(err, ok) {
                if (err) reject(err);
                else resolve(ok);
            };
        }
        let asyncArguments = args || [];
        if (!(asyncArguments instanceof Array)) asyncArguments = [asyncArguments];
        asyncFunction(...asyncArguments, cb);
    });
}

/**
 * A shortcut function for printing a message to stdout.
 *
 * @param {string} The message that will be printed to stdout.
 */
function print (message) {
    console.log();
    console.log(message);
    console.log();
}

let asyncCallOk;
let asyncCallError;
// Invokes an asynchronous function without using a promise, i.e. a callback must be passed.
asyncCall(18, 50, function(err, message) {
    if (err) {
        asyncCallError = err;
        print('async err: ' + err);
    } else {
        asyncCallOk = message;
        print('async message: ' + message);
    }
});

let promisifyAsyncCallOk;
let promisifyAsyncCallError;
// Generates a promise that will either be in rejected or fulfilled state.
promisify(asyncCall, [30, 50], true)
    .then((message) => {
        promisifyAsyncCallOk = message;
        print('promisfyAsyncCall message: ' + message);
    })
    .catch((err) => {
        promisifyAsyncCallError = err;
        print('promisfyAsyncCall err: ' + err);
    });

let promisifyFsExistsOk;
let promisifyFsExistsError;
// Generates a promise that will be in fulfilled state.
promisify(fs.exists, [__filename])
    .then((exists) => {
        promisifyFsExistsOk = exists;
        print('promisfy fs.exists result: ' + exists);
    })
    .catch((err) => {
        promisifyFsExistsError = err;
        print('promisfy fs.exists err: ' + err);
    });

let promisifyFsStatOk;
let promisifyFsStatError;
// Generates a promise that will either be in rejected or fulfilled state.
promisify(fs.stat, [__filename], true)
    .then((stats) => {
        promisifyFsStatOk = stats;
        print('promisfy fs.stat result: ' + util.inspect(stats));
    })
    .catch((err) => {
        promisifyFsStatError = err;
        print('promisfy fs.stat err: ' + err);
    });

let promisifyAllAsyncCall0Ok;
let promisifyAllAsyncCall0Error;
// Generates a promise that will wait until all passed promises will be evaluated, i.e. either all promises will be in
// fulfilled state or the first promise will be in rejected state. The argument that is passed to the then() function
// is an array with all result from the evaluated promises. The argument to the catch() function is the thrown error
// object.
// In this example the promises must all evaluate to the fulfilled state (errorRate is set to 0).
Promise.all([promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 0], true),
             promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 0], true)])
    .then((results) => {
        promisifyAllAsyncCall0Ok = results;
        print('Promise.all results: ' + results);
    })
    .catch((err) => {
        promisifyAllAsyncCall0Error = err;
        print('Promise.all error: ' + err);
    });

let promisifyAllAsyncCall100Ok;
let promisifyAllAsyncCall100Error;
// Generates a promise that will wait until all passed promises will be evaluated, i.e. either all promises will be in
// fulfilled state or the first promise will be in rejected state. The argument that is passed to the then() function
// is an array with all result from the evaluated promises. The argument to the catch() function is the thrown error
// object.
// In this example one promise will evaluate to rejected state (errorRate is set to 100 in one of the promises.)
Promise.all([promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 0], true),
             promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 100], true)])
    .then((results) => {
        promisifyAllAsyncCall100Ok = results;
        print('Promise.all results: ' + results);
    })
    .catch((err) => {
        promisifyAllAsyncCall100Error = err;
        print('Promise.all error: ' + err);
    });

let promisifyRaceAsyncCall0Ok;
let promisifyRaceAsyncCall0Error;
// Generates a promise that will wait until the first promise will evaluate to either fulfilled or rejected state. The
// argument to the then() function is the result of the first evaluated promise. The argument to the catch() function
// is the error object of the rejected promise.
// In this example the promises must all evaluate to the fulfilled state (errorRate is set to 0).
Promise.race([promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 0], true),
             promisify(asyncCall, [30, 0], true), promisify(asyncCall, [30, 0], true)])
    .then((results) => {
        promisifyRaceAsyncCall0Ok = results;
        print('Promise.race results: ' + results);
    })
    .catch((err) => {
        promisifyRaceAsyncCall0Error = err;
        print('Promise.race error: ' + err);
    });

let promisifyRaceAsyncCall100Ok;
let promisifyRaceAsyncCall100Error;
// Generates a promise that will wait until the first promise will evaluate to either fulfilled or rejected state. The
// argument to the then() function is the result of the first evaluated promise. The argument to the catch() function
// is the error object of the rejected promise.
// In this example all promises will evaluate to rejected state (errorRate is set to 100 in all promises.)
Promise.race([promisify(asyncCall, [30, 100], true), promisify(asyncCall, [30, 100], true),
             promisify(asyncCall, [30, 100], true), promisify(asyncCall, [30, 100], true)])
    .then((results) => {
        promisifyRaceAsyncCall100Ok = results;
        print('Promise.race results: ' + results);
    })
    .catch((err) => {
        promisifyRaceAsyncCall100Error = err;
        print('Promise.race error: ' + err);
    });

// Check the results of the asynchronous calls before this process is exiting and after all asynchronous functions
// are evaluated.
process.on('beforeExit', function (code) {
    assert(typeof asyncCallOk === 'string' || asyncCallError);
    if (typeof asyncCallOk === 'string') assert.strictEqual(asyncCallOk.length, 18);
    else assert(asyncCallError instanceof Error);

    assert(typeof promisifyAsyncCallOk === 'string' || promisifyAsyncCallError);
    if (typeof promisifyAsyncCallOk === 'string') assert.strictEqual(promisifyAsyncCallOk.length, 30);
    else assert(promisifyAsyncCallError instanceof Error);

    assert.strictEqual(typeof promisifyFsExistsOk, 'boolean');
    assert.strictEqual(promisifyFsExistsOk, true);
    assert.strictEqual(promisifyFsExistsError, undefined);

    assert(typeof promisifyFsStatOk || promisifyFsStatError);
    if (promisifyFsStatOk) assert.strictEqual(promisifyFsStatOk.isFile(), true);
    else assert(promisifyFsStatError instanceof Error);

    assert(promisifyAllAsyncCall0Ok instanceof Array);
    assert.strictEqual(promisifyAllAsyncCall0Ok.length, 4);
    for(let i = 0; i !== 4; ++i) {
        assert.strictEqual(typeof promisifyAllAsyncCall0Ok[i], 'string');
        assert.strictEqual(promisifyAllAsyncCall0Ok[i].length, 30);
    }
    assert.strictEqual(promisifyAllAsyncCall0Error, undefined);

    assert.strictEqual(promisifyAllAsyncCall100Ok, undefined);
    assert(promisifyAllAsyncCall100Error instanceof Error);

    assert.strictEqual(typeof promisifyRaceAsyncCall0Ok, 'string');
    assert.strictEqual(promisifyRaceAsyncCall0Ok.length, 30);
    assert.strictEqual(promisifyRaceAsyncCall0Error, undefined);

    assert.strictEqual(promisifyRaceAsyncCall100Ok, undefined);
    assert(promisifyRaceAsyncCall100Error instanceof Error);
});

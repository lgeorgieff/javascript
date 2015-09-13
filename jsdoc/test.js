'use strict';

/**
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */

/**
 * Requires the name module to perform several unit tests.
 *
 * @private
 */
var name = require('./name');
/**
 * Requires the person module to perform several unit tests.
 *
 * @private
 */
var person = require('./person');
/**
 * Requires the assert module to implement unit tests by using assertions.
 *
 * @private
 */
var assert = require('assert');

function test1 () {
    var maxName = new name.ComplexName('Max', 'Mustermann');
    assert(maxName);
    assert.strictEqual(maxName.hasLastName(), true);
    assert.strictEqual(maxName.getFirstNameCount(), 1);
    assert.strictEqual(maxName.hasFirstNames(), true);
    assert.strictEqual(maxName.hasFirstNames(0), true);
    assert.strictEqual(maxName.hasFirstNames(1), false);
    assert.strictEqual(maxName.getFullName(), 'Max Mustermann');
    assert.deepEqual(maxName.getFirstNames(), ['Max']);
    assert.strictEqual(maxName.getLastName(), 'Mustermann');
}

function test2 () {
    var maxSimpleName = new name.SimpleName('Max', 'Mustermann');
    assert(maxSimpleName);
    assert.strictEqual(maxSimpleName.hasLastName(), true);
    assert.strictEqual(maxSimpleName.getFirstNameCount(), 1);
    assert.strictEqual(maxSimpleName.hasFirstNames(), true);
    assert.strictEqual(maxSimpleName.hasFirstNames(0), true);
    assert.strictEqual(maxSimpleName.hasFirstNames(1), false);
    assert.strictEqual(maxSimpleName.getFullName(), 'Max Mustermann');
    assert.deepEqual(maxSimpleName.getFirstNames(), ['Max']);
    assert.strictEqual(maxSimpleName.getLastName(), 'Mustermann');
    assert.deepEqual(maxSimpleName.getFirstName(), 'Max');
}

function test3 () {
    var xyzName = new name.ComplexName('  X   Y ', '  Z');
    assert(xyzName);
    assert.strictEqual(xyzName.hasLastName(), true);
    assert.strictEqual(xyzName.getFirstNameCount(), 2);
    assert.strictEqual(xyzName.hasFirstNames(), true);
    assert.strictEqual(xyzName.hasFirstNames(0), true);
    assert.strictEqual(xyzName.hasFirstNames(1), true);
    assert.strictEqual(xyzName.hasFirstNames(2), false);
    assert.strictEqual(xyzName.getFullName(), 'X Y Z');
    assert.deepEqual(xyzName.getFirstNames(), ['X', 'Y']);
    assert.strictEqual(xyzName.getLastName(), 'Z');
}

function test4 () {
    var abcName = new name.ComplexName('A   ', ' B C ');
    assert(abcName);
    assert.strictEqual(abcName.hasLastName(), true);
    assert.strictEqual(abcName.getFirstNameCount(), 1);
    assert.strictEqual(abcName.hasFirstNames(), true);
    assert.strictEqual(abcName.hasFirstNames(0), true);
    assert.strictEqual(abcName.hasFirstNames(1), false);
    assert.strictEqual(abcName.getFullName(), 'A B C');
    assert.deepEqual(abcName.getFirstNames(), ['A']);
    assert.strictEqual(abcName.getLastName(), 'B C');
}

function test5 () {
    var aName = new name.ComplexName('A', '');
    assert(aName);
    assert.strictEqual(aName.hasLastName(), false);
    assert.strictEqual(aName.getFirstNameCount(), 1);
    assert.strictEqual(aName.hasFirstNames(), true);
    assert.strictEqual(aName.hasFirstNames(0), true);
    assert.strictEqual(aName.hasFirstNames(1), false);
    assert.strictEqual(aName.getFullName(), 'A');
    assert.deepEqual(aName.getFirstNames(), ['A']);
    assert.strictEqual(aName.getLastName(), '');
}

function test6 () {
    var bName = new name.ComplexName('', 'B');
    assert(bName);
    assert.strictEqual(bName.hasLastName(), true);
    assert.strictEqual(bName.getFirstNameCount(), 0);
    assert.strictEqual(bName.hasFirstNames(), false);
    assert.strictEqual(bName.hasFirstNames(0), false);;
    assert.strictEqual(bName.getFullName(), 'B');
    assert.deepEqual(bName.getFirstNames(), []);
    assert.strictEqual(bName.getLastName(), 'B');
}

function test7 () {
    assert.throws(function () { var xyzSimpleName = new name.SimpleName('  X   Y ', '  Z'); }, Error);
}

function test8 () {
    var dateOfBirth = new Date(1981, 2, 5);
    var max = person('Max Klaus', 'Mustermann', dateOfBirth);
    assert(max);
    assert.strictEqual(max.name.hasLastName(), true);
    assert.strictEqual(max.name.getFirstNameCount(), 2);
    assert.strictEqual(max.name.hasFirstNames(), true);
    assert.strictEqual(max.name.hasFirstNames(0), true);
    assert.strictEqual(max.name.hasFirstNames(1), true);
    assert.strictEqual(max.name.hasFirstNames(2), false);
    assert.strictEqual(max.name.getFullName(), 'Max Klaus Mustermann');
    assert.deepEqual(max.name.getFirstNames(), ['Max', 'Klaus']);
    assert.strictEqual(max.name.getLastName(), 'Mustermann');
    assert.deepEqual(max.dateOfBirth, dateOfBirth);
    assert.strictEqual(max.getAge(), Math.floor((new Date() - dateOfBirth) / 1000 / 60 / 60 / 24 / 365));
    assert.throws(function () { max.name = '...'; }, Error);
    assert.throws(function () { max.dateOfBirth = '...'; }, Error);
}

/**
 * Performs all defined unit tests for the name and person module.
 *
 * @public
 * @name test/testMain
 *
 */
function testMain () {
    test1();
    console.log('test1 passed');

    test2();
    console.log('test2 passed');

    test3();
    console.log('test3 passed');

    test4();
    console.log('test4 passed');

    test5();
    console.log('test5 passed');

    test6();
    console.log('test6 passed');

    test7();
    console.log('test7 passed');

    test8();
    console.log('test8 passed');
}

testMain();

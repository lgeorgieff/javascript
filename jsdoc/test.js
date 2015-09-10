/**
 * @fileOverview This file defines and runs some unit tests for the module {@link Name}.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 */

var name = require('./name');
var assert = require('assert');

var maxName = new name.Name('Max', 'Mustermann');
assert(maxName);
assert.strictEqual(maxName.hasLastName(), true);
assert.strictEqual(maxName.getFirstNameCount(), 1);
assert.strictEqual(maxName.hasFirstNames(), true);
assert.strictEqual(maxName.hasFirstNames(0), true);
assert.strictEqual(maxName.hasFirstNames(1), false);
assert.strictEqual(maxName.getFullName(), 'Max Mustermann');
assert.deepEqual(maxName.getFirstNames(), ['Max']);
assert.strictEqual(maxName.getLastName(), 'Mustermann');


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

var xyzName = new name.Name('  X   Y ', '  Z');
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

var abcName = new name.Name('A   ', ' B C ');
assert(abcName);
assert.strictEqual(abcName.hasLastName(), true);
assert.strictEqual(abcName.getFirstNameCount(), 1);
assert.strictEqual(abcName.hasFirstNames(), true);
assert.strictEqual(abcName.hasFirstNames(0), true);
assert.strictEqual(abcName.hasFirstNames(1), false);
assert.strictEqual(abcName.getFullName(), 'A B C');
assert.deepEqual(abcName.getFirstNames(), ['A']);
assert.strictEqual(abcName.getLastName(), 'B C');

var aName = new name.Name('A', '');
assert(aName);
assert.strictEqual(aName.hasLastName(), false);
assert.strictEqual(aName.getFirstNameCount(), 1);
assert.strictEqual(aName.hasFirstNames(), true);
assert.strictEqual(aName.hasFirstNames(0), true);
assert.strictEqual(aName.hasFirstNames(1), false);
assert.strictEqual(aName.getFullName(), 'A');
assert.deepEqual(aName.getFirstNames(), ['A']);
assert.strictEqual(aName.getLastName(), '');

var bName = new name.Name('', 'B');
assert(bName);
assert.strictEqual(bName.hasLastName(), true);
assert.strictEqual(bName.getFirstNameCount(), 0);
assert.strictEqual(bName.hasFirstNames(), false);
assert.strictEqual(bName.hasFirstNames(0), false);;
assert.strictEqual(bName.getFullName(), 'B');
assert.deepEqual(bName.getFirstNames(), []);
assert.strictEqual(bName.getLastName(), 'B');

assert.throws(function () { var xyzSimpleName = new name.SimpleName('  X   Y ', '  Z'); }, Error);

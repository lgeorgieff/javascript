// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/20/2015
// Description: Shows the usage of the this keyword in the unit testing framework jasmine.
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

const assert = require('assert');

describe('test suite 1', function () {
    const SUITE_VALUE = 12;

    // This valus is visible in the test suite, but not in the specs. Each specs gets a new this object.
    this.testSuiteValue = SUITE_VALUE;
    assert.strictEqual(this.testSuiteValue, SUITE_VALUE);
    ++this.testSuiteValue;
    assert.strictEqual(this.testSuiteValue, SUITE_VALUE + 1);    

    if('spec 1', function () {
        expect(this.testSuiteValue).toBeUndefined();
    });

    it('spec 2', function () {
        this.testSpecValue = SUITE_VALUE;
        expect(this.testSpecValue).toEqual(SUITE_VALUE);
    });

    it('spec 3', function () {
        expect(this.testSpecValue).toBeUndefined();
    });
});

const TEST_VALUE = 14;

beforeAll(function () {
    // This value is visible in all specs of all test suites.
    // I.e. it is not visible in a test suite, but in the specs inside the test suites.
    // Note the this object is created every time before a spec is invoked, i.e. the operations of a spec and of an
    // afterEach handler on the this.testValue variable does not show side effect for the next spec.
    this.testValue = TEST_VALUE;
});

beforeAll(function () {
    // The first registered beforeAll handler creates the this.testValue property.
    // In this handler we have the same this object as in the prior handler.
    ++this.testValue;
});

beforeEach(function () {
    // All beforeAll handlers are called before the beforeEach handlers are called.
    // In this handler we have the same this object as in the previously defined beforeAll handlers.
    ++this.testValue;
});

afterEach(function () {
    // This handler is applied after each spec. But we will not encounter its side effects, since afterEach and afterAll
    // have no effect on the this object
    this.testValue = -100;
});

// This value is valid for the entire file. But each test suite and test spec defines its own this object, i.e.
// this.globalValue is not available in these test suites and test specs.
this.globalValue = TEST_VALUE;
assert.strictEqual(this.globalValue, TEST_VALUE);
describe('test 2', function () {
    assert.strictEqual(this.globalValue, undefined);

    it('spec 1', function () {
        expect(this.globalValue).toBeUndefined();
    });
});

describe('test 3', function () {
    // this.testValue is not available here - only in the specs of this suite.
    assert.strictEqual(this.testValue, undefined);

    it('spec 1', function () {
        // The value for this.testValue is calculated by 14 + 1 + 1 (beforeAll + beforeAll + beforeEach)
        expect(this.testValue).toEqual(TEST_VALUE + 2);
    });

    it('spec 2', function () {
        // Here we get the same value as in the previously spec. This is due to the fact that the this object is created
        // again.
        expect(this.testValue).toEqual(TEST_VALUE + 2);
        // This operation shows its side effects only in this spec. The next spec gets a new this object.
        this.testValue = 100;
    });

    it('spec 3', function () {
        expect(this.testValue).toEqual(TEST_VALUE + 2);
    });
});

describe('test suite 4', function () {
    // The inner beforeEach handler in this test suite gets the this object which was already processed by the globally
    // defined handlers.
    beforeEach(function () {
        ++this.testValue;
    });

    it('spec 1', function () {
        // The value for this.testValue is calculated by 14 + 1 + 1 (beforeAll + beforeAll + beforeEach)
        expect(this.testValue).toEqual(TEST_VALUE + 3);
    });
});

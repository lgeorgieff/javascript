// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/20/2015
// Description: Shows the setup and teardown support in the unit testing framework jasmine.
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

let variableUnderTest = '';

// This defines a global afterEach callback, i.e. it is called after each spec in each test suite.
afterEach(() => {
    variableUnderTest = variableUnderTest.slice(1);
});

describe('beforeEach and afterEach callbacks defined in a test suite are called before and after every spec in this test suite', () => {
    beforeEach(() => {
        variableUnderTest += '.';
    });
    beforeEach(() => {
        variableUnderTest += ':';
    });
    beforeEach(() => {
        variableUnderTest += '_';
    });
    afterEach(() => {
        variableUnderTest = variableUnderTest.slice(0, -1);
    });
    afterEach(() => {
        variableUnderTest = variableUnderTest.slice(0, -1);
    });

    it('test 1', () => {
        expect(variableUnderTest).toEqual('!.:_');
    });
    it('test 2', () => {
        expect(variableUnderTest).toEqual('!..:_');
    });
    it('test 3', () => {
        expect(variableUnderTest).toEqual('!...:_');
    });
});

// This defines a global beforeEach callback, i.e. it is called before each spec in each test suite.
// beforeEach and afterEach callbacks are registered before any test suite is executed.
// The order of the beforeEach and afterEach callback registrations is tracked by jasmine, i.e.
// beforeEach(cb1); beforeEach(cb2) implies that cb1 is called before cb2.
beforeEach(() => {
    variableUnderTest = '!' + variableUnderTest;
});

describe('For demonstrating the usage of a global afterEach and beforeEach callback', () => {
    it('test 4', () => {
        expect(variableUnderTest).toEqual('!...');
    });
});

let variableUnderTest2 = 0;

// A global beforeAll callback that is executed before any spec is executed.
beforeAll(() => {
    --variableUnderTest2;
});

// A global afterAll callback that is executed after all specs has been executed.
afterAll(() => {
    variableUnderTest2 = 20;
});

describe('A test suite for demonstrating the usage of afterAll and beforeAll callbacks', () => {
    afterAll(() => {
        ++variableUnderTest2;
    });
    afterAll(() => {
        ++variableUnderTest2;
    });
    beforeAll(() => {
        --variableUnderTest2;
    });
    beforeAll(() => {
        variableUnderTest2 -= 2;
    });

    it('...', () => {
        expect(variableUnderTest2).toEqual(-4);
    });
    it('...', () => {
        expect(variableUnderTest2).toEqual(-4);
    });
});

describe('A test suite for demonstrating the usage of global afterAll and beforeAll callbacks',() => {
    it('...', () => {
        expect(variableUnderTest2).toEqual(-2);
    });
});

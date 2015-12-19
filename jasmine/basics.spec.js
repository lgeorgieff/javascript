// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/19/2015
// Description: Shows the basic principles of the unit testing framework jasmine.
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

describe('This is a test suite', () => {
    it('This is a test spec', () => {
        expect(true).toBe(true);
    });

    it('A test suite may contain nay number of specs', () => {
        expect(false).not.toBe(true);
    });
});

describe('A spec file may contain any number of test suites', () => {
    it('Another test spec', () => {
        expect(true).toBeTruthy();
    });
});

describe('A test suite for demonstrating all built-in matchers', () => {
    it('toBe: performs a comparson with ===', () => {
        expect(123).toBe(123);
        expect('123').not.toBe(123);
        const obj = {value1: 1, value2: 'a'};
        expect(obj).toBe(obj);
        expect(obj).not.toBe({value1: 1, value2: 'a'});
        const arr = [1, 'a'];
        expect(arr).toBe(arr);
        expect(arr).not.toBe([1, 'a']);
    });

    it('toEqual: performs a deep comparison for simple literals', () => {
        expect(123).toEqual(123);
        expect('123').not.toEqual(123);
        const obj = {value1: 1, value2: 'a'};
        expect(obj).toEqual(obj);
        expect(obj).toEqual({value1: 1, value2: 'a'});
        const arr = [1, 'a'];
        expect(arr).toEqual(arr);
        expect(arr).toEqual([1, 'a']);
    });

    it('toMatch: performs a comparison for regualr expressions', () => {
        expect('Hello World!').toMatch(/.*/);
        expect('Hello World!').toMatch(/Hello/);
        expect('Hello World!').not.toMatch(/E/);
    });

    it('toBeDefined: performs a test against undefined', () => {
        const obj = {value1: 1, value2: undefined};
        expect(obj).toBeDefined();
        expect(obj.value1).toBeDefined();
        expect(obj.value2).not.toBeDefined();
        expect(obj.value3).not.toBeDefined();
    });

    it('toBeUndefined: performs a test against undefined', () => {
        const obj = {value1: 1, value2: undefined};
        expect(obj).not.toBeUndefined();
        expect(obj.value1).not.toBeUndefined();
        expect(obj.value2).toBeUndefined();
        expect(obj.value3).toBeUndefined();
    });

    it('toBeNull: performs a test against null', () => {
        expect(null).toBeNull();
        expect(undefined).not.toBeNull();
    });

    it('toBeTruthy: performs a boolean casting test', () => {
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
        expect(1).toBeTruthy();
        expect('false').toBeTruthy();
        expect('').not.toBeTruthy();
        expect(0).not.toBeTruthy();
    });

    it('toBeFalsy: performs a boolean casting test', () => {
        expect(false).toBeFalsy();
        expect(true).not.toBeFalsy();
        expect(1).not.toBeFalsy();
        expect('false').not.toBeFalsy();
        expect('').toBeFalsy();
        expect(0).toBeFalsy();
    });

    it('toContain: performs a check whether an item is contained in an array', () => {
        const obj = {value1: 1, value2: 'a', value3: {inner1: 10, inner2: 'b'}};
        const arr = [obj, '1', 123, undefined];
        expect(arr).toContain('1');
        expect(arr).not.toContain(1);
        expect(arr).toContain(obj);
        expect(arr).toContain({value1: 1, value2: 'a', value3: {inner1: 10, inner2: 'b'}});
    });

    it('toBeLessThan: performs a mathematical check', () => {
        expect(123).toBeLessThan(124);
        expect(123).not.toBeLessThan(123);
        expect(123).not.toBeLessThan(122);
        expect(123).not.toBeLessThan('abc');
    });

    it('toBeGreaterThan: performs a mathematical check', () => {
        expect(123).toBeGreaterThan(122);
        expect(123).not.toBeGreaterThan(123);
        expect(123).not.toBeGreaterThan(124);
        expect(123).not.toBeGreaterThan('abc');
    });

    it('toBeCloseTo: performs a precision math comparison', () => {
        // precision is determines how many digits after the decimal point are checked.
        // The default is 2.
        // For the last digit after the precision position the common known rounding operation is used, i.e.
        // 0 => .0 - .4 and 1 => .5 - .9
        let precision = 3;
        expect(123.456).toBeCloseTo(123.456);
        expect(123.456).toBeCloseTo(123.46);
        expect(123.454).toBeCloseTo(123.45);
        // precision === 3, i.e. .45 is not accurate enough
        expect(123.454).not.toBeCloseTo(123.45, precision);
        expect(123.454).not.toBeCloseTo(123.453, precision);
        expect(123.454).toBeCloseTo(123.454, precision);
        expect(123.455).toBeCloseTo(123.46);
        precision = 0;
        expect(123.455).toBeCloseTo(123.1, precision);
        expect(123.455).toBeCloseTo(123.0, precision);
        expect(123.455).toBeCloseTo(123.9, precision);
        expect(123.455).not.toBeCloseTo(122, precision);
        expect(123.455).not.toBeCloseTo(124, precision);
    });

    it('toThrow: performs a check whether an exception was thrown or not', () => {
        function fn (arg) {
            if (arg % 2 === 0) {
                throw new Error();
            }
        }
        expect(() => fn(1)).not.toThrow();
        expect(() => fn(2)).toThrow();
    });

    it('toThrowError: performs a check whether a specific exception was thrown or not', () => {
        function fn1 (arg) {
            if (arg % 2 === 0) {
                throw new Error();
            }
        }
        function fn2 (arg) {
            if (arg % 2 === 0) {
                throw new TypeError('some message');
            }
        }
        expect(() => fn1(1)).not.toThrowError(Error);
        expect(() => fn1(2)).toThrowError(Error);
        expect(() => fn1(2)).not.toThrowError(TypeError);
        expect(() => fn2(1)).not.toThrowError(TypeError);
        expect(() => fn2(2)).toThrowError(TypeError);
        expect(() => fn2(2)).toThrowError(TypeError, 'some message');
        // TypeError is a subtype of Error
        expect(() => fn2(2)).toThrowError(Error);
        expect(() => fn2(2)).toThrowError(Error, 'some message');
        expect(() => fn2(2)).not.toThrowError(ReferenceError);
    });

    it('X.not.Y: negotatiates the result of the comparison', () => {
        expect(true).toEqual(true);
        expect(true).not.toEqual(false);
    });
});

describe("fail() can be used to signal an error and make the test fail", function() {
    var foo = function(cond, callBack) {
        if (cond) {
            callBack();
        }
    };

    it("fail()", function() {
        foo(false, function() {
            // fail() can take an error message or an error object as argument.
            fail("Callback has been called");
        });
    });
});


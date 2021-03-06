// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/25/2015
// Description: Shows the how to use spies offered by the unit testing framework jasmine.
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

let testObject = {
    _value: 0,
    setValue (value) {
        this._value = value;
        return this;
    },
    getValue () {
        return this._value;
    }
};

beforeEach(() => {
    testObject._value = 0;
});

describe('Show the basic configuration of a spy.', () => {
    it('Demonstrate how a spy is set up and used.', () => {
        // Spies must be created in a before function or a spec.
        spyOn(testObject, 'getValue');
        expect(testObject.getValue).not.toHaveBeenCalled();
        // spyOn changes the this context of the function which is spied, i.e. the nest expect call would fail if it
        // would be tested against equality to 0.
        expect(testObject.getValue()).toBeUndefined();
        expect(testObject.getValue).toHaveBeenCalled();
    });

    it('Verify that the previously defined spy is not valid anymore.', () => {
        // The defined spy from the previous test spec is not valid in the current spec, i.e.
        // the funciton invocation will return the expected value and calling toHaveBeenCalled etc. will fail.
        expect(testObject.getValue()).toEqual(0);
        try {
            expect(testObject.getValue).toHaveBeenCalled();
            fail();
        } catch (err) {
            expect(err instanceof Error).toBeTruthy();
        }
    });

    it('Demonstrate how a spy is set up, used and checked for its parameters when being invoked.', () => {
        const TEST_VALUE = 123;
        spyOn(testObject, 'setValue');
        expect(testObject.setValue).not.toHaveBeenCalled();
        expect(testObject.setValue(TEST_VALUE)).toBeUndefined();
        // The spy defined via onSpy creates a separate object that is used for checking wheter it was called or not,
        // i.e. the real implementation is nver invoked. In the case of testObject.setValue(TEST_VALUE) it means that
        // the property _value was never changed and still is 0.
        expect(testObject._value).toEqual(0);
        expect(testObject.setValue).toHaveBeenCalled();
        expect(testObject.setValue).toHaveBeenCalledWith(TEST_VALUE);
        // If more than one argument is used in the spied function, .toHaveBeenCalledwith(arg1, arg2, ...argN) can be
        // used.
    });
});

describe('Using a spy with .and.callThrough()', () => {
    it('Uses .and.callThrough() to invoke the real implementation of a spy.', () => {
        const TEST_VALUE = 45;
        spyOn(testObject, 'setValue').and.callThrough();
        expect(testObject.setValue).not.toHaveBeenCalled();
        // The real implementation of testObject.setValue() is used here, i.e. the real return value is returned after
        // the actual funciton invocation.
        expect(testObject.setValue(TEST_VALUE)).toEqual(testObject);
        // Since .and.callThrough() enforces the invocation of the real implementation of a spy, the property _value is
        // set to TEST_VALUE.
        expect(testObject._value).toEqual(TEST_VALUE);
        expect(testObject.setValue).toHaveBeenCalledWith(TEST_VALUE);
    });
});


describe('Demonstrates how to use faked return values with jasmine.', () => {
    it('Shows the basic usage of .and.returnValue().', () => {
        spyOn(testObject, 'getValue').and.returnValue(testObject._value);
        expect(testObject.getValue).not.toHaveBeenCalled();
        expect(testObject.getValue()).toEqual(testObject._value);
        expect(testObject.getValue).toHaveBeenCalled();
    });

    it('Shows that the call of .and.returnValue() is a fake call and is side-effect free.', () => {
        const TEST_VALUE = 123;
        spyOn(testObject, 'getValue').and.returnValue(TEST_VALUE);
        expect(testObject._value).toEqual(0);
        expect(testObject.getValue).not.toHaveBeenCalled();
        expect(testObject.getValue()).toEqual(TEST_VALUE);
        expect(testObject._value).toEqual(0);
        expect(testObject.getValue).toHaveBeenCalled();
    });

    it('Shows that the call of .and.returnValues() is a fake call and is side-effect free.', () => {
        const TEST_VALUES = [2, 3, 4];
        spyOn(testObject, 'getValue').and.returnValues(TEST_VALUES[0], TEST_VALUES[1], TEST_VALUES[2]);
        expect(testObject.getValue).not.toHaveBeenCalled();
        expect(testObject._value).toEqual(0);
        for (let testValue of TEST_VALUES) {
            expect(testObject.getValue()).toEqual(testValue);
            expect(testObject.getValue).toHaveBeenCalled();
            expect(testObject._value).toEqual(0);
        }
        expect(testObject.getValue()).toBeUndefined();
        expect(testObject._value).toEqual(0);
    });
});

describe('Demonstrates how to use a fake implementation on a spied function', () => {
    it('Shows how to use .and.callFake().', () => {
        const TEST_VALUE = 345;
        spyOn(testObject, 'setValue').and.callFake((arg) => {
            testObject._value = arg;
            return testObject;
        });
        expect(testObject._value).toEqual(0);
        expect(testObject.setValue).not.toHaveBeenCalled();
        expect(testObject.setValue(TEST_VALUE)).toEqual(testObject);
        expect(testObject.setValue).toHaveBeenCalled();
        expect(testObject._value).toEqual(TEST_VALUE);
    });
});

describe('Demonstrates how to fake an exception in a spied function.', () => {
    it('Shows how to use .and.throwError().', () => {
        const TEST_VALUE = 123;
        spyOn(testObject, 'setValue').and.throwError(new Error('!!!'));
        expect(testObject.setValue).not.toHaveBeenCalled();
        expect(() => testObject.setValue(TEST_VALUE)).toThrowError(Error);
        expect(testObject.setValue).toHaveBeenCalled();
    });
});

describe('Demonstrates how to use the .calls property of a spy.', () => {
    const TEST_VALUES = [1, 4, 7, 8];

    beforeEach(() => {
        spyOn(testObject, 'setValue').and.callThrough();
    });

    it('Shows how to use the basic .calls.X() properties of a spy.', () => {
        expect(testObject.setValue).not.toHaveBeenCalled();
        expect(testObject.setValue.calls.any()).toEqual(false);
        expect(testObject.setValue.calls.count()).toEqual(0);
        for (let pos = 0; pos !== TEST_VALUES.length; ++pos) {
            testObject.setValue(TEST_VALUES[pos]);
            expect(testObject.setValue).toHaveBeenCalled();
            expect(testObject.setValue.calls.any()).toEqual(true);
            expect(testObject.setValue.calls.count()).toEqual(pos + 1);
            for (let argsPos = 0; argsPos <= pos; ++argsPos) {
                expect(testObject.setValue.calls.argsFor(argsPos).length).toEqual(1);
                expect(testObject.setValue.calls.argsFor(argsPos)[0]).toEqual(TEST_VALUES[argsPos]);
                
            }
        }
        expect(testObject.setValue.calls.allArgs()).toEqual([[1], [4], [7], [8]]);
    });

    it('Shows how to get information about all invocations of a spied function.', () => {
        expect(testObject.setValue).not.toHaveBeenCalled();
        for (let testValue of TEST_VALUES) testObject.setValue(testValue);
        expect(testObject.setValue).toHaveBeenCalled();
        
        expect(testObject.setValue.calls.all().length).toEqual(4);
        for (let pos = 0; pos !== TEST_VALUES.length; ++pos) {
            expect(testObject.setValue.calls.all()[pos].object).toEqual(testObject);
            expect(testObject.setValue.calls.all()[pos].args).toEqual([TEST_VALUES[pos]]);
            expect(testObject.setValue.calls.all()[pos].returnValue).toEqual(testObject);
        }

        expect(testObject.setValue.calls.mostRecent().object).toEqual(testObject);
        expect(testObject.setValue.calls.mostRecent().args).toEqual([TEST_VALUES[TEST_VALUES.length - 1]]);
        expect(testObject.setValue.calls.mostRecent().returnValue).toEqual(testObject);

        expect(testObject.setValue.calls.first().object).toEqual(testObject);
        expect(testObject.setValue.calls.first().args).toEqual([TEST_VALUES[0]]);
        expect(testObject.setValue.calls.first().returnValue).toEqual(testObject);

        testObject.setValue.calls.reset();
        expect(testObject.setValue).not.toHaveBeenCalled();
    });
});

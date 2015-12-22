// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/22/2015
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
    },
    getThis () {
        return this;
    }
};

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
        spyOn(testObject, 'setValue');
        expect(testObject.setValue).not.toHaveBeenCalled();
        expect(testObject.setValue(123)).toBeUndefined();
        // The spy defined via onSpy creates a separate object that is used for checking wheter it was called or not,
        // i.e. the real implementation is nver invoked. In the case of testObject.setValue(123) it means that the
        // property _value was never changed and still is 0.
        expect(testObject._value).toEqual(0);
        expect(testObject.setValue).toHaveBeenCalled();
        expect(testObject.setValue).toHaveBeenCalledWith(123);
        // If more than one argument is used in the spied function, .toHaveBeenCalledwith(arg1, arg2, ...argN) can be
        // used.
    });
});

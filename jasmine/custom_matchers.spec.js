// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/25/2015
// Description: Shows the how to implement custom matchers for the unit testing framework jasmine.
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

// This custom matchers object has two custom matchers: alwaysTrue, toBeTrue.
let customMatchers = {
    alwaysTrue (util, customEqualityTesters) {
        return {
            // The compare function is invoked when expected(x).alwaysTrue() is called.
            compare (actual, expected) {
                return {
                    pass: true
                };
            },
            // The compare function is invoked when expected(x).not.alwaysTrue() is called.
            negativeCompare (actual, expected) {
                return {
                    pass: true
                };
            }
        };
    },
    toBeTrue (util, customEqualityTesters) {
        return {
            compare (actual, expected) {
                return {
                    pass: actual === true
                };
            }
        };
    }
};

beforeEach(function() {
    // Register the custom matchers for all test specs.
    jasmine.addMatchers(customMatchers);
});

describe('Demonstrate some custom matchers.', () => {
    it('Demonstrate a customMatcher that always returns true.', () => {
        expect(true).alwaysTrue();
        expect(false).alwaysTrue();
        expect(true).not.alwaysTrue();
        expect(false).not.alwaysTrue();
    });

    it('Demonstrate a customMatcher that performs a strict comparison against true.', () => {
        expect(true).toBeTrue();
        expect(false).not.toBeTrue();
        expect(1).not.toBeTrue();
    });
});

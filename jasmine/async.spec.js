// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 12/20/2015
// Description: Shows the possibilities of time-dependent and async testing of the unit testing framework jasmine.
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

describe('Simulates the JS clock to test time-dependent functions', () => {
    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    const TIMEOUT = 100;
    it('Test setTimeout', () => {
        let hasBeenCalled = false;
        setTimeout(() => {
            hasBeenCalled = true;
        }, TIMEOUT);

        expect(hasBeenCalled).toBeFalsy();
        jasmine.clock().tick(TIMEOUT);
        expect(hasBeenCalled).toBeTruthy();
    });

    it('Test setInterval', () => {
        let hasBeenCalled = 0;
        let id = setInterval(() => {
            ++hasBeenCalled;
        }, TIMEOUT);

        expect(hasBeenCalled).toEqual(0);
        jasmine.clock().tick(TIMEOUT);
        expect(hasBeenCalled).toEqual(1);
        jasmine.clock().tick(TIMEOUT);
        expect(hasBeenCalled).toEqual(2);
        clearTimeout(id);
        jasmine.clock().tick(TIMEOUT);
        expect(hasBeenCalled).toEqual(2);
    });
});

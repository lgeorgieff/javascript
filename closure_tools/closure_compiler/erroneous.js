// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/12/2015
// Description: Defines a function that uses an undefined argument. This file is used to demonstrate the --check-only
//              and --warnings_whitelist_file option of the closure compiler.
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

function my_fun() {
    return iDoesNotExists + 2;
}

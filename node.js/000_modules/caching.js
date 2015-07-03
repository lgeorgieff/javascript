// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/03/2015
// Description: Illustrates the caching of a module, i.e. every time this code is executed a global variable is
//              incremented and can be checked in the requiring module.
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


if(global.caching) ++global.caching;
else global.caching = 1;

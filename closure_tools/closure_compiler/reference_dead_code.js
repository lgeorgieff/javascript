// ====================================================================================================================
// Copyright (C) 2015  Lukas Georgieff
// Last modified: 07/15/2015
// Description: Illustrates the restrictions and limitations of the closure compiler when working in
//              ADVANCED_OPTIMIZATIONS mode eliminating dead code.
// Compilation: java -jar compiler.jar --warning_level=VERBOSE --compilation_level=ADVANCED_OPTIMIZATIONS
//              --js advanced_optimizations_dead_code.js --js reference_dead_code.js
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


dead_code();

The closure compiler is a _real_ compiler from JavaScript to JavaScript that checks and optimizes your code. The full documentation is available at [Google Developers](https://developers.google.com/closure/compiler/).

For playing around with the closure compiler you can use the [closure compiler web service UI](http://closure-compiler.appspot.com/home).

For automatation or integration of the closure compiler into your (build) system
* you can use the [closure compiler service API](https://developers.google.com/closure/compiler/docs/gettingstarted_api)
* you can download the [executable](http://dl.google.com/closure-compiler/compiler-latest.zip) and integrate it into your build system, e.g. by [jenkins](https://jenkins-ci.org/)
* you can get the [sources](https://github.com/google/closure-compiler), build them and integrate the resulting jar into your (build) system
  * therefore you need to clone the repository (or call _git submodule init_ to clone it directly to the subfolder _repository_ of this project)
  * install java >= 7
  * and apache-ant
  * finally run _ant jar_ in the folder [javascript/closure_tools/closure_compiler/repository](https://github.com/google/closure-compiler)
  * the result is located at _[javascript/closure_tools/closure_compiler](https://github.com/google/closure-compiler)/build_

# Compiling JavaScript in Command Line
[Here](https://developers.google.com/closure/compiler/docs/gettingstarted_app) you get to know the basic steps needed to compile your script with the closure compiler.

## General Instructions
* you can call the executable with _java -jar compiler.jar_
* to compile your file run _java -jar compiler.jar script.js_ or _java -jar compiler.jar --js script.js_
* to compile multiple files run _java -jar compiler.jar script&#95;1.js script&#95;2.js_ or _java -jar compiler.jar --js script1.js --js script2.js_
* to write the compiled content into a file rather then on the console you can run _java -jar compiler.jar script.js --js&#95;output&#95;file result.js_
* for further options call _java -jar compiler.jar --help_

## Compilation Levels
Google provides a [documentation](https://developers.google.com/closure/compiler/docs/compilation_levels) on the compilation levels of the closure compiler.

There are three compilation levels:
* _WHITESPACE&#95;ONLY_
 * Removes whitespace, comments and unnecessary punctuation characters only
* _SIMPLE&#95;OPTIMIZATIONS_
 * Includes _WHITESPACE&#95;ONLY_
 * Renames local variables, funciton parameters to shorter names
 * Can be problematic when using _eval_, _with_ or _toString()_ on functions
* _ADVANCED&#95;OPTIMIZATIONS_
 * Includes _SIMPLE&#95;OPTIMIZATIONS_
 * Renames global variables function names and properties
  * Externals and referenced globals must be exposed to the compiler
  * Exported globals must be exposed to the compiler
 * Removes dead code
 * Inlining: replaces function calls, constants and some variables with their body if it determines that it is save to do so

You can set the compilation level by the option _--compilation&#95;level_, i.e.
* _--compilation&#95;level=WHITESPACE&#95;ONLY_
* _--compilation&#95;level=SIMPLE or --compilation&#95;level=SIMPLE&#95;OPTIMIZATIONS_
* _--compilation&#95;level=ADVANCED or --compilation&#95;level=ADVANCED&#95;OPTIMIZATIONS_

The default compilation level is _SIMPLE_/_SIMPLE&#95;OPTIMIZATIONS_

# Checking Only
The closure compiler can be used to only check the code without printing any compiled JavaScript. Therefore use the option _--checks-only_. In the defualt case you will not get all warnings or errors. To achieve this you have to specify the warning level by using the option _--warning&#95;level_ and setting it to one of _QUIET_, _DEFAULT_ or _VERBOSE_. Thus the final call to check your file would be _java -jar compiler.jar --js script.js --checks-only --warning&#95;level=VERBOSE_.

To suppress particular errors you can use a whitelist file. The errors specifed in this whitelist will turn errors into warnings. An example is available at [warnings_whitelist.txt](warnings_whitelist.txt) and the corresponding erroneous script is available at [erroneous.js](erroneous.js). To run it you have to call _java -jar compiler.jar --js erroneous.js --checks-only --warning&#95;level=VERBOSE --warnings&#95;whitelist&#95;file=warnings&#95;whitelist.txt_.

The _--warning&#95;level_ option can also be used for "normal" compilation.

# Restrictions of ADVANCED_OPTIMIZATIONS
Since the closure compiler renames global variables that are referenced and exported you need to take care of:
* "[...] undeclared external references" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
* "[...] unexported internal names in external code" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
* "[...] string names to refer to object properties" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
 * An example script is available at [advanced&#95;optimizations&#95;quoted&#95;strings.js
](advanced_optimizations_quoted_strings.js)
* "Referring to variables as properties of the global object" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
 * An example script is available at [advanced&#95;optimizations&#95;global&#95;properties.js
](advanced_optimizations_global_properties.js)
* Dead code elimination
 * "Calling  functions from outside of compiled code" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
 * "Retrieving functions through iteration over constructor or prototype properties" [[Google Developers](https://developers.google.com/closure/compiler/docs/limitations)]
 * Two example scripts are available at [advanced&#95;optimizations&#95;dead&#95;code.js](advanced_optimizations_dead_code.js) and [reference&#95;dead&#95;code.js](reference_dead_code.js).
* Object property flattening
 * An exmaple script is available at [advanced&#95;optimizations&#95;object&#95;property&#95;flattening.js](advanced_optimizations_object_property_flattening.js)

# Exports and Externs
Exported functionality and externs are required to be compatible to non-compiled JavaScript code, i.e. we have to ensure that certain values, classes, functions, etc. are not renamed by the closure compiler.

## External-To-Compiled Code (Exports)
[This](advanced_optimizations_export.js) example shows how to export a function in the _ADVANCED&#95;OPTIMIZATIONS&#95; level_ as Node.js module. For a full documentation take a look at [Google Developers](https://developers.google.com/closure/compiler/docs/api-tutorial3#dangers).

## Compiled-To-External Code (Externs)
When using original-named symbols from non-compiled JavaScript source files you can provide the declations of these used sources inside a so-called externs file by using the _--externs_ switch.

The files [advanced&#95;optimizations&#95;externs.js](advanced_optimizations_externs.js) and [externs.js](externs.js) illustrate an example how to use external symbols, e.g. functions and values from non-compiled in compiled code.

For the entire documentation take a look at [Google Developers](https://developers.google.com/closure/compiler/docs/api-tutorial3#mixed).


TODO: --use_only_custom_externs

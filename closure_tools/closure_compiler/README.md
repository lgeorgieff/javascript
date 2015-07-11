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

## Compiling JavaScript in Command Line
[Here](https://developers.google.com/closure/compiler/docs/gettingstarted_app) you get to know the basic steps needed to compile your script with the closure compiler.

### General Instructions
* you can call the executable with _java -jar compiler.jar_
* to compile your file run _java -jar compiler.jar script.js_ or _java -jar compiler.jar --js script.js_
* to compile multiple files run _java -jar compiler.jar script&#95;1.js script&#95;2.js_ or _java -jar compiler.jar --js script1.js --js script2.js_
* to write the compiled content into a file rather then on the console you can run _java -jar compiler.jar script.js --js&#95;output&#95;file result.js_
* for further options call _java -jar compiler.jar --help_

### Compilation Levels
Google provides a [documentation](https://developers.google.com/closure/compiler/docs/compilation_levels) on the compilation levels of the closure compiler.

There are three compilation levels:
* WHITESPACE_ONLY
 * Removes whitespace, comments and unnecessary punctuation characters only
* SIMPLE_OPTIMIZATIONS
 * Includes WHITESPACE_ONLY
 * Renames local variables, funciton parameters to shorter names
 * Can be problematic when using _eval_ or using _toString()_ on functions
* ADVANCED_OPTIMIZATIONS
 * Includes SIMPLE_OPTIMIZATIONS
 * Renames global variables function names and properties
 * Removes dead code
 * Inlining: replaces function calls, constants and some variables with their body if it determines that it is save to do so

You can set the compilation level by the option _--compilation&#95;level_, i.e.
* --compilation&#95;level=WHITESPACE_ONLY
* --compilation&#95;level=SIMPLE or --compilation&#95;level=SIMPLE&#95;OPTIMIZATIONS
* --compilation&#95;level=ADVANCED or --compilation&#95;level=ADVANCED&#95;OPTIMIZATIONS

The default compilation level is _SIMPLE_/_SIMPLE&#95;OPTIMIZATIONS_

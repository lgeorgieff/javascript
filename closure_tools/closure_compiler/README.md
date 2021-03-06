The [closure compiler](https://developers.google.com/closure/compiler/) is a _real_ compiler from JavaScript to JavaScript that checks and optimizes your code. The full documentation is available at [Google Developers](https://developers.google.com/closure/compiler/).

For playing around with the [closure compiler](https://developers.google.com/closure/compiler/) you can use the [closure compiler web service UI](http://closure-compiler.appspot.com/home).

For automation or integration of the [closure compiler](https://developers.google.com/closure/compiler/) into your (build) system
* you can use the [closure compiler service API](https://developers.google.com/closure/compiler/docs/gettingstarted_api)
* you can download the [executable](http://dl.google.com/closure-compiler/compiler-latest.zip) and integrate it into your build system, e.g. by [jenkins](https://jenkins-ci.org/)
* you can get the [sources](https://github.com/google/closure-compiler), build them and integrate the resulting jar into your (build) system
  * therefore you need to clone the repository (or call _git submodule init_ to clone it directly to the subfolder _repository_ of this project)
  * install java >= 7
  * and apache-ant
  * finally run _ant jar_ in the folder [javascript/closure_tools/closure_compiler/repository](https://github.com/google/closure-compiler)
  * the result is located at _[javascript/closure_tools/closure_compiler](https://github.com/google/closure-compiler)/build_

# Compiling JavaScript in Command Line
[Here](https://developers.google.com/closure/compiler/docs/gettingstarted_app) you get to know the basic steps needed to compile your script with the [closure compiler](https://developers.google.com/closure/compiler/).

## General Instructions
* you can call the executable with _java -jar compiler.jar_
* to compile your file run _java -jar compiler.jar script.js_ or _java -jar compiler.jar --js script.js_
* to compile multiple files run _java -jar compiler.jar script&#95;1.js script&#95;2.js_ or _java -jar compiler.jar --js script1.js --js script2.js_
* to write the compiled content into a file rather then on the console you can run _java -jar compiler.jar script.js --js&#95;output&#95;file result.js_
* for further options call _java -jar compiler.jar --help_

## Compilation Levels
Google provides a [documentation](https://developers.google.com/closure/compiler/docs/compilation_levels) on the compilation levels of the [closure compiler](https://developers.google.com/closure/compiler/).

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
The [closure compiler](https://developers.google.com/closure/compiler/) can be used to only check the code without the actual compilation step and without printing any compiled JavaScript. Therefore use the option _--checks-only_.
But running the [Closure Compiler](https://developers.google.com/closure/compiler/) with this option will lead to the fact that it will not encounter all errors. One way to use the [Closure Compiler](https://developers.google.com/closure/compiler/) only for checking but still validating all code in the same way as during compilation, is to ignore the _stdout_ by invoking _java -jar closure.jar --js script.js > /dev/null_.
In the defualt case you will not get all warnings and errors. To achieve this you have to specify the warning level by using the option _--warning&#95;level_ and setting it to one of _QUIET_, _DEFAULT_ or _VERBOSE_.

In addition to the optionc _--warning_level_ you can also use the options
* _--jscomp&#95;error_
 * Makes all warnings of the specified group breaking errors
* _--jscom&#95;warning_
 * Makes all warnings of the specified group non-breaking warnings
* _--jscomp&#95;off_
 * Suppresses all warnings of the specified group

You find all warning groups respectively error groups at the [closure compiler github page](https://github.com/google/closure-compiler/wiki/Warnings).

In general the [closure compiler](https://developers.google.com/closure/compiler/) will exit with return code _1_ when the compilation ended with an error. In other cases, e.g. warnings or a graceful compilation, the return code is _0_.

To suppress particular errors you can use a whitelist file. The errors specifed in this whitelist will turn errors into warnings. An example is available at [warnings_whitelist.txt](warnings_whitelist.txt) and the corresponding erroneous script is available at [erroneous.js](erroneous.js). To run it you have to call _java -jar compiler.jar --js erroneous.js --checks-only --warning&#95;level=VERBOSE --warnings&#95;whitelist&#95;file=warnings&#95;whitelist.txt_.

The _--warning&#95;level_ option can also be used for "normal" compilation.

# Restrictions of ADVANCED_OPTIMIZATIONS
Since the [closure compiler](https://developers.google.com/closure/compiler/) renames global variables that are referenced and exported you need to take care of:
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
Exported functionality and externs are required to be compatible to non-compiled JavaScript code, i.e. we have to ensure that certain values, classes, functions, etc. are not renamed by the [closure compiler](https://developers.google.com/closure/compiler/).

## External-To-Compiled Code (Exports)
[This](advanced_optimizations_export.js) example shows how to export a function in the _ADVANCED&#95;OPTIMIZATIONS&#95; level_ as node.js module. For a full documentation take a look at [Google Developers](https://developers.google.com/closure/compiler/docs/api-tutorial3#dangers).

## Compiled-To-External Code (Externs)
When using original-named symbols from non-compiled JavaScript source files you can provide the declations of these used sources inside a so-called externs file by using the _--externs_ switch.

The files [advanced&#95;optimizations&#95;externs.js](advanced_optimizations_externs.js) and [externs.js](externs.js) illustrate an example how to use external symbols, e.g. functions and values from non-compiled in compiled code.

By default the [closure compiler](https://developers.google.com/closure/compiler/) uses some pre-defined externs that are located in the files [here](https://github.com/google/closure-compiler/tree/master/externs). To prevent the [closure compiler](https://developers.google.com/closure/compiler/) to use them and to use only the self-defined externs use the _--use&#95;only&#95;custom&#95;externs_ switch.

For the entire documentation take a look at [Google Developers](https://developers.google.com/closure/compiler/docs/api-tutorial3#mixed).

## Define a node.js Module
Now since we have the possbility to use external values and to export internal values we can implement a clean solution of exposing functionality as a node.js module. For this we have to make the _module.exports_ object property visible to the [closure compiler](https://developers.google.com/closure/compiler/) by passing it through an [externs file](externs.js). In the [compiled script](advanced_optimizations_export_2.js) we finally export the functionality to the _module.exports_ object property by using a quoted string as property name. This way of exposing functionality as a node.js module is much cleaner as the first shown example when using a warning whitelist file.

## node.js closure compiler Externs
The project [node.js-closure-compiler-externs
](https://github.com/dcodeIO/node.js-closure-compiler-externs) at github provides externs for most node.js modules.

# JSDoc Annotations Used by the closure compiler
The [closure compiler](https://developers.google.com/closure/compiler/) is able to use [JSDoc](http://usejsdoc.org/) annotations to improve the optimization and the error and warning output.

JSDoc is a tool for generating JavaScript documentation from comments in a special format. Since it is not possible to define variable types in JavaScript the only way doing this is via comments. These comments can be used by the [closure compiler](https://developers.google.com/closure/compiler/) as additional information.

The list of supported JSDoc tags by the [closure compiler](https://developers.google.com/closure/compiler/) is available at the [Google Developers documentation](https://developers.google.com/closure/compiler/docs/js-for-compiler#tags).

The [closure compiler](https://developers.google.com/closure/compiler/) also supports the following [type expressions](https://developers.google.com/closure/compiler/docs/js-for-compiler#types) to define the type of a variable.

In addition to the "normal" type annotations the [closure compiler](https://developers.google.com/closure/compiler/) also supports [generic types](https://developers.google.com/closure/compiler/docs/js-for-compiler#generics) which are equal to what is known as templates or generics.

More examples on JSDoc are available [here](../../jsdoc/README.md).

You find a simple example script at [jsdoc_annotations.js](jsdoc_annotations.js) which includes some basic annotations but also demonstrates how to cast data types via [JSDoc](https://github.com/jsdoc3/jsdoc) comments.

To make [JSDoc](https://github.com/jsdoc3/jsdoc) understanding the [closure compiler](https://developers.google.com/closure/compiler/) annotations you have to set the the [closure compiler](https://developers.google.com/closure/compiler/) dictionary in the [JSDoc](https://github.com/jsdoc3/jsdoc) configuration file. Additionally you have to implement a [JSDoc](https://github.com/jsdoc3/jsdoc) plugin for the [closure compiler](https://developers.google.com/closure/compiler/) tags that are not known by [JSDoc](https://github.com/jsdoc3/jsdoc), e.g. the [@suppress](https://github.com/google/closure-compiler/wiki/Warnings#suppress-tags) tag. More information on [JSDoc](https://github.com/jsdoc3/jsdoc) plugins can be found at http://usejsdoc.org/about-plugins.html. At https://github.com/lgeorgieff/js_base/blob/master/tools/jsdoc_plugins/closure.js you can find a [JSDoc](https://github.com/jsdoc3/jsdoc) plugin implementation for the [closure compiler](https://developers.google.com/closure/compiler/) tag [@suppress](https://github.com/google/closure-compiler/wiki/Warnings#suppress-tags).

# Reasons to Avoid the closure compiler in ADVANCED_OPTIMIZATIONS Mode
[This article](http://webreflection.blogspot.de/2013/01/5-reasons-to-avoid-closure-compiler-in.html) describes why not to use the [closure compiler](https://developers.google.com/closure/compiler/) in advanced mode. Well I have a different opinion since for every problem that is mentioned there a solution exists. Indeed, you have to think about the way you code and adopt it to the [closure compiler](https://developers.google.com/closure/compiler/). You should think aboud what you want to gain from the [closure compiler](https://developers.google.com/closure/compiler/), what you really get and what you have to invest!

# Modules
The [closure compiler](https://developers.google.com/closure/compiler/) supports several types of modules:
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [Common JS](http://www.commonjs.org/)
* [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
* [closure-library](https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide)

In general all code is compiled into _stdout_. If _--js&#95;output&#95;file=out.js_ is specified, the code is compiled into the file _out.js_.

For more information about compiling modules with [closure compiler](https://developers.google.com/closure/compiler/) take a look at https://github.com/google/closure-compiler/wiki/Working-With-Multiple-Module-Systems.

## Compilation Examples
The following files should be compiled:

1. ./src/main.js
2. ./src/dependency1.js
3. ./src/dependency2.js

[1] depends on [2] and [3]. [2] and [3] do not depend on other source files.

### Default Example
The code is be compiled into the file _./build/out.js_.

```shell
java -jar compiler.jar \
  --js ./src/main.js \
  --js ./src/dependency1.js \
  --js ./src/dependency2.js \
  --js_output_file=./build/out.js
```

### Closure Modules
The source files are compiled as modules. The configuration defines which source file belongs into which module. It is important to list all source files in dependency order. The switch _--module_ defines the modules, bundles the source files and defines the dependencies between the modules.

```shell
java -jar compiler.jar \
  --js ./src/main.js \
  --js ./src/dependency1.js \
  --js ./src/dependency2.js \
 # bundles the first 2 source files into the module "dependencies"
  --module dependencies:2 \
 # bundles 1 file into the module "entry" which depends on the module "dependencies"
  --module entry:1:dependencies \
 # all modules will be prefixed by "./build/"
  --module_output_path_prefix=./build/
```

### CommonJS Modules
The following example processes [Common JS](http://www.commonjs.org/) modules. All resulting code is compiled into the file _./build/out.js_. The advantage of using this configuration is that name clashes in different files (which are different modules in this case nad have own scopes) does not raise errors but are handled correctly by the [closure compiler](https://developers.google.com/closure/compiler/). It is necessary to define the entry module.

```shell
java -jar compiler.jar \
  --js ./src/main.js \
  --js ./src/dependency1.js \
  --js ./src/dependency2.js \
  --common_js_entry_module=./src/main.js \
  --process_common_js_modules \
  --js_output_file=./build/out.js
```

When using the switch _--module=auto_ each CommonJS module is compiled into each own module. In this case also the switch _--module&#95;output&#95;path&#95;prefix=./build/_ can be used to define a common module prefix.

The switches _--js&#95;module&#95;root=./src/_ and _--common&#95;js&#95;module_path_prefix=./src/_ have the purpose to remove the common prefix from the entire module name respectively path. I.e. the file _./src/dependency1.js_ corresponds to the module _./src/dependency1_. If _--js_module_root=./src/_ or _--common&#95;js&#95;module_path_prefix=./src/_ is set, the module will be set to _./dependency1_.

If a project uses both [Common JS](http://www.commonjs.org/) and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules, the switch _--transform&#95;amd&#95;modules_ can be used to transform all [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules to [Common JS](http://www.commonjs.org/) modules.

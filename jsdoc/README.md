[JSDoc](https://github.com/jsdoc3/jsdoc) is a popular tool and a kind of special comments that can be used to automatically generate (HTML) documentation from these JavaScript comments.

# Installation
 * The easiest way to install [JSDoc](https://github.com/jsdoc3/jsdoc) is via npm.
  * _npm install jsdoc_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node&#95;modules/jsdoc/jsdoc.js_.
  * _sudo npm install -g jsdoc_
    * Global installation, i.e. you can invoke the executable by calling: _jsdoc_.

More information on the installation of [JSDoc](https://github.com/jsdoc3/jsdoc) is available [here](https://github.com/jsdoc3/jsdoc#installation-and-usage).

# Usage
The general approach is to annotate the source code with comments of the form:
```javascript
/**
 * Get the age of a person instance in full years.
 *
 * @return {number} the age of a person instance
 * @param {Person} person A person instance
 */
function getAge (person) {
 return 8;
}
```

[JSDoc](https://github.com/jsdoc3/jsdoc) defines certain keywords that have to be used with the _@_ character in the beginning. These keywords signal the [JSDoc](https://github.com/jsdoc3/jsdoc) tool a special meaning of the comment, e.g. parameter types and names. etc. They can also be used by other tools (for example the [Closure Compiler](../closure_tools/closure_compiler/README.md) to check the used types). A list of all keywords supported by [JSDoc](https://github.com/jsdoc3/jsdoc) can be found [here](http://usejsdoc.org/). These keywords and the general comment must be surrounded by _/**_ and _*/_.

When the files are annotated the [JSDoc](https://github.com/jsdoc3/jsdoc) tool can be run and generate the documentation. As default behavior it will generate the output in a folder called _out_.
```shell
$ jsdoc myfile1.js myfile2.js ... myfileN.js
```

## Popular JSDoc Tags
[JSDoc](https://github.com/jsdoc3/jsdoc) offers a lot of tags and synonyms. There exist a lot of ways to express the same meaning in the documentation. This section covers only a small subset of the [JSDoc](https://github.com/jsdoc3/jsdoc) capabilities. For the full list of tags take a look at the [documentation](http://usejsdoc.org/index.html).

In addition Google's [Closure Compiler](../closure_tools/closure_compiler/README.md) defines several tags and ways to express certain meanings. This is documented [here](https://developers.google.com/closure/compiler/docs/js-for-compiler).

The following examples illustrate the usage of the most important tags:
* [Functions and Methods](functions_and_methods.js)
* [Types](types.js)
* [Callbacks](callbacks.js)
* Objects
* [Classes](classes.js)
* [Interfaces](interfaces.js)
* [Enums](enums.js)
* Modules
* [Files](files.js)
* [Namepaths](namepaths.js)

## Command Line Options
TODO

# Configuration
TODO

# Templates
TODO

# Best Practices
TODO

# Tags Offered by the Closure Compiler
TODO: Go through all supported contructs of the closure compiler: https://developers.google.com/closure/compiler/docs/js-for-compiler

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
* [Objects](objects.js)
* [Classes](classes.js)
* [Interfaces](interfaces.js)
* [Enums](enums.js)
* [Modules](module.js) and how to use them ([module runner](module_runner.js))
* [Files](files.js)
* [Namespaces](namespaces.js)
* [Events](events.js)
* [Namepaths](namepaths.js)

## Command Line Options
The [JSDoc](https://github.com/jsdoc3/jsdoc) tool offers several command line otpions:
* _--access_: Displays only the access levels given to this option (_public_, _protected_, _private_, _all_) (default: all except _private_)
* _--configure_: Path to the configuration file.
* _--private_: Displays also _private_ symbols.
* _--package_: Path to the project's package file. [JSDoc](https://github.com/jsdoc3/jsdoc) will use several values from the _package.json_ file, such as _name_, _version_, etc.
* _--recurse_: Recursive iteration through all files and sub-directories.
* _--readme_: Path to the project's _README.md_ file. If given, the content of the _README.md_ file will be integrated into the generated documentation.
* _--template_: Path to the template file.

# Configuration
For specifying certain options, [JSDoc](https://github.com/jsdoc3/jsdoc) is able to process a configuration file. You can set the configuration file via the option _-c &lt;path to config&gt;_ or _--configure &lt;path to config&gt;_. If no configuration file is set, [JSDoc](https://github.com/jsdoc3/jsdoc) assumes a default configuration as described [here](http://usejsdoc.org/about-configuring-jsdoc.html#configuration-file).

Configuration files for [JSDoc](https://github.com/jsdoc3/jsdoc) are json files and contain basically the following properties:
* _tags_: Settings referring to the [JSDoc](https://github.com/jsdoc3/jsdoc) tags.
* _source_: Settings referring to the file names and paths of the source files to be parsed by [JSDoc](https://github.com/jsdoc3/jsdoc).
* _plugins_: Settings referring to enabled plugins.
* _templates_: Settings enabled to configure the used template.
* _opts_: Settigs referring to the command line options of the [JSDoc](https://github.com/jsdoc3/jsdoc) tool.


An example file used as [JSDoc](https://github.com/jsdoc3/jsdoc) configuration can be found [here](./documentation/conf.json).
To run it make sure you are in [this](.) directory and run _jsdoc --configure documentation/conf.json ._. The generated documentation will be available under _documentation/out/jsdoc-example/1.0.0/_. The destination folder is configured in [./documentation/conf.json](documentation/conf.json). Further, the file [./package.json](./package.json) is included as source file in [./documentation/conf.json](documentation/conf.json) which generates the subdirectories related to the project's version and name defined in [./package.json](./package.json). Additionally, the option _readme_ is set in [./documentation/conf.json](documentation/conf.json) which includes the content of [this](./README.md) file into the generated documentation's _index.html_ file.
# Templates
TODO

# Tags Offered by the Closure Compiler
TODO: Go through all supported contructs of the closure compiler: https://developers.google.com/closure/compiler/docs/js-for-compiler

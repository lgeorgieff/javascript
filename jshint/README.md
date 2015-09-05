[JSHint](http://jshint.com/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it from the [GitHub repository](https://github.com/jshint/jshint) or you can get the latest archived release from [GitHub](https://github.com/jshint/jshint/releases/). It is based on [JSLint](../jslint/README.md), driven by the JavaScript community and offers several configuration possibilities (in contrast to [JSLint](../jslint/README.md)).

# Installation
* The easiest way to install [JSHint](http://jshint.com/) is via [npm](https://github.com/npm/npm).
  * _npm install jshint_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node_modules/jshint/bin/jshint_.
  * _sudo npm install -g jshint_
    * Global installation, i.e. you can invoke the executable by calling: _jshint_.

More information on the installation of [JSHint](http://jshint.com/) is available [here](http://jshint.com/install/).

# Usage
[JSHint](http://jshint.com/) allows to specify several configuration settings in the source code via directives of the form of special comments, such as:
* _/* jshint ... */_
 * Used for linting and application options of [JSHint](http://jshint.com/).
* _/* jslint ... */_
 * Used for [JSHint](http://jshint.com/)-compatible [JSLint](../jslint/README.md) options.
* _/* globals ... */_
 * Used for declaring global variables that are used in the checked script but are defined elsewhere.
* _/* exported ... */_
 * Used for declaring global variables that are defined in the checked file but are not used in this file and are thought to be used in other scripts.

## Configuration
Beside configuring [JSHint](http://jshint.com/) inline in JavaScript sources, there is a better, a cleaner way to configure how [JSHint](http://jshint.com/) checks your source files, namely by using configuration files. You may choose one of the following options:

1. _--config &lt;path to config file&gt;_
 * Specify the command line option _--config_ and set a path to a configuration file.
2. _.jshintrc_
 * Create a file called _.jshintrc_ in your project folder.
 * If no such file is found in the project folder, [JSHint](http://jshint.com/) will go up the file system tree until it finds such a file.
3. _jshintConfig_ section in _package.json_
 * Create the _jshintConfig_ property in the file _package.json_ of your project.

A valid configuration file for [JSHint](http://jshint.com/) is a [JSON](http://json.org/) file with properties that represent the linting options, e.g.
```javascript
{
    "browser": false,
    "node": true
}
```

The default configuraiton used by [JSHint](http://jshint.com/) can be found at [GitHub](https://github.com/jshint/jshint/blob/master/examples/.jshintrc).

## Linting Options
This post will not go through all options available for [JSHint](http://jshint.com/) since multiple sources describe it already in a very detailed fashion, e.g. the [JSHint documentation](http://jshint.com/docs/options/) and also the default [configuration](https://github.com/jshint/jshint/blob/master/examples/.jshintrc).

In general the options for [JSHint](http://jshint.com/) can be categorized in:
* Linting options
 * Enforcing options
 * Relaxing options
* Environment options
* Globals definitions
* Globals exports

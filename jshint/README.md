[JSHint](http://jshint.com/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it from the [GitHub repository](https://github.com/jshint/jshint) or you can get the latest archived release from [GitHub](https://github.com/jshint/jshint/releases/). It is based on [JSLint](../jslint/README.md), dirven by the JavaScript community and offers more several configuration possibilities (in contrast to [JSLint](../jslint/README.md)).

# Installation
* The easiest way to install [JSHint](http://jshint.com/) is via [npm](https://github.com/npm/npm)
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
 * Used for declaring global variables that are defined in the checked file but are nut used in this file and are thought to be used in other scripts.

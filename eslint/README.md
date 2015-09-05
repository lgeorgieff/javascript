[ESLint](http://eslint.org/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/eslint/eslint). It offers many configuration possibilities (in contrast to [JSLint](../jslint/README.md) and [JSHint](../jshint/README.md)).

# Installation
* The easiest way to install [ESLint](http://eslint.org/) is via [npm](https://github.com/npm/npm).
  * _npm install eslint_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node_modules/eslint/bin/eslint.js_.
  * _sudo npm install -g eslint_
    * Global installation, i.e. you can invoke the executable by calling: _eslint_.

You can run [ESLint](http://eslint.org/) with the command line option _--init_. This will ask you for some JavaScript coding style preferences and based on your answers [ESLint](http://eslint.org/) will create a configuration file called _.eslintrc_ in the working directory.

More information on the installation of [ESLint](http://eslint.org/) is available [here](https://github.com/eslint/eslint#installation).

# Usage
[ESLint](http://eslint.org/) allows to specify several configuration settings in the source code via directives of the form of special comments, such as:
* /*eslint-env ... */
 * Used for setting the environment for which the checked file will be used, e.g. _node_.
* /*global ... */
 * Used for declaring global variables that are used in the checked script but are defined elsewhere.
* /*eslint ... */
 * Used for linting and application options of [ESLint](http://eslint.org/).
* /*eslint-disable&#42;/
 * Used for disabling linting for the section of the checked file that starts after this directive.
* /*eslint-enable&#42;/
 * Used for emabling linting for the section of the checked file that starts after this directive.

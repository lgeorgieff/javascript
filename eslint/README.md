[ESLint](http://eslint.org/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/eslint/eslint). It offers many configuration possibilities (in contrast to [JSLint](../jslint/README.md) and [JSHint](../jshint/README.md)). In addition it is plugin-based, i.e. each (linting) rule is a plugin and new rules can be added by implementing and adding plugins to [ESLint](http://eslint.org/).

# Installation
* The easiest way to install [ESLint](http://eslint.org/) is via [npm](https://github.com/npm/npm).
  * _npm install eslint_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node_modules/eslint/bin/eslint.js_.
  * _sudo npm install -g eslint_
    * Global installation, i.e. you can invoke the executable by calling: _eslint_.

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

# Configuration

Beside configuring [ESLint](http://eslint.org/) inline in JavaScript sources, there is a better, a cleaner way to configure how [ESLint](http://eslint.org/) checks your source files, namely by using configuration files. You may choose one of the following options:
* _--config &lt;path to config file&gt;_
 * Specify the command line option _--config_ and set a path to a configuration file.
* _.eslintrc_
 * Create a file called _.eslintrc_ in your project folder.
 * If no such file is found in the project folder, [ESLint](http://eslint.org/) will go up the file system tree until it finds such a file.
* _eslintConfig_ section in _package.json_
 * Create the _eslintConfig_ property in the file _package.json_ of your project.

A valid configuration file for [ESLint](http://eslint.org/) is either a [JSON](http://json.org/) or a [YAML](http://www.yaml.org/) file with properties that represent the linting options, e.g. the following [JSON](http://json.org/) example:

```javascript
{
    "rules": {
        "indent": [2, 4],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"]
    },
    "env": {"node": true},
    "extends": "eslint:recommended"
}
```

or the following [YAML](http://www.yaml.org/) example:
```yaml
rules:
  indent:
    - 2
    - tab
  quotes:
    - 2
    - single
  linebreak-style:
    - 2
    - unix
  semi:
    - 2
    - always
env:
  node: true
extends: 'eslint:recommended'
```

You can run [ESLint](http://eslint.org/) with the command line option _--init_. This will ask you for some JavaScript coding style preferences and based on your answers [ESLint](http://eslint.org/) will create a configuration file called _.eslintrc_ in the working directory.

The different configuration options are processed in the followong order:
* Inline configuration (including _/*eslint-env ... */_, _/*global ... */_, _/*eslint ... */_, _/*eslint-disable&#42;/_, _/*eslint-enable&#42;/_)
* Command line options (including _--global_, _--rule_, _--env_, _--config_)
* Project level configuration (is searched in the file system until the file system root is reached)
 * _package.json_ file in project folder
 * _.eslintrc_ file in project folder
* _~/.eslintrc_ (if no other configuration file is found)

# Extending Configuration Files
In the configuration file it is possible to use the property _extends_ which allows to inherit [ESLint](http://eslint.org/) settings from one or multiple base configuration files.

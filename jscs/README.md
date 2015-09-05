[JSCS](http://jscs.info/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/jscs-dev/node-jscs). It offers many configuration possibilities regarding pure syntax style, i.e. no potential semantic erros are checked such as undefined variables. In addition it is plugin-based, i.e. each (linting) rule is a plugin and new rules can be added by implementing and adding plugins to [JSCS](http://jscs.info/).

# Installation
* The easiest way to install [JSCS](http://jscs.info/) is via npm.
  * _npm install jscs_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node_modules/eslint/bin/jscs_.
  * _sudo npm install -g jscs_
    * Global installation, i.e. you can invoke the executable by calling: _jscs_.

More information on the installation of [JSCS](http://jscs.info/) is available [here](http://jscs.info/overview#installation).

In addition to the core functionality of [JSCS](http://jscs.info/) a very popular plugin for linting [JSDoc](../jsdoc/README.md) comments exist, called [jscs-jsdoc](https://github.com/jscs-dev/jscs-jsdoc). It is not required to install it manually, since the latest [JSCS](http://jscs.info/) release already include [jscs-jsdoc](https://github.com/jscs-dev/jscs-jsdoc).

# Usage
[JSCS](http://jscs.info/) allows to specify only syntax style rules, i.e. no code semantics are checked e.g. undefined variables. In addition to other linting tools ([Closure Linter](../closure_tools/closure_linter/README.md), [JSLint](../jslint/README.md), [JSHint](../jshint/README.md), [ESLint](../eslint/README.md)) [JSCS](http://jscs.info/) only supports configuration settings via configuration files. No inline directives are allowed - which enforces a very clean way of configuring [JSCS](http://jscs.info/). Another characteristic of [JSCS](http://jscs.info/) is the requirement of a configuration file to be able to run. It is possible to choose a so-called _preset_ rule set such as _google_ or _jquery_ which defines all linting rules for a specific style. In this case no additional configuration is required.

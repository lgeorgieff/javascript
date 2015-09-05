[JSCS](http://jscs.info/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/jscs-dev/node-jscs). It offers many configuration possibilities regarding pure syntax style, i.e. no potential semantic erros are checked such as undefined variables. In addition it is plugin-based, i.e. each (linting) rule is a plugin and new rules can be added by implementing and adding plugins to [JSCS](http://jscs.info/).

# Installation
* The easiest way to install [JSCS](http://jscs.info/) is via npm.
  * _npm install jscs_
    * Local installation, i.e. you have to invoke the executable by a full path: _./node_modules/eslint/bin/jscs_.
  * _sudo npm install -g jscs_
    * Global installation, i.e. you can invoke the executable by calling: _jscs_.

More information on the installation of [JSCS](http://jscs.info/) is available [here](http://jscs.info/overview#installation).

In addition to the core functionality of [JSCS](http://jscs.info/) a very popular plugin for linting [JSDoc](../jsdoc/README.md) comments exist, called [jscs-jsdoc](https://github.com/jscs-dev/jscs-jsdoc). It is not required to install it manually, since the latest [JSCS](http://jscs.info/) release already include [jscs-jsdoc](https://github.com/jscs-dev/jscs-jsdoc).

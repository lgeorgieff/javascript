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
[JSCS](http://jscs.info/) allows to specify only syntax style rules, i.e. no code semantics are checked e.g. undefined variables. In addition to other linting tools ([Closure Linter](../closure_tools/closure_linter/README.md), [JSLint](../jslint/README.md), [JSHint](../jshint/README.md), [ESLint](../eslint/README.md)) [JSCS](http://jscs.info/) only supports configuration settings via configuration files. No inline directives are allowed (except two special directives) - which enforces a very clean way of configuring [JSCS](http://jscs.info/). Another characteristic of [JSCS](http://jscs.info/) is the requirement of a configuration file to be able to run. It is possible to choose a so-called _preset_ rule set such as _google_ or _jquery_ which defines all linting rules for a specific style. In this case no additional configuration is required.

The allowed inline directives are thought for disabling and enabling linting for particular sections of the source code:
* _/&#42;jscs: disable&#42;/_ or _// jscs: disable_
* _/&#42;jscs: enable&#42;/_ or _// jscs: enable_

# Configuration
You may choose one of the following options to configure [JSCS](http://jscs.info/):
* _--config &lt;path to config file&gt;_
 * Specify the command line option _--config_ and set a path to a configuration file.
* _.jscsrc_
 * Create a file called _.jscsrc_ in your project folder.
 * If no such file is found in the project folder, [JSCS](http://jscs.info/) will go up the file system tree until it finds such a file.

## Presets
The following presets can be used as full rule set or as a base configuration that can be modified:
* [Airbnb](https://github.com/airbnb/javascript)
* [Crockford](http://javascript.crockford.com/code.html)
* [Google](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
* [Grunt](http://gruntjs.com/contributing#syntax)
* [jQuery](https://contribute.jquery.org/style-guide/js/)
* [MDCS](https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style™)
* [node-style-guide](https://github.com/felixge/node-style-guide)
* [Wikimedia](https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript)
* [WordPress](https://make.wordpress.org/core/handbook/coding-standards/javascript/)
* [Yandex](https://github.com/yandex/codestyle/blob/master/javascript.md)

The particular rule sets of the presets can be checked out at [GitHub](https://github.com/jscs-dev/node-jscs/tree/master/presets).

One important thing on presets is how to disable some rules which only support one value, such as: [disallowSpacesInCallExpression](http://jscs.info/rule/disallowSpacesInCallExpression). If this rule is defined it must be set true only. So how to disable this value if it is set in a chosen preset? You have to set it to null, e.g.
```javascript
{
    "preset": "google",
    "disallowSpacesInCallExpression": null
}
```

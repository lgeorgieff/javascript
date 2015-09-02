[JSLint](http://www.jslint.com/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/douglascrockford/JSLint). It offers only little custimization possibilities regarding the JavaScript code and focuses on [JavaScript: The Good Parts](http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf) written by Douglas Crockford.


# Installation of the Browser Version
* Clone the JSLint repository by calling _git clone https://github.com/douglascrockford/JSLint.git_
* Clone the ADSafe repository by calling _git clone https://github.com/douglascrockford/ADsafe.git_
* Either copy the file [adsafe.js](https://github.com/douglascrockford/ADsafe/blob/master/adsafe.js) into the JSLint repository or create a simlink from the JSLint repository to the file [adsafe.js](https://github.com/douglascrockford/ADsafe/blob/master/adsafe.js) so that it can be accessed directly from [jsonlint.html](https://github.com/douglascrockford/JSLint/blob/master/jslint.html)
* To test your installation open the file [jsonlint.html](https://github.com/douglascrockford/JSLint/blob/master/jslint.html) in your browser and test it (click on the button _JSLint_)

You can also analyze your code on the web page http://www.jslint.com/.

# Installation of the [Node.js](https://nodejs.org/en/) Version
* There exist an [npm package](https://www.npmjs.com/package/jslint) for [JSLint](http://www.jslint.com/)
* Install the [Node.js](https://nodejs.org/en/) version of JSLint by calling
  * _npm install jslint_ to install it locally (you need to specify the path to the executable, i.e. _./node_modules/jslint/bin/jslint.js_)
  * _sudo npm install jslint -g_ to install it globally (you don't need the full path, _jslint_ is located in _$PATH_)
 
Finally should be able to run a command like _jslint test.js_ to analyze the script _test.js_.

# Usage
In the browser version you can enter the JavaScript code into the web page and set certain options, such as _Node.js_ or _ES6_.

You may also specify some directives in the source code itself. At the top of the script you may put one of /&#42;global ...&#42;/, /&#42;jslint ...&#42;/ or /&#42;property ...&#42;/.

## /&#42;global ...&#42;/
The _global_ directive can be used to define global variables or functions that are used in the currently checked script but are defined elsewhere. Without defining such global variables [JSLint](http://www.jslint.com/) raises an error.

The following example demonstrates the globals definition for [Node.js](https://nodejs.org/en/).
```javascript
/*global
Buffer, clearInterval, clearTimeout, console, exports, global, module, process,
querystring, require, setInterval, setTimeout, __dirname, __filename
*/
```

## /&#42;jslint ...&#42;/
The _jslint_ directive can be used to define which checks are performed and which are ignored.
It offers the following attributes:
* _bitwise_
* _browser_
* _couch_
* _devel_
* _es6_
* _eval_
* _for_
* _fudge_
* _maxerr_
* _maxlen_
* _node_
* _this_
* _white_

The following example demonstrates how to set [Node.js](https://nodejs.org/en/) as default environment (what we achieved in the previous example with the _global_ directive) and to ignore white space checking.

```javascript
/*jslint node:true, white:true*/
```

## /&#42;property ...&#42;/
The _property_ directive allows the definition of properties used in the JavaScript files. If any property is used which is not defined in the _property_ directive an error is raised. If no _property_ directive is defined, the properties are not checked. In addition [JSLint](http://www.jslint.com/) generates a _property_ output for each file.

The _property_ directive is mainly thought for checking the spelling of properties.

The next example illustrates how a _property_ directive of a sample script would look like.
```javascript
/*global doSomething*/
/*property write, log, warn, error*/

'use strict';

var writer = {
    write: function (arg) {
        doSomething(arg);
    },
    log: {
        warn: function (arg) {
            doSomething(arg);
        },
        error: function (arg) {
            doSomething(arg);
        }
    }
};

writer.write('Hello World!');
```

The documentation on directives and on general checking of JavaScript performed by [JSLint](http://www.jslint.com/) is available [here](http://www.jslint.com/help.html).

## [Node.js](https://nodejs.org/en/) Version
The [Node.js](https://nodejs.org/en/) version is working on the command line, e.g. by calling _jslint test.js_.

In addition to the browser version you can specify the following command line options for _jslint_:
* _--ass_
* _--bitwise_
* _--browser_
* _--closure_
* _--continue_
* _--debug_
* _--devel_
* _--eqeq_
* _--evil_
* _--forin_
* _--indent_
* _--maxerr_
* _--maxlen_
* _--newcap_
* _--node_
* _--nomen_
* _--passfail_
* _--plusplus_
* _--predef_
* _--properties_
* _--regexp_
* _--rhino_
* _--sloppy_
* _--stupid_
* _--sub_
* _--todo_
* _--unparam_
* _--vars_
* _--white_

For a full description of all options call _man jslint_

In addition you may create a configuration file at:
* $HOME/.jslintrc
* ./jslintrc
* ./.jslintrc

of the form:
```javascript
{
    "vars": true,
    "white": true,
    "maxlen": 100,
    "predef": "foo,bar,baz"
}
```

The [Node.js](https://nodejs.org/en/) version of [JSLint](http://www.jslint.com/) is able to use several editions of [JSLint](http://www.jslint.com/). Each edition contains a different set of rules that are used to check the JavaScript code. This is due to the fact the the author of [JSLint](http://www.jslint.com/) updates the rules according to his experience and feedback. With the [Node.js](https://nodejs.org/en/) version you are abe to specify the edition by using the option _--edition_. The call _jslint --edition=latest test.js_ would use the latest edition of [JSLint](http://www.jslint.com/) rules. In this combination some rules defined by other options, e.g. _vars_ are ignored.

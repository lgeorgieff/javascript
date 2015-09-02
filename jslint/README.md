[JSLint](http://www.jslint.com/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/douglascrockford/JSLint). It offers only little custimization possibilities regarding the JavaScript code and focuses on [JavaScript: The Good Parts](http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf) written by Douglas Crockford.


# Installation of the Browser Version
* Clone the JSLint repository by calling _git clone https://github.com/douglascrockford/JSLint.git_
* Clone the ADSafe repository by calling _git clone https://github.com/douglascrockford/ADsafe.git_
* Either copy the file [adsafe.js](https://github.com/douglascrockford/ADsafe/blob/master/adsafe.js) into the JSLint repository or create a simlink from the JSLint repository to the file [adsafe.js](https://github.com/douglascrockford/ADsafe/blob/master/adsafe.js) so that it can be accessed directly from [jsonlint.html](https://github.com/douglascrockford/JSLint/blob/master/jslint.html)
* To test your installation open the file [jsonlint.html](https://github.com/douglascrockford/JSLint/blob/master/jslint.html) in your browser and test it (click on the button _JSLint_)

You can also analyze your code on the web page http://www.jslint.com/.

# Installation of the Node.js Version
* There exist an [npm package](https://www.npmjs.com/package/jslint) for JSLint
* Install the Node.js version of JSLint by calling
  * _npm install jslint_ to install it locally (you need to specify the path to the executable, i.e. _./node_modules/jslint/bin/jslint.js_)
  * _sudo npm install jslint -g_ to install it globally (you don't need the full path, _jslint_ is located in _$PATH_)
 
Finally should be able to run a command like _jslint test.js_ to analyze the script _test.js_.

# Usage
In the browser version you can enter the JavaScript code into the web page and set certain options, such as _Node.js_ or _ES6_.

You may also specify some directives in the source code itself. At the top of the script you may put one of /&#42;global ...&#42;/, /&#42;jslint ...&#42;/ or /&#42;property ...&#42;/.

## /&#42;global ...&#42;/
The _global_ directive can be used to define global variables or functions that are used in the currently checked script but are defined elsewhere. Without defining such global variables JSLint raises an error.

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
The _property_ directive allows the definition of properties used in the JavaScript files. If any property is used which is not defined in the _property_ directive an error is raised. If no _property_ directive is defined, the properties are not checked. In addition JSLint generates a _property_ output for each file.

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

The documentation on directives and on general checking of JavaScript performed by JSLint is available [here](http://www.jslint.com/help.html).

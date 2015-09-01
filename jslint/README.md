[JSLint](http://www.jslint.com/) is a tool written in JavaScript for static code analysis of JavaScript files. You can download it at [GitHub](https://github.com/douglascrockford/JSLint).

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

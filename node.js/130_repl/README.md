The _REPL_ Read-Eval-Print-Loop reads data, evaluates and prints it. This is the defaul mode when starting Node.js without any argument form the command line. This means it is actually an interactive session where you can enter some JavaScript code that is evaluated and printed on stdout.

In addition to REPL as default mode for Node.js there exists also a module called _'repl'_ which provides the same functionality as Node's default mode.

The full description for the _'repl'_ module can be found in the [Node.js API documentation](https://nodejs.org/api/repl.html).

A new _REPL_ instance can be started by
```javascript
var options = {
// define some settings
};
require('repl').start(options);
```

The _'repl'_ module supports the following options:
* prompt
* input
* output
* eval
* terminal
* useColors
* useGlobal
* ignoreUndefined
* writer

And the started _REPL_ instance supports the following events:
* _'exit'_
* _'reset'_

A detailed example is available at [repl.js](repl.js).

# Commands
In addition to just entering JavaScript into the _REPL_, it is also possible to enter the following commands:
* _.break_
  * Aborting a multiline expression
  * Fires the event _'reset'_
* _.clear_
  * Alias to _.break_
* _.exit_
  * Close the I/O stream (causes the REPL to exit)
* _.help_
  * Prints a help dialogue
* _.save <path to file>_
  * Save the entered REPL commands into a file
* _.load <path to file>_
  * Load a JavaScript file into the current REPL session
* _CTRL-C_
  * Alias to _.break_
* _CTRL-C_, _CTRL-C_
  * Sends a SIGTERM and ends the REPL
* _CTRL-D_
  * Alias for _.exit_
  * Fires the event _'reset'_

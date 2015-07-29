# Debugging JavaScript

Node.js exposes an API for the V8 debugger. This document covers the most important functionality of the debugger. A full documentation is avalable as part of the [Node.js documentation](https://nodejs.org/api/debugger.html).

To start the debugger of Node.js you must pass the argument _debug_, e.g. _node debug test.js_. It will stop execution at the first statement in the script.

To set some breakpoints in a script enter _debugger;_ into the places where you want the debugger to do a break. Note: the execution will be only stopped at these points when the Node.js runtime is started with the _debug_ argument. A sample file that can be used for debugging is [test_1.js](test_1.js) it includes [test_2.js](test_2.js) where a breakpoint is defined.

The next chapters describe the options that are available in the debugger, i.e. for executing them just enter them into the Node.js' debugger terminal.

# help
Print a message that contains all available options/commands. Usually the set of options that is described in the following chapters.

# run (r)
Starts the execution of the current script when entered into the debugger terminal. This is the default when the debugger is started. But can be useful after the _kill_ command was called.

# cont (c)
Continues execution until the next breakpoint is reached when entered into the debugger terminal.

# next (n)
Steps to the next statement of the JavaScript code when entered into the debugger terminal.

# step (s)
Steps into the next statement of the JavaScript code when entered into the debugger terminal.

# out (o)
Steps out of the current scope/function of the JavaScript code when entered into the debugger terminal. For example take a look at [out.js](out.js).

# backtrace (bt)
Prints the backtrace of the current execution frame when entered into the debugger terminal.

# setBreakpoint (sb)
Sets a breakpoint in the JavaScript code when entered into the debugger terminal. The following possibilities of setting breakpoints exist:
* setBreakpoint(), sb(): set a breakpoint in the current line
* setBreakpoint(line), sb(line): set a breakpoint in line _line_
* setBreakpoint('my&#95;fun()'), sb('my&#95;fun()'): set a breakpoint in the first line of the function _my&#95;fun_
* setBreakpoint('script.js', line), sb('script.js', line): set a breakpoint in line _line_ in the script _script.js_

# clearBreakpoint (cb)
Clears a breakpoint in the JavaScript code when entered into the debugger terminal. The following possibilities of clearing breakpoints exist:
* clearBreakpoint(), cb(): clear the breakpoint in the current line
* clearBreakpoint(line), cb(line): clear the breakpoint in line _line_

# watch
Shows the value of a defined expression inside a watch in the debugger terminal when entered into the debugger terminal. The expression is passed as a string, e.g. watch('myVariable').

# unwatch
Deletes a defined watch when entered into the debugger terminal. The expression is passed as a string, e.g. unwatch('myVariable').

# watchers
Lists all defined watchers when entered into the debugger terminal.
# repl
Enters into the debugger's repl for evaluation of the current script/context when entered into the debugger terminal.

# restart
Restarts the execution of the current script (works only if a script is running and not stopped at the moment the command is entered) when entered into the debugger terminal.

# kill
Ends the execution of the current script when entered into the debugger terminal.

# list
_list(n)_ prints the current line where the debugger stopped and _n_ lines before and after the current line when entered into the debugger terminal. If list is called without any _n_, i.e. _list()_ the default is _list(5)_.

# scripts
Lists all loaded scripts when entered into the debugger terminal.

# breakpoints
Displays a list of all breakpoints when entered into the debugger terminal.

# version
Displays the version of v8 when entered into the debugger terminal.

# Useful Modules
In addition to the Node.js/V8 debugger there are also some Node.js moduels and functions which can be useful for debugging:
* [util](../050_utilities/README.md), especially the [degublog](../050_utilities/README.md#utildebuglogsection) function
* [console](https://nodejs.org/api/console.html)

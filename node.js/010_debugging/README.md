# Debugging JavaScript via V8-Debugger

node.js exposes an API for the V8 debugger. This document covers the most important functionality of the debugger. A full documentation is avalable as part of the [node.js documentation](https://nodejs.org/api/debugger.html).

To start the debugger of node.js you must pass the argument _debug_, e.g. _node debug test.js_. It will stop execution at the first statement in the script.

To set some breakpoints in a script enter _debugger;_ into the places where you want the debugger to do a break. Note: the execution will be only stopped at these points when the node.js runtime is started with the _debug_ argument. A sample file that can be used for debugging is [test_1.js](test_1.js) it includes [test_2.js](test_2.js) where a breakpoint is defined.

The next chapters describe the options that are available in the debugger, i.e. for executing them just enter them into the node.js' debugger terminal.

## help
Print a message that contains all available options/commands. Usually the set of options that is described in the following chapters.

## run (r)
Starts the execution of the current script when entered into the debugger terminal. This is the default when the debugger is started. But can be useful after the _kill_ command was called.

## cont (c)
Continues execution until the next breakpoint is reached when entered into the debugger terminal.

## next (n)
Steps to the next statement of the JavaScript code when entered into the debugger terminal.

## step (s)
Steps into the next statement of the JavaScript code when entered into the debugger terminal.

## out (o)
Steps out of the current scope/function of the JavaScript code when entered into the debugger terminal. For example take a look at [out.js](out.js).

## backtrace (bt)
Prints the backtrace of the current execution frame when entered into the debugger terminal.

## setBreakpoint (sb)
Sets a breakpoint in the JavaScript code when entered into the debugger terminal. The following possibilities of setting breakpoints exist:
* setBreakpoint(), sb(): set a breakpoint in the current line
* setBreakpoint(line), sb(line): set a breakpoint in line _line_
* setBreakpoint('my&#95;fun()'), sb('my&#95;fun()'): set a breakpoint in the first line of the function _my&#95;fun_
* setBreakpoint('script.js', line), sb('script.js', line): set a breakpoint in line _line_ in the script _script.js_

## clearBreakpoint (cb)
Clears a breakpoint in the JavaScript code when entered into the debugger terminal. The following possibilities of clearing breakpoints exist:
* clearBreakpoint(), cb(): clear the breakpoint in the current line
* clearBreakpoint(line), cb(line): clear the breakpoint in line _line_

## watch
Shows the value of a defined expression inside a watch in the debugger terminal when entered into the debugger terminal. The expression is passed as a string, e.g. watch('myVariable').

## unwatch
Deletes a defined watch when entered into the debugger terminal. The expression is passed as a string, e.g. unwatch('myVariable').

## watchers
Lists all defined watchers when entered into the debugger terminal.

## repl
Enters into the debugger's repl for evaluation of the current script/context when entered into the debugger terminal.

## restart
Restarts the execution of the current script (works only if a script is running and not stopped at the moment the command is entered) when entered into the debugger terminal.

## kill
Ends the execution of the current script when entered into the debugger terminal.

## list
_list(n)_ prints the current line where the debugger stopped and _n_ lines before and after the current line when entered into the debugger terminal. If list is called without any _n_, i.e. _list()_ the default is _list(5)_.

## scripts
Lists all loaded scripts when entered into the debugger terminal.

## breakpoints
Displays a list of all breakpoints when entered into the debugger terminal.

## version
Displays the version of v8 when entered into the debugger terminal.

## Useful Modules
In addition to the node.js/V8 debugger there are also some node.js moduels and functions which can be useful for debugging:
* [util](../050_utilities/README.md), especially the [degublog](../050_utilities/README.md#utildebuglogsection) function
* [console](https://nodejs.org/api/console.html)

# Debugging JavaScript via node-inspector
If you like more-featured debugger environments, you have the choice of using [node-inspector](https://www.npmjs.com/package/node-inspector). [node-inspector](https://www.npmjs.com/package/node-inspector) uses the Blink Developer Tools to offer a debugger interface for [node.js](https://nodejs.org/en/). The debugging UI can be visualized via the [chrome](https://www.google.com/chrome/browser/desktop/index.html) or [opera](http://www.opera.com/) web browser. The actual UI is similar to the [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/).

## Installation
```shell
npm install node-inspector -g
```

## Debugging a Specific Script
```shell
node-debug script.js
# open http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858 in a web browser
```

## Running the Debugger in Background
```shell
node-inspector
node debug test_1.js
# open http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858 in a web browser
```

For more information on [node-inspector](https://www.npmjs.com/package/node-inspector) take a look at:
* https://www.npmjs.com/package/node-inspector
* https://github.com/node-inspector/node-inspector

# Profiling node.js Applications
[V8](https://github.com/v8/v8/wiki) allows to set several profiler options on command line which also can be used for [node.js](https://nodejs.org/en/). With the call _node --prof profiling.js_ the JavaScript source file [profiling.js](./profiling.js) is profiled and [V8](https://github.com/v8/v8/wiki) creates a log in the current working directory of the form _isolate-...-v8.log_, e.g. [isolate-0x2419bf0-v8.log](./isolate-0x2419bf0-v8.log).

To generate a more readable version you need to execute the script [tick-processor.js](https://github.com/nodejs/node/blob/master/tools/v8-prof/tick-processor.js) which is provided in the [node.js](https://nodejs.org/en/) sources. The [npm](https://github.com/npm/npm) module [node-tick-processor](https://www.npmjs.com/package/node-tick-processor) can be used to generate this file as well.

The [final profiling log](./v8.profile) contains sevaral sections, e.g.:
* [Shared libraries]
* [JavaScript]
* [C++]
* [GC]
* [Bottom up (heavy) profile]

The most interesting part for the profiling session of [profiling.js](./profiling.js) is the last section [Bottom up (heavy) profile] in [v8.profile](./v8.profile). In this section you can get all information to compare the 3 different implementations of _multisplit_, i.e. _multisplitFor_, _multisplitForOf_ and _multisplitForEach_. Each of these functions is listed with its ticks and the ticks of each inner invocation as a tree structure.

More information on profiling [node.js](https://nodejs.org/en/) applications can be found at:
* https://nodejs.org/en/docs/guides/simple-profiling/
* http://stackoverflow.com/questions/1911015/how-to-debug-node-js-applications/16512303#16512303
* https://strongloop.com/strongblog/node-js-performance-tip-cpu-profiler/
 * https://strongloop.com/strongblog/node-js-performance-garbage-collection/
 * https://strongloop.com/strongblog/node-js-performance-heap-profiling-tip/

# Debugging JavaScript

Node.js exposes an API for the V8 Debugger. This document covers the most important functionality of the debugger. A full documentation is avalable as part of the [Node.js documentation](https://nodejs.org/api/debugger.html).

To start the debugger of Node.js you must pass the argument _debug_, e.g. _node debug test.js_. It will stop execution at the first statement in the script.

To set some breakpoints in a script enter _debugger;_ into the places where you want the debugger to do a break. Note: the execution will be only stopped at these points when the Node.js runtime is started with the _debug_ argument. A sample file that can be used for debugging is [test_1.js](test_1.js) it includes [test_2.js](test_2.js) where tha actual breakpoint is defined.

The next chapters describe the options that are available in the debugger, i.e. for executing them just enter them into the Node.js terminal.

# help
Print a message that contains all available options/commands. Usually the set of options that is described in the following chapters.

# run (r)
# cont (c)
Continue execution until the next breakpoint is reached.

# next (n)
# step (s)
# out (o)
# backtrace (bt)
# setBreakPoint (sb)
# clearBreakPoint (cb)
# watch
# unwatch
# watchers
# repl
# restart
# kill
# list
# scripts
# breakOnException
# breakpoints
# version

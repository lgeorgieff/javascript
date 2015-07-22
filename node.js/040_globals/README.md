# Global Scope
In a browser environment the global scope is represented by the window object, i.e. every statement of the form _var myVar = 'some value';_ will define a global variable which can be accessed via _window.myVar;_.

As in the browser environment Node.js also defines a global object called _global_ which is aliased as _GLOBAL_. However this global scope is only available in the entry point of Node, i.e. a module does not have a global scope instead there is a module scope. Considering that a statement like _var myVar = 'some value';_ will result to _global.myVar_ in the entry point which is a global variable. But in a module scope this variable will be only inside a local scope.

The following values are available in the global scope:
* global/GLOBAL
* process
* console
* Buffer
* require.resolve()
* require.cache
* require.extensions
* setTimeout()
* clearTimeout()
* setInterval()
* clearInterval()

# Module Scope

The following values are available in the module scope:
* require()
* __filename
* __dirname
* module
* exports (which is a reference to module.exports)

## Define a Global Variable in a Module Scope
Global variables can be defined in a module by using the global object, for example _global.MY_GLOBAL = 123;_ If using _var my_local = 123;_ in module scope, it is available only in the module and can be used as within a closure.

An example is available at [module.js](module.js) and [main.js](main.js).

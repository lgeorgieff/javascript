# Modules

Modules can be used to structure the JavaScript code in Node.js. for a full documentation take a look at the [Node.js documentation](https://nodejs.org/api/modules.html).

## Loading a module
To load a module you can use _require('my-module')_. It allows you to load Node.js core modules, node_modules and self-defined modules.

An example file that loads several modules is available at [module_definition.js](module_definition.js).

For understanding the search order of _require()_ take a look at the [Core Modules](https://nodejs.org/api/modules.html#modules_core_modules), [File Modules](https://nodejs.org/api/modules.html#modules_file_modules), [node_modules](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders) and [Folder Modules](https://nodejs.org/api/modules.html#modules_folders_as_modules).

## Defining a Module
A module is a separate unit of code that can be loaded by other modules. Usually a module maps to a JavaScript file. The definitions that you want to be exported have to be set to the _module.exports_ or the _exports_ variable.

Globals that are defined in a module are bind to the global object and can be accessed from other modules that load the module which defines the global.

An example file is available at [module_definition.js](module_definition.js).

### module.exports vs. exports
In general it is possible to use either _module.exports_ or _exports_ to export functionality from within a module. _exports_ is an alias for _module.exports_, i.e. _module.exports.my_fun = my_fun_ is the same as _exports.my_fun = my_fun_ and vice versa. You should take care if you assign an object to _module.exports_ or _exports_, for example _module.exports = my_obj_ respectively _exports = my_fun_. Since this assignment overrides the entire object, _exports_ and _module.exports_ will be different at this point. For such an assignment either use only _module.exports_ or set both variables to the same object by _module.exports = exports = my_obj_.

An example file is available at [exports_vs_module.exports.js](exports_vs_module.exports.js).

For a full documentation take a look at [https://nodejs.org/api/modules.html#modules_module_exports](https://nodejs.org/api/modules.html#modules_module_exports).

## Defining a Folder Module
Node.js allows that _require()_ loads a folder module, i.e. the path to _require_ is a path to a folder. Therefore the folder must contain a package.json file which defines the entry JavaScript file for that module.

You can find an example in [folder_module](folder_module). It is loaded in [module_loading.js](module_loading.js).

## Caching when Loading Modules
To prevent long loading times of Node.js modules, every required module is cached. Meaning that a second _require()_ invocation of an already required module returns the already required module back.

An example file is available at [caching.js](caching.js). It is loaded in the file [module_loading.js](module_loading.js).

For a full documentation take a look at [https://nodejs.org/api/modules.html#modules_caching](https://nodejs.org/api/modules.html#modules_caching).

## Defining Global and Module Variables Inside a Module
for more information and an example take a look at: [Module Scope](https://github.com/lgeorgieff/javascript/blob/master/node.js/040_globals/README.md#module-scope) and [Define a Global Variable in a Module Scope](https://github.com/lgeorgieff/javascript/blob/master/node.js/040_globals/README.md#define-a-global-variable-in-a-module-scope).

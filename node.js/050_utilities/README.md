# Util
The _util_ module contains functionality that can be used to support the internal APIs of Node.js or of any other module. To use it you can call _require('util');_

The entire documentation is available at [nodejs.org](https://nodejs.org/api/util.html).

# util.debuglog(section)
The function _debuglog_ can be used to print some logging information that is bound to a so-called section, i.e. a debuglog is initialized with a string value, e.g.
```javascript
var debuglog = require('util').debuglog('init');
debuglog('My logging information');
```

To activate the particular _init_ debuglog from the example you have to invoke the Node.js process with _NODE_DEBUG=init node my_script.js_.
You can also use multiple debuglogs. Each with a different name. Far activating all of them you can specify their names spearated by commas to _NODE&#95;DEBUG_.

You can find an example script at [debuglog.js](debuglog.js).

# util.format(formatString, arguments)
The _format_ function offers a printf-like possibility to format strings.
You can use the following placeholders:
* %s: string
* %d: number
* %j: JSON

If there are too many placeholders, i.e. they cannot consume any arguments, the remaining placeholder strings are printed.
If there are too many arguments, i.e. they cannot be consumed, the remaining arguments are returned as strings. The used string values for these arguments are created by _util.inspect()_.

You can find an example script at [format.js](format.js).

# util.inspect(object, [options])
The _inspect_ function returns a string representing the passed object. It is possible to define several options that affect the resulting string value.
The following options are available:
* showHidden
* depth
* colors
* customInspect

You can find an example script at [inspect.js](inspect.js).

It is also possible to define a method called _inspect(depths, options)_ on an object. This method will be used by the _util.inspect_ function if _customInspect_ is set to true (the default).

Via the properties _util.inspect.styles_ and _util.inspect.colors_ it is possible to influence the color settings of the returned string from _util.inspect_ if _colors_ is set to _true_.

The _console_ object offers the method [_console.dir(object, [options])_](https://nodejs.org/api/console.html#console_console_dir_obj_options). This method uses the _util.inspect_ function to print the string representation of the given object to the console.

#util.isX(object)
The util module also provides several functions to check the type of an object:
* _util.isArray(object)_
* _util.isRegExp(object)_
* _util.isDate(object)_
* _util.isError(object)_

All of these functions return either _true_ if the passed value corresponds to the checked type or _false_ if the passed value does not correspond to the passed object.

You can find an example script at [isX.js](isX.js).

# util.inherits(derivedType, superType)
This function can be used to extend a derived type from a super type, i.e. the super type's prototype methods are inherited to the derived type. In addition the property _derivedInstance.constructor.super&#95;_ is set to the super type.

You can find an example script at [inherits.js](inherits.js).

# util.deprecate(function, string)
Marks the given function as deprecated, i.e. this function returns a modified version of the given function that prints the given string as message/warning before the actual function is called.
* If --no-deprecation is set, the returned function is a NO-OP.
* If --throw-deprecation is set, Node.js will throw an exception if the returned function is used.

You can find an example script at [deprecate.js](deprecate.js).

# Deprecated Functions
The following functions are available in the _util_ module but are deprecated and should not be used.

* util.debug(string)
* util.error([...])
* util.puts([...])
* util.print([...])
* util.pump(readableStream, writableStream[, callback])

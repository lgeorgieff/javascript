The JavaScript language is standardized under [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm) respectively _ECMAScriptx_ (ESx). The latest standard is _ES6_ (June 2015), whereas the standard in version _ES5_ is the most often used version at the moment.

This article describes some changes that were made in _ES6_ compared to _ES5_. At http://es6-features.org/ you can find a very nice overview on all the changes made.

# Block Scoping
The _var_ keyword in _ES5_ is used to declare/define variables either globally or locally in an entire function. But it does not allow to define variables in a block scope, e.g. in an if-else-branch or a loop.
_ES6_ therefore introduces the keyword _let_ which allows to declare/define a variable in the scope of a block only. An important difference in addition to the scope-visibility is also the missing hoisting when using _let_.

You can find several examples of block scoping in [let.js](./let.js).

# Constant References
_ES6_ defines the keyword _const_ which can be used to declare a constant reference to an object. A reference defined with _const_ must be initialized in the begining and cannot be changed later. The object itself which is referenced is not immutable, i.e. it still can be modifed.

You can find several examples of constant reference in [const.js](./const.js).

# Arrow Functions
In general arrow functions are a shorter way to define anonymous functions respectively lambda functions in JavaScript. The following example illustrates the short arrow syntax to define a function:
```javascript
['a', 'b', 'C', 'd', 'e', 'F'].filter((item) => { return item === item.toLowerCase(); });
```
One special thing to know about arrow functions is that it is not possible to change the _this_ context, i.e. once the arrow function is defined the _this_ argument is bound to its context for its entire lifetime. Calling _bind()_ on the created arrow function has no effect, as well.

You can find several examples of arrow functions in [arrow_functions.js](./arrow_functions.js).

# Collections
ES6 defines several collection types that makes things easier:
* [Map](./map.js)
* [Set](./set.js)
* [WeakMap](./weak_map.js)
* [WeakSet](./weak_set.js)

# Iterables and Iterators
ES6 specifies two protocols the _iterable_ and the _iterator_ protocol. They help to implement custom containers which may be used in for-of-loops which are also defined in ES6. But they are also implemented in types such as _Map_, _Set_ and _Array_.

The _iterable_ API is an instance method that returns an _iterator_ object which is used to iterator through the entire container. This method is declared by using
```javascript
function MyContainer () { /* ... */ }
MyContainer.prototype[Symbol.iterator] = function () { /* ... */ };
```
The _iterator_ that is returned by this method can be implemented in two ways:

1. An object with the function _next()_ that returns a second object containing the properties _value_ and _done_. If the iterator points at a valid value in a container, _value_ holds the actual value and _done_ is set to _false_. If the iterator does not point to a valid value in a container, _value_ is set to _undefined_ and _done_ is set to _true_.
2. It is also possible to use generator functions which yield all the values of the container.

You can find an example of an iterable in [iterable.js](./iterable.js).

## Generator Functions
Genertor functions are not only useful for implementing the _iterable_ and _iterator_ protocols. They can also be used to implement a kind of lazy evaluation, e.g. for inifinite lists.

It is also possible to chain generators, i.e. a generator function can return a second generator function by using the keyword _yield*_ instead of _yield_.

You can find several examples of generator functions in [generators.js](./generators.js).

# Symbols
Symbols are primitive data types that may be used as property identifiers of objects. Once a symbol is created it is immutable and unique, i.e. _Symbol('a') !== Symbol('a')_.

ES6 defines several symbols, e.g. _Symbol.iterator_, _Symbol.match_, _Symbol.replace_, etc.

You can find an example of symbols in [symbols.js](./symbols.js).

# Numeric Literals
The JavaScript standard defines mutliple notations for numbers, i.e.:
* Binary notation
  * [&#92;-+]?0[bB][0-1]+
  * If a number > 1 follows the b/B, an error is raised.
* Octal notation
  * [&#92;-+]?0[0-7]+
  * If a number > 7 follows the leading 0, the number is parsed as a decimal number.
  * Not allowed in strict mode.
* Decimal notation
  * [&#92;-+]?[0-9]+
  * The standard notation for numbers.
* Hexadecimal notation
  * [&#92;-+]?0&#91;xX&#93;([0-1]|[A-F][a-f])+
  * If a character > f/F follows the x/X, an error is raised.

You can find several examples of numeric literals in [numeric_literal.js](./numeric_literals.js).

# Object Literal Notation
ES6 defines several shorthands for defining objects via the objetc literal notation:
* If the object defines a property that is bound to a variable with the same name as the property, it is not necessary to assign the value explicitly.
* Functions can be defined directly as properties.
* Getters and setters may be used within an object notation via the _get_ and _set_ keyword.

In addition the ES6 standards defines the possibility to set the prototype of an object via the _&#95;&#95;proto&#95;&#95;_ property.

You can find an example of an object literal notation in [object_literals.js](./object_literals.js).

# Promises
Since JavaScript is based on asynchronous principles, very often a lot of (nested) callbacks are used. This can cause code to be very unstructured and deeply nested. ES6 defines an object, the _Promise_, that solves this problem by offering a _resolve_ and _reject_ method inside the asynchronous function and a _then_ and _catch_ method outside the asynchronous function to allow chaining of promises.

A promise may be in one of the following states:
* pending: initial state
* fulfilled: operation completed successfully
* rejected: operation failed

In addition the methods _all_ and _race_ are provided. _all_ takes an array of promises and evaluates to the state fulfilled or rejected when either all given promises evaluate to fulfilled or at least one to rejected state. _race_ takes an array of promises and evaluates to the state fulfilled or rejected when either one of the given promises evaluates to fulfilled or to rejected state.

You can find an example of how to use promises in [promises.js](./promises.js).

# New String Methods
ES6 defines several new methods for the _string_ type to make _string_ handling easier:
* _startsWith(searchString[, position])_
* _endsWith(searchString[, position])_
* _includes(searchString[, position])_
* _repeat(count)_
* _codePointAt(pos)_
* _normalize([form])_

In addition the static method _fromCodePoint(num1[, ...[, numN]])_ is defined and a literal notation for unicode strings is introduced, e.g. _'\u{2F804}'_.

You can find some examples of the new string features in [string.js](./string.js).

# Template Strings
In addition to the normal way of defining strings, it is possible to use so-caled template strings. This means you can directly use expressions inside a string value. A template string is enclosed by backticks (`). It may contain string parts and expressions. An expression is of the form _${EXPRESSION}_.
```javascript
let str1 = `Hello World!`;
let str2 = `Hello
World!`;
let str3 = `${Date()}: Hello World`;
let someValue = 123;
let str4 = `The value someValue is: ${someValue}`;
```
You can find some examples of template strings in [template_strings.js](./template_strings.js).

# Spread Operator
The spread operator allows to destructure arrays, e.g. the array _[1, 2]_ can be passed to a function of the form _add(arg1, arg2)_ by writing _add(...[1, 2])_. In this case the apply function is not needed anymore.
In addition it is also possible to define functions with variadic arguments, e.g. _concatenateString(...strings)_.

The spread operator can be used with [Node.js](https://nodejs.org) only when specifying the command line argument _--es-staging_.

You can find some examples of the spread operator in [spread_operator.js](./spread_operator.js).

# Typed Arrays
The typed arrays feature allows to efficiently process binary data in JavaScript. For this ES6 defines several types of array-like structures that are restricted to a particular type, such as:
* Int8Array
* Uint8Array
* Uint8ClampedArray
* Int16Array
* Uint16Array
* Int32Array
* Uint32Array
* Float32Array
* Float64Array

Note: typed arrays are not instances of _Array_, i.e. _Array.isArray()_ will return false in case of a typed array.

In general working with typed arrays requires:

1. Create a raw data buffer of the type _ArrayBuffer_
2. Create a _DataView_ instance that is bound to the allocated buffer

The allocated _ArrayBuffer_ does not allow to access the raw data directly. But via a _DataView_ instance which refers to the buffer it is possible to access and modify the buffer's data. Is is also possible to use mutliple data views on one buffer.

You can find some examples of typed arrays in [typed_arrays.js](./typed_arrays.js).

# Classes
ES6 defines the new keyword _class_ which abstracts the protype based type system of JavaScript.
It allows the definition of classes similar to the Java syntax, i.e. it provides:
* the possibility to define classes as a whole via the _class_ keyword
 * allows the definition of a constructor
 * allows the definition of instance methods
 * allows the definition of static methods
* the possibility to define class hierarchies via the keyword _extends_
* the possiblity to use methods of the super type via the _super_ keyword

You can find some examples of the new class features of ES6 in [classes.js](./classes.js).

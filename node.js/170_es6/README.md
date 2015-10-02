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

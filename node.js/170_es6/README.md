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

The JavaScript language is standardized under [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm) respectively _ECMAScriptx_ (ESx). The latest standard is _ES6_ (June 2015), whereas the standard in version _ES5_ is the most often used version at the moment.

This article describes some changes that were made in _ES6_ compared to _ES5_. At http://es6-features.org/ you can find a very nice overview on all the changes made.

# Block Scoping
The _var_ keyword in _ES5_ is used to declare/define variables either globally or locally in an entire function. But it does not allow to define variables in a block scope, e.g. in an if-else-branch or a loop.
_ES6_ therefore introduces the keyword _let_ which allows to declare/define a variable in the scope of a block only. An important difference in addition to the scope-visibility is also the missing hoisting when using _let_.

You can find several examples of block scoping in [let.js](./let.js).

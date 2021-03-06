# This Repository
This repository covers some interesting code snippets for learning JavaScript and [node.js](https://nodejs.org/en/). In addition several HOWTOs and tool descriptions are available.

# node.js
This section provides some JavaScript snippets that are special to [node.js](https://nodejs.org/en/). [node.js](https://nodejs.org/en/) is a JavaScript runtime environment that is used for server-side JavaScript execution and is based on Google's [V8](https://code.google.com/p/v8/) JavaScript engine.
 1. [modules](node.js/000_modules/README.md)
 1. [debugging and profiling](node.js/010_debugging/README.md)
 1. [assert](node.js/020_assertions/README.md)
 1. [globals](node.js/040_globals/README.md)
 1. [util](node.js/050_utilities/README.md)
 1. [events](node.js/060_events/README.md)
 1. [console](node.js/150_console/README.md)
 1. [streams](node.js/110_streams/README.md)
 1. [smalloc](node.js/120_smalloc/README.md)
 1. [process](node.js/070_processes/README.md)
 1. [domains](node.js/090_domains/README.md)
 1. [buffers](node.js/100_buffers/README.md)
 1. [repl](node.js/130_repl/README.md)
 1. [event loop](node.js/160_event_loop/README.md)
 1. [ES6](node.js/170_es6/README.md)

# Memory
[This section](./memory/README.md) contains several examples of memory handling and garbage collection in a JavaScript runtime environment.
In addition some patterns are presented that may cause memory leaks.

# Closure Compiler
Google's closure compiler is a JavaScript to JavaScript compiler. It generates a much smaller code version of the input files. It can be used for performance improvement but also for error checking.
 1. [Closure compiler](closure_tools/closure_compiler/README.md)

# JavaScript Linting
1. [Closure Linter](closure_tools/closure_linter/README.md): The Closure Linter tool can be used to check the coding style and validity against the [Google JavaScript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
2. [JSLint](jslint/README.md): The JSLint tool can be used to check the coding style against the ideas from Douglas Crockford mentioned in [JavaScript: The Good Parts](http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf).
3. [JSHint](jshint/README.md): The JSHint tool can be used to check the coding style against configurable JavaScript rules.
4. [ESLint](eslint/README.md): The ESLint tool can be used to check the coding style against configurable JavaScript rules focusing on coding errors (not on pure syntax style).
5. [JSCS](jscs/README.md): The JSCS tool can be used to check the coding style against configurable JavaScript rules supporting syntax styles only (semantics are not checked at all).

# JSDoc
JSDoc is a special kind of comments and a tool for automatically generating code documentation from code comments.
 1. [JSDoc](jsdoc/README.md)

# Unit Tests
Many unit testing frameworks exist for JavaScript. An (incomplete) list of frameworks is available at [wikipedia](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript).

[This section](./jasmine/README.md) covers the unit testing framework [jasmine](http://jasmine.github.io/) in more detail and shows some basic examples, but also advanced features.

#Best Practices
TODO

Several unit testing frameworks exist for JavaScript. There are frameworks for frontend testing, for backend testing and for both. This article focuses on the unit testing framework [jasmine](http://jasmine.github.io/) that is used in a [node.js](https://nodejs.org/en/) environment. An (incomplete) list of frameworks is available at [wikipedia](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript).

# Installation & Configuration
To install [jasmine](http://jasmine.github.io/) you should install it via [npm](https://docs.npmjs.com/). You may install it globally, i.e. you can use a global-wide executable or you can install it locally and provide an [npm](https://docs.npmjs.com/) test script in the file [package.json](./package.json).

To make [jasmine](http://jasmine.github.io/) running, you have to write a configuration file and pass the path to the configuration file via the environment variable _JASMINE&#95;CONFIG&#95;PATH_.

The provided examples in this section use the configuration file [jasmine.config.json](./jasmine.config.json). The most important properties are:
* spec&#95;dir
* spec&#95;files

The _spec&#95;dir_ property defines the directory where all [jasmine](http://jasmine.github.io/) tests are located. The _spec&#95;files_ describe a glob expression of all test files [jasmine](http://jasmine.github.io/) should execute.

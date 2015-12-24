# Jasmine
Several unit testing frameworks exist for JavaScript. There are frameworks for frontend testing, for backend testing and for both. This article focuses on the unit testing framework [jasmine](http://jasmine.github.io/) that is used in a [node.js](https://nodejs.org/en/) environment. An (incomplete) list of frameworks is available at [wikipedia](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript).

## Installation & Configuration
To install [jasmine](http://jasmine.github.io/) you should install it via [npm](https://docs.npmjs.com/). You may install it globally, i.e. you can use a global-wide executable or you can install it locally and provide an [npm](https://docs.npmjs.com/) test script in the file [package.json](./package.json).

To make [jasmine](http://jasmine.github.io/) running, you have to write a configuration file and pass the path to the configuration file via the environment variable _JASMINE&#95;CONFIG&#95;PATH_.

The provided examples in this section use the configuration file [jasmine.config.json](./jasmine.config.json). The most important properties are:
* spec&#95;dir
* spec&#95;files

The _spec&#95;dir_ property defines the directory where all [jasmine](http://jasmine.github.io/) tests are located. The _spec&#95;files_ describe a glob expression of all test files [jasmine](http://jasmine.github.io/) should execute.

## Basic Usage
The spec files (files containing the tests) contain common JavaScript that uses special functions offered by [jasmine](http://jasmine.github.io/). A spec file may contain several test suites. Each test suite is defined in a _describe_ function. The first parameter is a string describing the name of the test suite. The second parameter is a function which contains so-called specs which in turn contain the actual tests. A basic example of a test suite can be found in the file [basics.spec.js](./basics.spec.js#L21).
```javascript
describe('This is a test suite', () => {
    // here some test specs may be defined
});
```

The callback passed to the _describe_ function may contain any code. The actual tests are performed in so-called specs. A spec is defined by a function named _it_ which is offered by [jasmine](http://jasmine.github.io/). The function _it_ takes as first argument a string which defines the name of the spec. As second argument it takes a function which contains the actual tests. A basic example of a spec can be found in the file [basics.spec.js](./basics.spec.js#L22).

```javascript
describe('This is a test suite', () => {
    it('This is a test spec', () => {
        // here some tests can be performed
    });

    // more test specs can go herer
});
```

Finally, the tests can be defined in the test specs. Therefore, [jasmine](http://jasmine.github.io/) offers the function _expect_. Each expectation takes an expression and evaluates its result against the specified matcher. A matcher compares the result from the expectation against a defined value in the matcher.

```javascript
describe('This is a test suite', () => {
    it('This is a test spec', () => {
        expect(true).toBe(true);
    });
});
```

Basic examples of test suites and test specs can be found in the file [basics.spec.js](./basics.spec.js).

### Default Matchers
[jasmine](http://jasmine.github.io/) provides the following matchers:
* [toBe](./basics.spec.js#L38)
* [toEqual](./basics.spec.js#L49)
* [toMatch](./basics.spec.js#L60)
* [toBeDefined](./basics.spec.js#L66)
* [toBeUndefined](./basics.spec.js#L74)
* [toBeNull](./basics.spec.js#L82)
* [toBeTruthy](./basics.spec.js#L87)
* [toBeFalsy](./basics.spec.js#L96)
* [toContain](./basics.spec.js#L105)
* [toBeLessThan](./basics.spec.js#L114)
* [toBeGreaterThan](./basics.spec.js#L121)
* [toBeCloseTo](./basics.spec.js#L128)
* [toThrow](./basics.spec.js#L150)
* [toThrowError](./basics.spec.js#L160)

In addition the function _expects_ provides the property _not_ which negotiates the actual matcher. An example can be found in the file [basics.spec.js](./basics.spec.js#L183).

To make a test failing, the function _fail()_ can be called manually. An example can be found in the file [basics.spec.js](./basics.spec.js#L189).

Since test suites and test specs are normal functions, they can be nested. An example can be found in the file [basics.spec.js](./basics.spec.js#L204).

### Pending Tests
If code changes broke some tests, test suites and test specs can be set in pending state, i.e. [jasmine](http://jasmine.github.io/) ignores them during a test run. When the code or the tests are adapted to the latest changes, the tests can be transformed back into non-pending state. To transfer a test suite into pending state, use _xdescribe_ instead of _describe_. To transfer a test spec into pending state, use _xit_ instead _it_. Examples are available in the file [basics.spec.js](./basics.spec.js) in line [213](./basics.spec.js#L213) and in line [223](./basics.spec.js#L223). The advantage of using pending test suites and specs is that they are still taken into account by [jasmine](http://jasmine.github.io/), i.e. after each run [jasmine](http://jasmine.github.io/) notifies the developer about pending test suites and specs. So the developer will not forget the disabled tests.


## Setup and Teardown
TODO: ...

## Asnychronous Tests
TODO: ...

## Spies
TODO: ...

## Custom Matchers
TODO: ...

## Advanced Configuration
TODO: ...

For more information on [jasmine](http://jasmine.github.io/) take a look at the [official documentation](http://jasmine.github.io/edge/introduction.html).
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
To eliminate duplicate code before each and/or after each test, [jasmine](http://jasmine.github.io/) offers the possibility to register so-called setup and teardown functions. Therefore [jasmine](http://jasmine.github.io/) provides the following functions:
* beforeEach (handler)
* afterEach (handler)
* beforeAll (handler)
* afterAll (handler)

Each handler may execute any code that can be used to perform some preparation before a test or some cleanup after a test.
* Handlers registered via _beforeEach_ are invoked before each spec.
* Handlers registered via _afterEach_ are invoked after each spec.
* Handlers registered via _beforeAll_ are invoked before the first spec is invoked.
* Handlers registered via _afterAll_ are invoked after the last spec was run.

It is possible to register several handlers via each of the four presented registration functions. The order of the invocation sequence of registered handlers corresponds to the order of the handler registration. If _beforeEach_ and _beforeAll_ handlers are registered, the handlers registered via _beforeAll_ are invoked first.

All setup and teardown handlers may be registered in the test file (outside of any test suite) or within a test suite. Handlers registered in the test file are globally valid, i.e. for each test suite. Handlers registered inside a test suite are valid only for specs included in this test suite.

An example of setup and teardown functions is available in the file [setup_and_teardown.spec.js](./setup_and_teardown.spec.js).

## This Context
[jasmine](http://jasmine.github.io/) offers the possibility to use the _this_ keyword to share variables in the functions _beforeEach_, _beforeAll_ and _it_. 

If a _this_ property is defined in a _beforeEach_ or _beforeAll_ handler outside of _describe_, the defined _this_ property is visible in all test specs of a test file. If a _this_ property is defined in a _beforeEach_ or _beforeAll_ handler inside of _describe_, the defined _this_ property is visible in all test specs inside the _describe_ function.

If a _this_ property is defined in a test spec it is not shared between other test specs inside a test suite.

Several examples can be found in the file [this.spec.js](./this.spec.js).

## Asynchronous Tests
Since JavaScript as language is asynchronous, a suitable testing framework should support asynchronous testing. [jasmine](http://jasmine.github.io/) offers the possibility to use asynchronous test specs, setup and teardown functions.

The handler passed to a test spec may contain a parameter - usually it is named _done_. This parameter is set by [jasmine](http://jasmine.github.io/) and may be used for asynchronous testing. I.e. after all asynchronous functions are passed _done_ can be used to signal [jasmine](http://jasmine.github.io/) that the functions were already executed.

```javascript
describe('My test suite', () => {
    it('My asynchronous test spec', (done) => {
        setTimeout(() => {
            // perform some tests
            done();
        }, 1000);
    });
});
```

If an asynchronous function should not be called at all, _done.fail()_ may be used to enforce that the test spec fails.

The _done_ parameter can be used for all handlers registered via _it_, _beforeEach_, _afterEach_, _beforeAll_ and _afterAll_.

If an asynchronous function fails and _done()_ is not called in the failing function, [jasmine](http://jasmine.github.io/) waits until the timeout defined by _jasmine.DEFAULT_TIMEOUT_INTERVAL_ expires. If some asynchronous function, e.g. for I/O takes longer for a specific functionality, the timeout _jasmine.DEFAULT_TIMEOUT_INTERVAL_ may be increased.

In addition to the _done_ parameter, [jasmine](http://jasmine.github.io/) offers the possibility of a clock implementation. This clock implementation can be used to simulate the clock on which timers depend on. Before a clock can be used, it must be installed via _jasmine.clock().install();_. After the clock-dependent tests are finished, the clock should be uninstalled via _jasmine.clock().uninstall();_. To move the clock forward, the function _jasmine.clock().tick(ticks);_ must be used.

Examples of asynchronous tests and of tests using [jasmine](http://jasmine.github.io/)'s clock implementation are available in the file [async.spec.js](./async.spec.js).

## Spies
In [jasmine](http://jasmine.github.io/) a spy can be used for stubbing and tracking functions and its parameters. Spies exist only in test suites and test specs, i.e. they can be defined directly inside _describe_, _it_ or in _beforeEach_ and _afterEach_ located inside _describe_.

A spy is created via the function _spyOn_ offered by [jasmine](http://jasmine.github.io/).

```javascript
describe('My test suite', () => {
    it('A spec that uses a spy.', () => {
        spyOn(contextOfFunction, 'spiedFunctionName');
        expect(contextOfFunction.spiedFunctionName).not.toHaveBeenCalled();
        contextOfFunction.spiedFunctionName();
        expect(contextOfFunction.spiedFunctionName).toHaveBeenCalled();
    });
});
```

With the matchers _toHaveBeenCalled_ and _toHaveBeenCalledWith_ it is possible whether the spied function was called and with which arguments it was called.

_spyOn_ creates an object that tracks all the calls of the function specified. But it only stubs the original function, i.e. the original function is never invoked. But [jasmine](http://jasmine.github.io/) offers further functionality to adapt spies:
* _callThrough()_
* _returnValue(theReturnValue)_
* _returnValues(arrayWithReturnValues)_
* _callFake(fakeImplementationOfFunction)_
* _throwError(errorToBeThrown)_

```javascript
describe('My test suite', () => {
    it('A spec that uses a spy and forwards the call to the real implementation', () => {
        // Call the real implementation of contextOfFunction.spiedFunctionName.
        spyOn(contextOfFunction, 'spiedFunctionName').and.callThrough();
    });
});
```

In addition spies offer a property called _calls_. It allows to get even more information about the spied function, such as a history of all parameters, this-context, etc. for all invocations.

* _any()_
* _count()_
* _argsFor(index)_
* _allArgs()_
* _all()_
* _mostRecent()_
* _first()_
* _reset()_

Examples of spies are available in the file [spies.spec.js](./spies.spec.js).

## Custom Matchers
Custom matchers can be defined to check expectations easier and focused on custom project needs. A custom matcher is provided by a property of an object. Each property represents a custom matcher.

```javascript
let customMatchers = {
    alwaysTrue (util, customEqualityTesters) {
        return {
            compare (actual, expected) {
                return {
                    pass: true
                };
            },
            negativeCompare (actual, expected) {
                return {
                    pass: true
                };
            }
        };
    },
    toBeTrue (util, customEqualityTesters) {
        return {
            compare (actual, expected) {
                return {
                    pass: actual === true
                };
            }
        };
    }
};
```

Each matcher factory, i.e. _alwaysTrue_ and _toBeTrue_ in the previous example takes two arguments which contains additional function from [jasmine](http://jasmine.github.io/) that can be used for comparisons. The actual comparison is done in an inner object's property called _compare_. It takes the actual and the expected value. The return value is again an object. This object has a property called pass, which references the result of the comparison. For the negative comparison (i.e. with X.not.Y) this result is negotiated in the default case. But it is also possible to implement a function called _negativeCompare_ which may define custom semantics for negative comparisons. This is demonstrated in the _alwaysTrue_ matcher. It will always return true, i.e. in cases without the _.not_ and in cases with the _.not_ property.

Finally the custom matchers must be registered.

```javascript
beforeEach(function() {
    jasmine.addMatchers(customMatchers);
});
```

An example with custom matchers is available in the file [custom_matchers.spec.js](./custom_matchers.spec.js).


For more information on [jasmine](http://jasmine.github.io/) take a look at the [official documentation](http://jasmine.github.io/edge/introduction.html).

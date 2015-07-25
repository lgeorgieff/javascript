Node.js' event module provides the EventEmitter class which can be used to implement the observer pattern in Node.js.

The EventEmitter offers the possibility to register callbacks to an event. The EventEmitter can fire an event, i.e. all registered callbacks are invoked. Usually the emitting class inherits from the EventEmitter class to provide event functionality. The event defintion is a string value, e.g. 'data' form the [HTTP response object](https://nodejs.org/api/http.html#http_http_request_options_callback).

The following methods are available on the EventEmitter class:
* addListener(event, listener)
* on(event, listener)
* once(event, listener)
* removeListener(event, listener)
* removeAllListeners([event])
* setMaxListeners(n)
* listeners(event)
* emit(event[, arg1][, arg2][, ...])

The full documentaiton is avialable [here](https://nodejs.org/api/events.html).

In [event&#95;emitter.js](event_emitter.js) you find an example script that uses the EventEmitter class. 

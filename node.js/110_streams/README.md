Streams are an abstraction of handling incoming and outgoing data in a (Node.js) application. Examples are access to the console (_process.stdin_ and _process.stdout_), HTTP requests, ...

There are several types of streams in Node.js:
* Readable streams
* Writeable streams
* Duplex streams
* Transform streams

Streams in Node.js are [EventEmitters](https://github.com/lgeorgieff/javascript/blob/master/node.js/060_events/README.md). If a stream is readable, it implements all functionality of _Readable_. If a stream is writable, it implements all functionality of _Writeable_. Thus, a _Duplex_ or _Transform_ stream implements both _Readable_ and _Writeable_.

The full description of this API is available at the Node.js [documentation](https://nodejs.org/api/stream.html).

#Readable Streams
Readable streams can be used to consume/read data from a source, e.g. the console (_process.stdin_). It is not possible to write into a _Readable_.

Readable streams operate in two modes:
 1. _flowing mode_: The data is read from the source and can be read by your registered _data_ event handlers. If no _data_ event handlers are registered and data is available in _flowing mode_, it is lost.
 2. _paused mode_: The data can be read by explicitly calling _stream.read()_.
 
## Switching to Flowing Mode
* Add a _data_ event handler
* Call the _stream.resume()_ method
* Call the _stream.pipe()_ method

An example script is available at [readable_flowing_mode.js](readable_flowing_mode.js).
 
## Switching to Paused Mode
* Call the _stream.pause()_ method (guaranteed only if no pipe destinations and _data_ event handlers are existing on the readable stream - currently (Node.js 0.12.7) works also without removing the pipe destinations and _data_ event handlers)

In paused mode you can use the method _stream.read([size])_ to get the data of the stream's internal buffer.

An example script is available at [readable_paused_mode.js](readable_paused_mode.js).

## Events
Node.js readable streams implement the [EventEmitter](https://github.com/lgeorgieff/javascript/blob/master/node.js/060_events/README.md) API and offer the following events:
* _readable_
* _data_
* _end_
* _closed_
* _error_

An example script is available at [readable_events.js](readable_events.js).

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

## Methods
* _readable.read([size])_: Tries to pull the data from a stream in _paused mode_.
* _readable.setEncoding(encoding)_: Set the encoding for the stream's buffer, e.g. _'utf8'_.
* _readable.resume()_: Will set the stream's mode into _flowing mode_, i.e. the stream will start to emit _data_ events.
* _readable.pause()_: Will set the stream into _paused mode_.
* _readable.isPaused()_: Returns a boolean indicating whether a stream was set explicitly to _paused mode_ or not.
* _readable.pipe(destination [, options])_: Forwards/writes the data from the readable stream into the writeable stream passed as destination. An example is available at [readable_multiple_pipes.js](readable_multiple_pipes.js).
* _readable.unpipe([destination])_: Removes the pipe from the readabe stream to the passed destination. If no destination is specified, all pipes are removed. An example is available at [readable_multiple_pipes.js](readable_multiple_pipes.js).
* _readable.unshift(chunk)_: The given chunk is pushed back into the internal stream buffer.
* _readable.wrap(stream)_: Wraps a stream object from old Node.js (< 0.10.0) libraries for compatibility reasons.


#Writable Streams
Writable streams can be used to write data to a source, e.g. the console (_process.stdout_). It is not possible to read from a _Writable_.

## Events
Node.js writable streams implement the [EventEmitter](https://github.com/lgeorgieff/javascript/blob/master/node.js/060_events/README.md) API and offer the following events:
* _drain_
* _finish_
* _pipe_
* _unpipe_
* _error_

An example script is available at [writable_events.js](writable_events.js).

## Writing into a Stream
The _Writeable_ class provides several possibilities to write data into the abstracted source.

The most common approach is to use the _writable.write(data [,encoding] [,callback])_ method.
* It writes the passed data into the source
* Returns a boolean value whether all data was written into the abstracted source (_true_) or whether it (or a part of it) was buffered in the stream's internal buffer (_false_).
* The _callback_ argument passed to this method is called after the data was entirely written into the abstracted source.
* If _data_ was not entirely wirtten into the abstracted source:
 * the common approach is to use the passed _callback_ to wait until the buffered data is written into the source and write new data to the source afterwards by using the method _write_ again. This ensures that new data is not buffered in the stream, thus it makes it more memory efficient.
 * another possibility is to use the _drain_ event. This event is fired if the method _write_ returned _false_ and when the last chunk of the buffered data was written into the source. Thus, _writable.once('drain', callback)_ can be used to write new data to the source after the buffered data was entirely written into the abstraced source.


You can also use the methods _writable.cork()_ and _writable.uncork()_ to buffer all the data which was passed by the method _writable.write()_.
* _writable.cork()_ motivates the stream to buffer all the data passed to it.
* _writable.uncork()_ motivates the stream to flush all the data passed to the stream since the _writable.cork()_ invocation.
* _writable.end()_ also causes the passed data since the last call of _cork()_ to be flushed.


When you are finished with writing to the stream you can use the method _writable.end([data] [,encoding] [callback])_ to close the stream.
* Optionally you can pass data that is written to the abstracted source before the stream is closed.
* If a callback is passed to this method, it is called when the _finish_ event of the stream is fired.

# Duplex Streams
Duplex streams implement both the _Readable_ and the _Writable_ APIs, e.g. [TCP sockets](https://nodejs.org/api/net.html#net_class_net_socket).

# Transform Streams
Transform streams implement both the _Readable_ and the _Writable_ APIs. The output is not equal to the input but it is computed from the input e.g. [crypto streams](https://nodejs.org/api/crypto.html).

The _process_ object is a property of the global object and can be accessed from everywhere. It gives you access to the current Node.js process's attributes. The full API description is available at the [Node.js documentation](https://nodejs.org/api/process.html).

# Events
The _process_ object implements the [EventEmitter](../060_events/README.md) functionality. You can register callbacks for the following events:
* _exit_
* _beforeExit_
* _uncaughtException_
* signal events, e.g. _SIGINT_, _SIGTERM_, etc.

You can find an example script for the events _exit_, _beforeExit_ and _uncaughtException_ at [events.js](events.js) and you can find an example script for signal events at [signals.js](signals.js)

# stdout and stderr
_process.stdout_ and _process.stderr_ are [Writable Stream](../110_streams/README.md#writable-streams)s to stdout and stderr. In contrast to the common streams used in Node.js they cannot be closed, i.e. the _finish_ event is never fired.

An example script is available at [streams.js](streams.js).

# stdin
_process.stdin_ is a  [Readable Stream](../110_streams/README.md#readable-streams) to stdin.

An example script is available at [streams.js](streams.js).

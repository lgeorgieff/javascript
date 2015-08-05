# console
The object _console_ offers multiple methods for writing to _stdout_ and _stderr_.These methods are synchronous if the destination is a file or a terminal. They are asynchronous if the destination is a pipe.

The entire documentation is available at the [Node.js API](https://nodejs.org/api/console.html) page.

## Writing to stdout
The object _console_ offers the following methods to write to _stdout_. Both are aliases for each other.
* _console.log([message] [, ...])_
* _console.info([message] [, ...])_

In addition _console.dir(object [, options])_ is available which prints the returned string by [util.inspect()](../050_utilities/README.md#utilinspectobject-options) from the given object on _stdout_.

## Writing to stderr
The object _console_ offers the following methods to write to _stderr_. Both are aliases for each other.
* _console.error([message] [, ...])_
* _console.warn([message] [, ...])_

In addition _console.trace([message], [...])_ is available which prints the given messages and an appended stacktrace to _stderr_.

## Printing Time Information
The method _console.time(message)_ can be used to start the measuring of a time interval. The method _console.timeEnd(message)_ can be used to print the message in conjunction with the elapsed time to _stdout_. If _console.endTime(message)_ is called multiple times the elapsed time until each call is printed, i.e. this method does not stop the actual timer.

You can find an example script at [console.js](console.js).

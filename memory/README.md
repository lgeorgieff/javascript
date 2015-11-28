# Memory Management in JavaScript
JavaScript is a managed programming language, i.e. usually you don't access memory buffer directly but the JavaScript runtime takes care about the memory. A so-called garbage collector will check unreferenced objects on the heap, will delete the object if it is unreferenced and free the corresponding memory.

The objects in the JavaScript runtime are organized as a graph with nodes and arcs. The root node is the global object, i.e. for [node.js](https://nodejs.org/en/) it is _global_ and for browsers it is _window_. Only objects are deleted that are not connected to the root node.

In some cases memory leaks can occur, i.e.
* the JavaScript runtime's garbage collector is implemented incorrectly and may not delete deletable objects
* the programmer creates unintended references from deleted objects to some node that is still in the graph and so prevents the garbage collector from cleaning the corresponding memory

The file [00_garbage_collection_example.js](./00_garbage_collection_example.js) illustrates general garbage collection in JavaScript. The file [10_circular_references.js](./10_circular_references.js) illustrates how circular dependencies are handled in a JavaScript environment.

For more information take a look at http://javascript.info/tutorial/memory-leaks.
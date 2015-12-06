# Memory Management in JavaScript
JavaScript is a managed programming language, i.e. usually you don't access memory buffer directly but the JavaScript runtime takes care about the memory. A so-called garbage collector will check unreferenced objects on the heap, will delete the object if it is unreferenced and free the corresponding memory.

The objects in the JavaScript runtime are organized as a graph with nodes and arcs. The root node is the global object, i.e. for [node.js](https://nodejs.org/en/) it is _global_ and for browsers it is _window_. Only objects are deleted that are not connected to the root node.

In some cases memory leaks can occur, i.e.
* the JavaScript runtime's garbage collector is implemented incorrectly and may not delete deletable objects
* the programmer creates unintended references from deleted objects to some node that is still in the graph and so prevents the garbage collector from cleaning the corresponding memory

The file [00_garbage_collection_example.js](./00_garbage_collection_example.js) illustrates general garbage collection in JavaScript. The file [10_circular_references.js](./10_circular_references.js) illustrates how circular dependencies are handled in a JavaScript environment.

For more information take a look at:
* https://strongloop.com/strongblog/node-js-performance-garbage-collection/
* https://strongloop.com/strongblog/node-js-performance-heap-profiling-tip/
* http://javascript.info/tutorial/memory-leaks

# Memory Leak Patterns in JavaScript

## Circular References
One very efficient way of checking whether an object is not referenced (may be garbage collected) or is referenced (may not be garbage collected) is [reference counting](https://en.wikipedia.org/wiki/Reference_counting). [Reference counting](https://en.wikipedia.org/wiki/Reference_counting) is in general:
* create a counter _C_ for an object _O_
* increase _C_ by _1_ if a new reference to _O_ is created
* decrease _C_ by _1_ if an existing reference is deleted (setting it to something else than _O_)
* free the memory of _O_ if _C_ is _0_

One problem of this mechanism can be circular references. For example if the objects _A_ and _B_ are existing and _A_ references _B_ and _B_ references _A_ but neither _A_ nor _B_ references a third object _C_. If the JavaScript runtime environment is not smart enough and does not discover a circular reference between _A_ and _B_ that does not reference _C_, _A_ and _B_ will never be deleted and may result in a memory leak. In this scenario a graph-based approach would be more secure. Since the nodes _A_ and _B_ would be connected to each other but no one of them would be connected to the root node.

## Closures
Inner functions are often used in JavaScript to restrict access to private variables that are defined in the outer function. The inner function is a so-called _closure_. It stores the entire scope of its outer function, i.e. the _closure_ references all variables existing in the outer function's scope.

```javascript
function outer () {
  let someValue = {};
  return function () {
    // someValue is used in this inner function and will not be deleted as long as it is referenced
    // here.
    someValue.number = 123;
    return someValue;
  };
}

let x = outer();
// Even at this point someValue exists, although outer is already processed. someValue will be
// deleted when the reference to the returned closure (x) is deleted.
x();
x = undefined;
// At this point someValue can be garbage collected since no reference to this object exists.
```

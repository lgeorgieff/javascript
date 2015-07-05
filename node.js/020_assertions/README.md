# Assertions

The _assert_ module is thought to implement simple checks in the code. The full documentation is part of the [Node.js documentation](https://nodejs.org/api/assert.html).

Some examples are available in this [repository](assert.js).

The following functionality is provided:

## assert(value[, message])
Expects a value that evaluates to _true_. Otherwise, an _assert.AssertionError_ is thrown. You can also use _assert.ok(value[, message])_ to acchieve the same results. In general this function(s) is identical to _assert.equal(!!value, true[,message])_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.equal(actual, expected[, message])
Expects two values that are checked for equality with the _== operator_. For value types the actual values are compared but for objects the references are compared, i.e. for objects you need to pass the same instances to get a positive result.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

```javascript
// 12 == 12 is true
assert.equal(12, 12);

// 12 == '12' is true
assert.equal(12, '12');

// {} == {} is false, since the references are not referring to the same instances.
assert.equal({}, {});

// obj == obj is true, since each time we pass the same reference to assert.equal().
var obj = { };
assert.equal(obj, obj);
```

## assert.notEqual(actual, expected[, message])
This function is the counterpart to _assert.equal()_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.strictEqual(actual, expected[, message])
This function offers the same functionality as _assert.equal()_ but uses the _=== operator_ instaed of the _== operator_. The difference of object types to value types remains.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.notStrictEqual(actual, expected[, message])
This function is the counterpart to _assert.strictEqual()_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.deepEqual(actual, expected[, message])
This function is similar to _assert.equal()_, but does not use the _== operator_. Instead a deep equality is tested, i.e. for every value type member of the passed object the _== operator_ is called.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

```javascript
// Returns true since each the algorithm iterates through all members of
// both objects and comapres each value types or recursively iterates
// through nested objects.
assert.deepEqual({value: {value: 123}}, {value: {value: '123'}}
```

## assert.notDeepEqual(actual, expected[, message])
This function is the counterpart to _assert.deepEqual()_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.throws(block, error[, message])
This function checks if the given code block throws an exception of the given type referenced by _error_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.doesNotThrow(block[, message])
This function is the counterpart to _assert.throws()_.

If a message is given, it is set on the thrown _assert.AssertionError_ as data member.

## assert.ifError(value)
This function throws an _assert.AssertionError_ if the given value is true.

## assert.fail(actual, expected, message, operator)
This function throws an exception that contains the members _actual_, _expected_, _message_ and _operator_ in the thrown _assert.AssertionError_ instance.

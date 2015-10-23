The [node.js](https://nodejs.org/en/) _Buffer_ class allows to handle binary data in JavaScript code. It refers to an allocated memory offers reading and writing memory via several methods.

With ES6 the JavaScript language itself introduces a feature called [typed arrays](../170_es6/README.md#typed-arrays), which has similar functionality to the [node.js](https://nodejs.org/en/) _Buffer_ class.

The _Buffer_ class offers the following methods for writing data into the buffer:
* buffer.write(string[, offset][, length][, encoding])
* buffer.writeUIntLE(value, offset, byteLength[, noAssert])
* buffer.writeUIntBE(value, offset, byteLength[, noAssert])
* buffer.writeIntLE(value, offset, byteLength[, noAssert])
* buffer.writeIntBE(value, offset, byteLength[, noAssert])
* buffer.writeUInt8(value, offset[, noAssert])
* buffer.writeUInt16LE(value, offset[, noAssert])
* buffer.writeUInt16BE(value, offset[, noAssert])
* buffer.writeUInt32LE(value, offset[, noAssert])
* buffer.writeUInt32BE(value, offset[, noAssert])
* buffer.writeInt8(value, offset[, noAssert])
* buffer.writeInt16LE(value, offset[, noAssert])
* buffer.writeInt16BE(value, offset[, noAssert])
* buffer.writeInt32LE(value, offset[, noAssert])
* buffer.writeInt32BE(value, offset[, noAssert])
* buffer.writeFloatLE(value, offset[, noAssert])
* buffer.writeFloatBE(value, offset[, noAssert])
* buffer.writeDoubleLE(value, offset[, noAssert])
* buffer.writeDoubleBE(value, offset[, noAssert])
* buffer.fill(value[, offset][, end])

The _Buffer_ class offers the following methods for reading data from the buffer:
* buffer.readUIntLE(offset, byteLength[, noAssert])
* buffer.readUIntBE(offset, byteLength[, noAssert])
* buffer.readIntLE(offset, byteLength[, noAssert])
* buffer.readIntBE(offset, byteLength[, noAssert])
* buffer.readUInt8(offset[, noAssert])
* buffer.readUInt16LE(offset[, noAssert])
* buffer.readUInt16BE(offset[, noAssert])
* buffer.readUInt32LE(offset[, noAssert])
* buffer.readUInt32BE(offset[, noAssert])
* buffer.readInt8(offset[, noAssert])
* buffer.readInt16LE(offset[, noAssert])
* buffer.readInt16BE(offset[, noAssert])
* buffer.readInt32LE(offset[, noAssert])
* buffer.readInt32BE(offset[, noAssert])
* buffer.readFloatLE(offset[, noAssert])
* buffer.readFloatBE(offset[, noAssert])
* buffer.readDoubleLE(offset[, noAssert])
* buffer.readDoubleBE(offset[, noAssert])
* buffer.toString([encoding][, start][, end])
* buffer.toJSON()

You can find an example script at [buffer.js](./buffer.js).

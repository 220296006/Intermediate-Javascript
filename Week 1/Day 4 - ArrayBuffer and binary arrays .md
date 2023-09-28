# Week 1: Window Events in JavaScript

## Day 4 – ArrayBuffer and binary arrays

### ArrayBuffer

An ArrayBuffer is a built-in object in JavaScript that represents a fixed-length, binary data buffer. It is part of the JavaScript TypedArray and ArrayBuffer APIs and is commonly used to work with binary data, especially in scenarios where you need to manipulate raw binary data directly, such as in networking, file I/O, or working with binary file formats like images, audio, or video.

Here are some key characteristics and concepts related to ArrayBuffer:

1. Fixed-Length: An ArrayBuffer has a fixed length, which is determined when it is created. Once created, you cannot change the size of the buffer.

2. Raw Binary Data: ArrayBuffer stores binary data in a contiguous block of memory. Unlike JavaScript arrays, it does not store elements of varying types; it is purely a raw binary data container.

3. Data Views: To work with the data stored in an ArrayBuffer, you typically use data view objects like DataView, TypedArray views (e.g., Uint8Array, Int16Array, etc.), or Buffer views (in Node.js). These views allow you to read and write binary data in various formats (e.g., integers, floats) and specify the byte order (endianness) when needed.

4. Memory Efficiency: ArrayBuffer is memory-efficient because it doesn't have the overhead of JavaScript objects and allows you to work with binary data at a low level.

Here's how you can create and use an ArrayBuffer:

```JS

// Creating an ArrayBuffer with a length of 16 bytes
const buffer = new ArrayBuffer(16);

// Creating a DataView to read and write data in the ArrayBuffer
const dataView = new DataView(buffer);

// Writing a 32-bit integer (4 bytes) to the buffer at offset 0
dataView.setInt32(0, 42, true); // Set the value 42 with little-endian byte order

// Reading the value from the buffer at offset 0
const value = dataView.getInt32(0, true); // Read the 32-bit integer with little-endian byte order

console.log(value); // Output: 42


```

In this example:

We create an ArrayBuffer with a length of 16 bytes.
We create a DataView object to work with the data stored in the ArrayBuffer.
We write a 32-bit integer (4 bytes) with a value of 42 to the buffer at offset 0 with little-endian byte order.
We then read the value back from the buffer at the same offset with the same byte order.
ArrayBuffer is a fundamental building block for working with binary data in JavaScript, and it is often used in conjunction with other APIs like the Fetch API, FileReader API, or WebSocket API for handling binary data in web applications.

### TypedArray

TypedArray is a JavaScript object that represents a view of raw binary data in a fixed-length ArrayBuffer. TypedArrays provide a way to work with binary data in a structured and typed manner, allowing you to perform various operations on the data, such as reading and writing numeric values, efficiently.

There are several different TypedArray types, each optimized for working with specific numeric data types:

1. Int8Array, Uint8Array: These TypedArrays represent arrays of 8-bit signed and unsigned integers, respectively.

2. Int16Array, Uint16Array: These represent arrays of 16-bit signed and unsigned integers.

3. Int32Array, Uint32Array: These represent arrays of 32-bit signed and unsigned integers.

4. Float32Array, Float64Array: These represent arrays of 32-bit and 64-bit floating-point numbers, respectively.

TypedArrays have a number of common properties and methods:

- length: A read-only property that specifies the number of elements in the TypedArray.

- buffer: A read-only property that references the underlying ArrayBuffer containing the binary data.

- byteLength: A read-only property that specifies the length of the binary data in bytes.

- byteOffset: A read-only property that specifies the offset in bytes from the beginning of the buffer to the start of the TypedArray's data.

- set(): A method that allows you to set the values of the TypedArray from an array-like or another TypedArray source.

- subarray(): A method that returns a new TypedArray representing a subview of the original TypedArray, allowing you to work with a portion of the data.

- slice(): A method that returns a new TypedArray containing a shallow copy of the elements from a specified start to end index.

Here's an example of creating and using a TypedArray:

```JS

// Create an ArrayBuffer with 16 bytes
const buffer = new ArrayBuffer(16);

// Create an Int32Array view on the buffer
const int32Array = new Int32Array(buffer);

// Fill the Int32Array with values
int32Array[0] = 42;
int32Array[1] = 23;

// Read values from the Int32Array
console.log(int32Array[0]); // Output: 42
console.log(int32Array[1]); // Output: 23

```

TypedArrays are particularly useful when working with binary data in various contexts, such as reading and writing files, handling network protocols, and manipulating pixel data in images. They provide both a structured and efficient way to work with binary data, especially when dealing with numeric values.

### Out-of-bounds behaviour

When you attempt to access an out-of-bounds value in a TypedArray in JavaScript, the behavior can vary depending on the situation:

1. Reading an Out-of-Bounds Value:

If you attempt to read a value from an index that is out of bounds in a TypedArray, you will get undefined. This behavior is similar to reading from an array in JavaScript.

```JS

const uint8Array = new Uint8Array(4); // Create a TypedArray with 4 elements
console.log(uint8Array[5]); // Outputs: undefined

```

2. Writing an Out-of-Bounds Value:

If you attempt to write a value to an index that is out of bounds in a TypedArray, it will not throw an error, but the value will not be written to the TypedArray, and the TypedArray's contents will remain unchanged.

```JS

const uint8Array = new Uint8Array(4); // Create a TypedArray with 4 elements
uint8Array[5] = 42; // This does not throw an error but has no effect
console.log(uint8Array); // Outputs: Uint8Array [ 0, 0, 0, 0 ]

```

It's important to note that accessing or modifying data outside the valid range of a TypedArray is not safe and can lead to unpredictable behavior or data corruption. Therefore, it's a best practice to always perform bounds checking and ensure that you are working within the valid index range of the TypedArray to avoid unintended consequences and potential security vulnerabilities.

Here's an example of how you can perform bounds checking before accessing or modifying a TypedArray:

```JS

const uint8Array = new Uint8Array(4);

const index = 5;
if (index >= 0 && index < uint8Array.length) {
  // Perform the operation only if the index is within bounds
  uint8Array[index] = 42;
} else {
  console.error('Index is out of bounds.');
}

```

By checking the index against the length of the TypedArray, you can ensure that you are accessing or modifying data within the valid range and prevent out-of-bounds errors.

### TypedArray Methods

TypedArray objects in JavaScript, such as Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, and Float64Array, provide several methods for working with binary data efficiently. These methods allow you to perform various operations on TypedArray objects, such as reading and writing values, copying data, and more. Here are some common TypedArray methods:

1. TypedArray.from(iterable, [mapFn], [thisArg]):

- Creates a new TypedArray from an iterable, such as an array or another TypedArray.
- An optional mapFn function allows you to transform values during the conversion.
- thisArg is an optional parameter for setting the this value when calling mapFn.

2. TypedArray.of(...values):

- Creates a new TypedArray with the provided values.

3. TypedArray.prototype.copyWithin(target, start, [end]):

- Copies a section of the TypedArray to another location in the same TypedArray.
-target is the index where the copy will start.
-start is the index of the first element to be copied.
-end (optional) is the index of the first element that is not copied.

4. TypedArray.prototype.fill(value, [start], [end]):

- Fills the TypedArray with the specified value.
- start (optional) is the index at which to start filling (default is 0).
- end (optional) is the index at which to stop filling (default is the - end of the TypedArray).

5. TypedArray.prototype.reverse():

- Reverses the order of elements in the TypedArray in-place.

6. TypedArray.prototype.sort([compareFunction]):

- Sorts the elements in the TypedArray in-place.
- compareFunction is an optional function for custom sorting.

7. TypedArray.prototype.subarray([begin], [end]):

- Returns a new TypedArray that is a shallow copy of the original with a specified subarray.
- begin (optional) is the index at which to begin extraction (default is 0).
- end (optional) is the index before which to end extraction (default is the length of the TypedArray).

8. TypedArray.prototype.slice([begin], [end]):

- Returns a new TypedArray that contains a shallow copy of elements from begin (inclusive) to end (exclusive).
- begin (optional) is the index at which to begin slicing (default is 0).
- end (optional) is the index before which to end slicing (default is the length of the TypedArray).

9. TypedArray.prototype.join([separator]):

- Joins all elements of the TypedArray into a string, separated by the specified separator (default is a comma).

10. TypedArray.prototype.toString():

- Returns a string representation of the TypedArray, similar to .join(',').

11. TypedArray.prototype.indexOf(searchElement, [fromIndex]):

- Returns the first index at which the specified searchElement is found, or -1 if it's not found.
-fromIndex (optional) is the index to start the search from (default is 0).'

12. TypedArray.prototype.lastIndexOf(searchElement, [fromIndex]):

- Returns the last index at which the specified searchElement is found, or -1 if it's not found.
-fromIndex (optional) is the index to start the search from (default is the end of the TypedArray).

These methods allow you to manipulate and work with TypedArray objects effectively, making them a powerful tool for handling binary data in JavaScript. The specific methods available may vary depending on the type of TypedArray you are working with.

### DataView

A DataView in JavaScript is a special object that provides a flexible and untyped view of binary data stored in an ArrayBuffer. Unlike TypedArrays, which are designed to work with binary data in a typed manner (e.g., Uint8Array for 8-bit unsigned integers), DataView allows you to interpret the data in an ArrayBuffer in a more flexible way, specifying the data type, byte order (endianness), and offset explicitly.

Key characteristics and features of DataView include:

1. Flexible Interpretation: With DataView, you can interpret the data in an ArrayBuffer as different types of data (e.g., integers, floats) without being restricted to a specific data type as in TypedArrays.

2. Endian Control: You can control the byte order (endianness) when reading or writing data using the DataView object. This is crucial when working with binary data formats that have a specific byte order requirement (e.g., network protocols).

3. Byte Offset: DataView allows you to specify an offset within the ArrayBuffer from which to start reading or writing data. This is useful when dealing with structured binary formats that have headers or multi-part data.

4. No Alignment Constraints: Unlike some TypedArrays that impose alignment constraints on data, DataView allows you to access individual bytes or arbitrary byte-aligned data.

Here's an example of how to use DataView:

```JS

// Create an ArrayBuffer with 8 bytes
const buffer = new ArrayBuffer(8);

// Create a DataView to work with the buffer
const dataView = new DataView(buffer);

// Write a 32-bit integer (4 bytes) with a value of 42 at byte offset 0 in little-endian byte order
dataView.setInt32(0, 42, true);

// Read the 32-bit integer from byte offset 0 with little-endian byte order
const value = dataView.getInt32(0, true);

console.log(value); // Output: 42


```

In this example, we:

Create an ArrayBuffer with 8 bytes.
Create a DataView to work with the buffer.
Write a 32-bit integer with a value of 42 at byte offset 0 in little-endian byte order.
Read the 32-bit integer from byte offset 0 with the same byte order.
DataView is particularly useful when working with complex binary data formats, binary file I/O, network protocols, and other scenarios where you need precise control over data interpretation and byte order. It provides the flexibility to work with binary data in a way that TypedArrays cannot offer.

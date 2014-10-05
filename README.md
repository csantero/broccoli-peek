broccoli-peek
=============

Allows you to inspect a broccoli tree's directory programmatically.

## Installation

```
npm install --save broccoli-peek
```

## Usage

### `peek(sourceTree, peekHandler, cleanupHandler)`

* `sourceTree` is the tree you wish to inspect.

* `peekHandler` is a function that will be called when the peek tree has gained access to the source tree. It will be passed a single argument, an absolute path to `sourceTree`'s directory. You can optionally return a value from this function that will be passed to the `cleanupHandler`.

* `cleanupHandler` is an optional function that lets you perform any teardown before the source tree's directory is removed. It will be passed the path to the source tree's directory, and the value you returned from `peekHandler`.

The tree returned by `peek` is merely a passthrough for the content of `sourceTree`. You can pass this tree to any other plugin as if it were `sourceTree` itself.


## Examples

```js
var peek = require('broccoli-peek');

var sourceTree = some_function_that_returns_a_tree();
var peekedTree = peek(sourceTree, function (dirname) {
  // dirname is the absolute path to sourceTree's output directory
});
```

```js
var peek = require('broccoli-peek');

var obj = {
  foo: 3
};

var sourceTree = some_function_that_returns_a_tree();
var peekedTree = peek(sourceTree, function (dirname) {
  return obj;
}, function (dirname, context) {
  // context === obj
});
```

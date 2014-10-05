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

* `peekHandler` is a function that will be called when the source tree changes. It will be passed a single argument, an absolute path to `sourceTree`'s directory.

The tree returned by `peek` is merely a passthrough for the content of `sourceTree`. You can pass this tree to any other plugin as if it were `sourceTree` itself.


## Examples

```js
var peek = require('broccoli-peek');

var sourceTree = some_function_that_returns_a_tree();
var peekedTree = peek(sourceTree, function (dirname) {
  // dirname is the absolute path to sourceTree's output directory
});
```

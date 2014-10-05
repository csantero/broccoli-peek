broccoli-peek
=============

Allows you to inspect a broccoli tree's directory programmatically.

## Installation

```
npm install --save broccoli-peek
```

## Usage

### `peek(sourceTree, peekHandler, cleanupHandler)`


## Examples

```
var peek = require('broccoli-peek');

var sourceTree = some_function_that_returns_a_tree();
var peekedTree = peek(sourceTree, function (dirname) {
  // dirname is the absolute path to sourceTree's output directory
});
```

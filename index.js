var fs = require('fs');
var path = require('path');
var symlinkOrCopySync = require('symlink-or-copy').sync;

module.exports = PeekPlugin;

function PeekPlugin (inputTree, peekHandler) {
  if (!(this instanceof PeekPlugin)) {
    return new PeekPlugin(inputTree, peekHandler);
  }
  this.inputTree = inputTree;
  this.peekHandler = peekHandler;
}

PeekPlugin.prototype.read = function (readTree) {
  var self = this;
  return readTree(this.inputTree).then(function (srcDir) {
    if (self.destDirName) {
      fs.unlinkSync(self.destDirName);
    }
    self.destDirName = './tmp/peek_at-' + path.basename(srcDir);
    symlinkOrCopySync(srcDir, self.destDirName);
    if (self.peekHandler) {
      self.peekHandler(srcDir);
    }
    return self.destDirName;
  });
};

PeekPlugin.prototype.cleanup = function () {
  fs.unlinkSync(this.destDirName);
};

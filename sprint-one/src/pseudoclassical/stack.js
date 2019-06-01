var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
}

Stack.prototype.pop = function() {
  var remove = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return remove;
};


Stack.prototype.push = function(value) {
  return this.storage[this.size()] = value;
};


Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


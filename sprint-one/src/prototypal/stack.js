var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
return Object.keys(this.storage).length;
}

stackMethods.push = function (value) {
  var size = this.size();
  return this.storage[size] = value;
   
}

stackMethods.pop = function() {
  var size = this.size();
  var remove = this.storage[size - 1];
  delete this.storage[size - 1];
  return remove;

}


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}

  someInstance.storage = {}

  extend(someInstance, stackMethods)

  // console.log('someInstance ', someInstance);
  return someInstance;
};


var extend = function(to, from) {
  for(var key in from){
    to[key] = from[key];
  }
};



var stackMethods = {};

stackMethods.push = function (value) {

  var size = this.size();
  this.storage[size] = value;
}

stackMethods.pop = function () {
  var size = this.size();
  var remove = this.storage[size - 1];
  delete this.storage[size - 1];
  return remove;
}

stackMethods.size = function () {

  return Object.keys(this.storage).length;
}
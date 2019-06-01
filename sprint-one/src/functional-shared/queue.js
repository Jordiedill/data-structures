var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


var storage = {};
extend(storage, queueMethods);
return storage;
};

var extend = function(to, from) {
  for(var key in from){
    to[key] = from[key];
  }
};

queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this).length - 3;
};

var counter = 0;
queueMethods.dequeue = function() {
  var remove = this[counter];
  delete this[counter];
  counter++
  return remove;
};

queueMethods.enqueue = function(value) {
  var size = Object.keys(this).length - 3;
  return this[size + counter] = value;
};



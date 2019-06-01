var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods)

  someInstance.storage = {};

  return someInstance;
};

  var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length; 
}

  var counter = 0;
queueMethods.dequeue = function () {
  var remove = this.storage[counter];
  
  delete this.storage[counter];

  counter++;

  return remove;
}

queueMethods.enqueue = function (value) {
  var size = Object.keys(this.storage).length;
  return this.storage[size + counter] = value;
}


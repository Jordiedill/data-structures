var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

console.log(this)
  
  this.storage = {}

};

var counter = 0;
Queue.prototype.dequeue = function() {

  var remove = this.storage[counter]
  
  delete this.storage[counter] 

  counter++
  
  return remove;
};


Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(value) {
  var size = this.size();
  return this.storage[size + counter] = value;
};
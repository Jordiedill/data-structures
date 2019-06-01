var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0; 
  someInstance.enqueue = function(value) {
    var size = someInstance.size();
   return storage[size + counter] = value;
  };

  someInstance.dequeue = function() {
   var remove = storage[counter];
  
  delete storage[counter];

  counter++

  return remove;
  
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
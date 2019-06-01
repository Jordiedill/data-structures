var Stack = function(v) {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = someInstance.size();
    return storage[size] = value;
    //console.log(someInstance.size())
  };
  someInstance.pop = function() {
    var size = someInstance.size();
    var sub = storage[size - 1];
    delete storage[size - 1];
    return sub;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
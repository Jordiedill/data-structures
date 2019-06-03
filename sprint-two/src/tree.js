var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for(var key in from){
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childrenArr = this.children;
  childrenArr.push(Tree(value));
};

treeMethods.contains = function(target) {
  // loop through all of the objects in a specific tree.
  //if not found, do the same for the others
  //use recursion (Same as the monday assessment)
  var recurse = function(obj) {
    if (this.value === target) {
      return true;
    }  
    else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        recurse(this.children[i])
      }
    }
    return false;
  }
 return recurse(this.children)
//check if current objs value is the same as target
// if not, check to see if obj has children,
//if so, rexcurse into this.children
//if found return true
//otherwise return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

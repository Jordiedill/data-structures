var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removedVal = list.head.value;

    if(list.head === null) {
      return undefined;
    }



    if (list.head === list.tail) {
      list.head = null;
      list.tail= null;
      return removedVal;
    }


    list.head = list.head.next

    return removedVal;

  }

  list.contains = function(target) {

    if(list.head != null){

        var recurse = function (obj) {
          if(obj.value === target){
            return true;
          }
          if(obj.next === null){
            return false;
          }
          return recurse(obj.next);
        }

      recurse(list.head.next);

    }

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
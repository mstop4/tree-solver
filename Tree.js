var TreeNode = require("./TreeNode.js");

function Tree() {
  this.root = null;
}

Tree.prototype = {
  
  // Generate a random tree
  generate : function(numNodes, numColours) {

    var stack = [];
    this.root = new TreeNode();

    stack.push([this.root, 0, numNodes-1]);

    while (stack.length > 0) {
      var curNode = stack.pop();
      var min = curNode[1];
      var max = curNode[2];
      
      var value = randomRangeInt(min, max);
      curNode[0].value = value;
      curNode[0].colour = randomRangeInt(0, numColours-1);

      // Create a left child if possible
      if ((value - 1) - min > -1) {
        curNode[0].leftChild = new TreeNode();
        stack.push([curNode[0].leftChild, min, value-1]);
      }

      // Create a right child if possible
      if (max - (value + 1) > -1) {
        curNode[0].rightChild = new TreeNode();
        stack.push([curNode[0].rightChild, value+1, max]);
      }
    }
  },

  destroy: function() {
    this.root = null;
    // var stack = [];

    // stack.push(this.root);

    // while (stack.length > 0) {
    //   var curNode = stack.pop();
    //     curNode.leftChild ? stack.push(curNode.leftChild) : null;
    //     curNode.rightChild ? stack.push(curNode.rightChild) : null;
    //     curNode = null;
    //     console.log("null")
    // }
  },

  findAllLeaves : function() {
    var stack = [];
    var leaves = [];
  
    if (this.root) {
      stack.push(this.root);

      while (stack.length > 0) {
        var curNode = stack.pop();
        if (!curNode.leftChild && !curNode.rightChild) {
          leaves.push(curNode.value);
        } else {
          curNode.leftChild ? stack.push(curNode.leftChild) : null;
          curNode.rightChild ? stack.push(curNode.rightChild) : null;
        }
      }
    }
    return leaves;
  },

  findPenultimateNodes : function() {
    var penultimates = [];
    
    if (this.root) {
      traverse(this.root, []);
    }

    return penultimates;

    function traverse(curNode, trace) {
      if (!curNode.leftChild && ! curNode.rightChild &&
          trace[trace.length-1] && !penultimates.includes(trace[trace.length-1].value)) {
        penultimates.push(trace[trace.length-1].value);
      } else {
        trace.push(curNode);
        curNode.leftChild ? traverse(curNode.leftChild, trace) : null;
        curNode.rightChild ? traverse(curNode.rightChild, trace) : null;
      }
    }
  },

  print : function() {
    var nodes = {};
    var stack = [];

    stack.push([this.root, 0]);

    while (stack.length > 0) {
      var curParams = stack.pop();
      var curNode = curParams[0];
      var curLevel = curParams[1];
      nodes[curNode.value] = curLevel;

      curNode.leftChild ? stack.push([curNode.leftChild, curLevel+1]) : null;
      curNode.rightChild ? stack.push([curNode.rightChild, curLevel+1]) : null;
    }

    for (value in nodes) {
      var str = "  ".repeat(nodes[value]) + value;
      console.log(str);
    }
  }
}

module.exports = Tree;

function randomRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
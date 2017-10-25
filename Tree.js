var TreeNode = require("./TreeNode.js");

function Tree() {
    this.root = null
}

Tree.prototype.generate = function(numNodes) {

  var stack = [];
  this.root = new TreeNode();

  stack.push([this.root, 0, numNodes-1]);

  while (stack.length > 0) {
    var curNode = stack.pop();
    var min = curNode[1];
    var max = curNode[2];
    
    var value = randomRangeInt(min, max);
    curNode[0].value = value;

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
}

Tree.prototype.print = function() {
  var nodes = {};
  var curLevel = 0;
  var stack = [];

  stack.push(this.root);

  while (stack.length > 0) {
    var curNode = stack.pop();
    nodes[curNode.value] = curLevel;
    curLevel++;

    curNode.leftChild ? stack.push(curNode.leftChild) : null;
    curNode.rightChild ? stack.push(curNode.rightChild) : null;
  }

  for (value in nodes) {
    var str = "  ".repeat(nodes[value]) + value;
    console.log(str);
  }
}

// Tree.prototype.getNodeInfo = function(curNode, curLevel) {
//   nodes[curNode.value] = curLevel;

//   this.getNodeInfo(curNode.leftChild, curLevel+1);
//   this.getNodeInfo(curNode.rightChild, curLevel+1);
// }

module.exports = Tree;

function randomRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
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

module.exports = Tree;

function randomRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
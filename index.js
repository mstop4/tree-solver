"use strict"

var Tree = require("./Tree.js");

console.log("happy little trees");

var tree = new Tree();
tree.generate(50,5);
console.dir(tree.findAllLeaves());
tree.destroy();
console.dir(tree);
console.dir(tree.findAllLeaves());
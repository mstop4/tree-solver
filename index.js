"use strict"

var Tree = require("./Tree.js");

console.log("happy little trees");

var tree = new Tree();
tree.generate(50,5);
tree.print();
console.dir(tree.findAllLeaves());
console.dir(tree.findPenultimateNodes());
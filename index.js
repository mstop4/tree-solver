"use strict"

var Tree = require("./Tree.js");

console.log("hello world");

var tree = new Tree();
tree.generate(5);

console.dir(tree);

tree.print();
import Node from "./CNode.js";

const node = new Node(1);

const node2 = new Node(2);
node.setNextNode(node2);

console.log(node);

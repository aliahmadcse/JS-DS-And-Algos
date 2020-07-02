import LinkedList from "./LinkedList.js";

let seasons = new LinkedList();

seasons.printList();

seasons.addToHead("summer");
seasons.addToHead("spring");
seasons.printList();

seasons.addToTail("fall");
seasons.addToTail("winter");
seasons.printList();

seasons.removeHead();
seasons.printList();

seasons.removeNode("winter");
seasons.printList();

seasons.addToHead("summer");
seasons.addToHead("summer");
seasons.printList();
seasons.removeDuplicates();
seasons.printList();

// testing swap method
const numList = new LinkedList();
for (let i = 0; i < 10; i++) {
    numList.addToHead(i);
}

numList.printList();

numList.swapNodes(6, 9);
numList.printList();
console.log(numList.nthLastNode(3));

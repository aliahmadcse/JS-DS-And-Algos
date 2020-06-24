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

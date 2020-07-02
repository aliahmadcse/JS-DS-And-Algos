import DLinkedList from "./DLinkedList.js";

const subway = new DLinkedList();

subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");

subway.printList();

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");

subway.printList();

subway.removeHead();
subway.removeTail();

subway.printList();

subway.removeByData("TimesSquare");

subway.printList();

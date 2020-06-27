import Node from "./CNode.js";

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Adds to the head of the list
     * @param {any} data
     */
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    /**
     * prints the list
     */
    printList() {
        let currentNode = this.head;
        let output = "<head> ";
        while (currentNode !== null) {
            output += currentNode.data + " ";
            currentNode = currentNode.getNextNode();
        }
        output += "<tail>";
        console.log(output);
    }
}

export default DLinkedList;

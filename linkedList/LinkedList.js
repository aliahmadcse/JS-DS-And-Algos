import Node from "./CNode.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.counter = 0;
    }

    /**
     * Add a new Node to the head of linkedList
     * @param {any} data data of any primitive type
     */
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            newHead.setNextNode(currentHead);
        }
        // this.counter++;
    }

    /**
     * add a new node at the end of the list
     * @param {any} data
     */
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
        // this.counter++;
    }

    /**
     * Remove the first node from linkedList where node.data=data
     * @param {any} data
     * @returns {any} data returns data of the removed node
     */
    removeNode(data) {
        let removedNode = this.head;
        if (!removedNode) {
            return;
        }
        let prevNode = this.head;
        while (removedNode) {
            if (removedNode.data == data && prevNode == removedNode) {
                this.head = removedNode.getNextNode();
                return removedNode.data;
            } else if (removedNode.data == data) {
                prevNode.setNextNode(removedNode.getNextNode());
                return removedNode.data;
            }
            prevNode = removedNode;
            removedNode = removedNode.getNextNode();
        }
    }

    /**
     * @returns {Node} returns node on the head of the linkedList
     */
    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        // this.counter--;
        return removedHead.data;
    }

    /**
     * print all the nodes data in the linedList
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

export default LinkedList;

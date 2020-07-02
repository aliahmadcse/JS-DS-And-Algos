import Node from "./CNode.js";

class LinkedList {
    constructor() {
        this.head = null;
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
        return removedHead.data;
    }

    /**
     * Removes all the nodes with duplicate data
     */
    removeDuplicates() {
        let currentNode = this.head;
        if (!currentNode) {
            return;
        }
        let runnerNode = currentNode;
        while (currentNode) {
            let prevRunnerNode = runnerNode;
            runnerNode = currentNode.getNextNode();
            while (runnerNode) {
                let isRemoved = false;
                if (currentNode.data == runnerNode.data) {
                    prevRunnerNode.setNextNode(runnerNode.getNextNode());
                    isRemoved = true;
                }
                if (!isRemoved) prevRunnerNode = runnerNode;
                runnerNode = runnerNode.next;
            }
            currentNode = currentNode.next;
        }
    }

    /**
     * swaps two nodes with data1 and data2
     * @param {any} data1
     * @param {any} data2
     */
    swapNodes(data1, data2) {
        if (data1 === data2) {
            console.log("Elements are the same - no swap needed.");
            return;
        }
        let node1 = this.head;
        let node2 = this.head;
        let node1Prev = null;
        let node2Prev = null;
        // looping to find data1
        while (node1) {
            if (node1.data === data1) {
                break;
            }
            node1Prev = node1;
            node1 = node1.getNextNode();
        }
        // looping to find data2
        while (node2) {
            if (node2.data === data2) {
                break;
            }
            node2Prev = node2;
            node2 = node2.getNextNode();
        }
        // if any of data1 or data2 is not matched
        if (node1 === null || node2 === null) {
            console.log(
                "Swap not possible - one or more element is not in the list"
            );
            return;
        }
        // means node1 is head
        if (!node1Prev) {
            this.head = node2;
        } else {
            node1Prev.setNextNode(node2);
        }
        // means node2 is head
        if (!node2Prev) {
            this.head = node1;
        } else {
            node2Prev.setNextNode(node1);
        }
        // adjusting the next node of node1 and node2
        let temp = node1.getNextNode();
        node1.setNextNode(node2.getNextNode());
        node2.setNextNode(temp);
    }

    /**
     * returns linked list nth last node data
     * through an array implementation
     * Starts nth node counting from 1
     * @param {int} n the nth node to be returned
     */
    arrayNthLast(n) {
        const linkedListArr = [];
        let currentNode = this.head;
        while (currentNode) {
            linkedListArr.push(currentNode);
            currentNode = currentNode.getNextNode();
        }
        return linkedListArr[linkedListArr.length - n].data;
    }

    /**
     * uses an extra pointer to returns nth last node of list
     * Starts nth node counting from 1
     * @param {int} n
     */
    nthLastNode(n) {
        let nthLastNodePtr = null;
        let tailPtr = this.head;
        let count = 0;

        while (tailPtr) {
            tailPtr = tailPtr.getNextNode();
            if (count >= n) {
                if (!nthLastNodePtr) {
                    nthLastNodePtr = this.head;
                }
                nthLastNodePtr = nthLastNodePtr.getNextNode();
            }
            count++;
        }
        return nthLastNodePtr;
    }

    /**
     * prints all the nodes data in the linedList
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

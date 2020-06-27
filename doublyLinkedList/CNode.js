// the node module

class CNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node instanceof CNode || node === null) {
            this.next = node;
        } else {
            throw new Error("Next node must be a member of the Node class");
        }
    }

    setPreviousNode(node) {
        if (node instanceof CNode || node === null) {
            this.previous = node;
        } else {
            throw new Error("Previous node must be a member of the Node class");
        }
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

export default CNode;

class CNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (!(node instanceof CNode)) {
            throw new Error("Next node must be a member of the Node class");
        }
        this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}

export default CNode;

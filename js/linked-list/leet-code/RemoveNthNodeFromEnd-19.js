const LinkedList = require("./../LinkedList");

class RemoveNthNodeFromEnd19 extends LinkedList {

    count;

    constructor () {
        super();
        this.count = 0;
    }

    removeRecursive ( node, n ) {
        if ( node === null ) return node;
        const nextNode = this.removeRecursive(node.next, n);
        this.count++;
        if ( this.count === n + 1 ) {
            node.next = nextNode.next;
        }
        return node;
    }

    removeNode ( node = this.head, n ) {
        const head = this.removeRecursive(node, n);
        console.log("count", this.count);
        if ( this.count === n ) {
            const next1 = node.next;
            node.next = null;
            this.head = next1;
            return next1;
        }
        return head;
    }
}

const ll = new RemoveNthNodeFromEnd19();
ll.createList();
ll.printList();
ll.removeNode(undefined, 5);
ll.printList();

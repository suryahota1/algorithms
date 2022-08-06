const LinkedList = require("../geeks4geeks/LinkedList");

class DeleteMiddleNode extends LinkedList {

    constructor () {
        super();
    }

    deleteMiddle () {
        let slowPtr = null;
        let fastPtr = this.head;

        while ( fastPtr && fastPtr.next ) {
            slowPtr = slowPtr === null ? this.head : slowPtr.next;
            fastPtr = fastPtr.next.next;
        }
        console.log("slowPtr", slowPtr);
        if ( slowPtr === null ) {
            this.head = null;
        } else {
            const nextNext = slowPtr.next.next;
            slowPtr.next.next = null;
            slowPtr.next = nextNext; 
        }
    }
}

const ll = new DeleteMiddleNode();
ll.createList();
ll.printList();
ll.deleteMiddle();
ll.printList();

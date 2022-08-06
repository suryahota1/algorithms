const LinkedList = require("./../geeks4geeks/LinkedList");

class ReverseBetween extends LinkedList {

    constructor () {
        super();
    }

    reverse ( left, right ) {
        if ( !this.head || !this.head.next || left === null || right === null ) {
            return this.head;
        }
        let connectorPrevPtr = null;
        let reversePrevPtr = null;
        let currPtr = this.head;
        let isLeftFound = false;
        let count = 0;

        while ( currPtr !== null ) {
            const nextPtr = currPtr.next;
            count++;
            if ( isLeftFound ) {
                currPtr.next = reversePrevPtr;
                if ( count === right ) {
                    if ( connectorPrevPtr !== null ) {
                        connectorPrevPtr.next.next = nextPtr;
                        connectorPrevPtr.next = currPtr;
                    } else {
                        this.head.next = nextPtr;
                        this.head = currPtr;
                    }
                    break;
                }
            } else {
                if ( count === left ) {
                    isLeftFound = true;
                    connectorPrevPtr = reversePrevPtr;
                }
            }
            reversePrevPtr = currPtr;
            currPtr = nextPtr;
        }
    }
}

const ll = new ReverseBetween();
ll.createList();
ll.printList();
ll.reverse(2, 4);
ll.printList();

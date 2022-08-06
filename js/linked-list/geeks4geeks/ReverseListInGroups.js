const LinkedList = require("./LinkedList");

class ReverseListInGroups extends LinkedList {

    constructor () {
        super();
    }

    reverse ( n ) {
        if ( this.head === null || this.head.next === null ) {
            return this.head;
        }

        let count = 0;
        let curr = this.head;
        let prevConnector1 = null;
        let prevConnector2 = null;
        let prev = null;
        let newHead = null;

        while ( curr != null ) {
            count++;

            const nextCurr = curr.next;
            
            if ( (count - 1) % n === 0 ) {
                curr.next = null;
                if ( prevConnector2 ) {
                    prevConnector1 = prevConnector2;
                }
                prevConnector2 = curr;
            } else {
                curr.next = prev;
            }
            prev = curr;

            if ( (count % n === 0) || (nextCurr === null) ) {
                if ( prevConnector1 ) {
                    prevConnector1.next = curr;
                }
                if ( count <= n ) {
                    newHead = curr;
                }
            }
            curr = nextCurr;
        }
        this.head = newHead;
    }
}

const ll = new ReverseListInGroups();
ll.createList();
ll.printList();
ll.reverse(12);
ll.printList();

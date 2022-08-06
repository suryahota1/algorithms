const LinkedList = require("./LinkedList");

class ReverseList extends LinkedList {

    constructor () {
        super();
    }

    reverse () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let prev = null;
        let curr = this.head;

        while ( curr !== null ) {
            const nextCurr = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextCurr;
        }
        this.head = prev;
    }
}

const ll = new ReverseList();
ll.createList();
ll.printList();
ll.reverse();
ll.printList();

const LinkedList = require("./LinkedList");

class ReverseLinkedList extends LinkedList {
    
    constructor () {
        super();
    }

    reverseList () {
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

const ll = new ReverseLinkedList();
ll.createList();
ll.printList();
ll.reverseList();
ll.printList();
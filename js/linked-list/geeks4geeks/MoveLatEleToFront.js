const LinkedList = require("./LinkedList");

class MoveLatEleToFront extends LinkedList {

    constructor () {
        super();
    }

    moveLast () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let curr = this.head;
        while ( curr.next.next ) {
            curr = curr.next;
        }

        const newHead = curr.next;
        curr.next = null;
        newHead.next = this.head;
        this.head = newHead;
    }
}

const ll = new MoveLatEleToFront();
ll.createList();
ll.printList();
ll.moveLast();
ll.printList();

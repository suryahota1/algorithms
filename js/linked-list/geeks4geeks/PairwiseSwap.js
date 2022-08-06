const LinkedList = require("./LinkedList");

class PairwiseSwap extends LinkedList {
    
    constructor () {
        super();
    }

    swap () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let curr = this.head;
        let prev = null;

        while ( curr && curr.next ) {
            const next = curr.next;
            const nextToNext = next.next;

            next.next = curr;
            curr.next = nextToNext;
            if ( prev ) {
                prev.next = next;
            } else {
                this.head = next;
            }
            prev = curr;
            curr = nextToNext;
        }
    }
}

const ll = new PairwiseSwap();
ll.createList();
ll.printList();
ll.swap();
ll.printList();

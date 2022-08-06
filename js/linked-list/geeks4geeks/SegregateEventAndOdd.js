const LinkedList = require("./LinkedList");

class SegregateEventAndOdd extends LinkedList {

    constructor () {
        super();
    }

    #canReplace ( count ) {
        return count % 2 !== 0;
    }

    segregate () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }
        let condnPtr = null;
        let curr = this.head;
        let prev = null;
        let isFirstCondnMet = false;

        let count = 0;

        while ( curr !== null ) {
            ll.printList();
            count++;
            console.log("curr", curr.data);
            console.log("prev", prev?.data);
            const nextCurr = curr.next;
            let nextPrev = prev === null ? this.head : prev.next;
            
            if ( this.#canReplace(count) ) {
                console.log("condnPtr", condnPtr?.data);
                if ( isFirstCondnMet ) {
                    prev.next = curr.next;
                    if ( condnPtr === null ) {
                        curr.next = this.head;
                        this.head = curr;
                    } else {
                        curr.next = condnPtr.next;
                        condnPtr.next = curr;
                    }
                    nextPrev = prev;
                    condnPtr = curr;
                } else {
                    condnPtr = curr;
                }
            } else {
                isFirstCondnMet = true;
            }
            curr = nextCurr;
            prev = nextPrev;
        }
    }
}

const ll = new SegregateEventAndOdd();
ll.createList();
ll.segregate();
ll.printList();

const LinkedList = require("./LinkedList");

class ReverseAlternateKNodes extends LinkedList {

    constructor () {
        super();
    }

    reverseAlternate ( n ) {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }
        let count = 0;
        let curr = this.head;
        let prevConnector1;
        let prevConnector2;
        let newHead;

        let prev = null;

        while ( curr !== null ) {
            count++;
            // console.log("curr", curr.data);
            const isReverse = Math.ceil(count / n) % 2 !== 0;
            // console.log("reverse", isReverse);
            const nextCurr = curr.next;
            if ( isReverse ) {
                if ( (count - 1) % n === 0 ) {
                    curr.next = null;
                    prevConnector2 = curr;
                } else {
                    curr.next = prev;
                }
                if ( count % n === 0 || nextCurr === null ) {
                    if ( !newHead ) {
                        newHead = curr;
                    }
                    if ( prevConnector1 ) {
                        prevConnector1.next = curr; 
                    }
                    prevConnector1 = prevConnector2;
                }
                prev = curr;
            } else {
                prev = curr;
                if ( (count - 1) % n === 0 ) {
                    prevConnector1.next = curr;
                }

                if ( count % n === 0 ) {
                    prevConnector1 = curr;
                }
            }
            
            curr = nextCurr;
        }
        this.head = newHead;
    }
}

const ll = new ReverseAlternateKNodes();
ll.createList();
ll.printList();
ll.reverseAlternate(3);
ll.printList();

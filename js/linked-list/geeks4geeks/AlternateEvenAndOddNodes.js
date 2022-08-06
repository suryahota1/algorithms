const LinkedList = require("./LinkedList");

class AlternateEvenAndOddNodes extends LinkedList {

    constructor () {
        super();
    }

    alter () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let numPtr = null, prev = null;
        let curr = this.head;
        let expType = 1;
        let count = 0;

        while ( curr !== null ) {
            count++;
            const currType = curr.data % 2 === 0 ? 2 : 1;
            if ( currType === expType ) {
                console.log("matching");
                if ( ( !numPtr && !prev ) || (numPtr && prev && numPtr === prev) ) {
                    console.log("prev match");
                    numPtr = numPtr === null ? this.head : numPtr.next;
                    prev = prev === null ? this.head : prev.next;
                    curr = curr.next;
                } else {
                    prev.next = curr.next;
                    if ( numPtr === null ) {
                        curr.next = this.head;
                        this.head = curr;
                    } else {
                        curr.next = numPtr.next;
                        numPtr.next = curr;
                    }
                    numPtr = curr;
                    prev = curr;
                    curr = curr.next;
                }
                expType = expType === 1 ? 2 : 1;
            } else {
                console.log("not matching");
                prev = prev === null ? this.head : prev.next;
                curr = curr.next;
            }
            this.printList();
            if ( count === 50 ) {
                break;
            }
        }
    }
}

const ll = new AlternateEvenAndOddNodes();
ll.createList();
ll.printList();
ll.alter();
ll.printList();

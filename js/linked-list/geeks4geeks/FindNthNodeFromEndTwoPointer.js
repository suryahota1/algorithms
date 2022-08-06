const LinkedList = require("./LinkedList");

class FindNthNodeFromEndTwoPointer extends LinkedList {

    slowPtr;

    constructor () {
        super();
        this.slowPtr = null;
    }

    getNthFromLast ( n ) {
        if ( n <= 0 ) {
            return -1;
        }
        let idx = 0;
        let curr = this.head;
        while ( curr !== null ) {
            idx++;
            if ( idx >= n ) {
                this.slowPtr = this.slowPtr === null ? this.head : this.slowPtr.next;
            }
            
            curr = curr.next;
        }

        console.log("idx", idx);
        if ( idx < n ) {
            return -1;
        } else {
            return this.slowPtr.data;
        }
    }
}

const ins = new FindNthNodeFromEndTwoPointer();
ins.createList();
ins.printList();
const data = ins.getNthFromLast(0);
console.log("data", data);
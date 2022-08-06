const LinkedList = require("./LinkedList");

class MakeMiddleNodeHead extends LinkedList {

    constructor() {
        super();
    }

    makeMidAsHead () {
        if ( !this.head || !this.head.next || !this.head.next.next ) {
            return this.head;
        }
        let prevToMid = null;
        let count = 1;
        let curr = this.head;

        while ( curr.next !== null ) {
            if ( count % 2 === 0 ) {
                prevToMid = prevToMid === null ? this.head : prevToMid.next;
            }
            
            curr = curr.next;
            count++;
        }
        console.log("count", count);
        if ( count % 2 === 0 ) {
            prevToMid = prevToMid.next;
        }
        console.log("prevToMid", prevToMid.data);
        const mid = prevToMid.next;

        const midNext = mid.next;
        mid.next = this.head;
        prevToMid.next = midNext;
        this.head = mid;
    }
}

const ll = new MakeMiddleNodeHead();
ll.createList();
ll.printList();
ll.makeMidAsHead();
ll.printList();


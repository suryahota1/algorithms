const LinkedList = require("../LinkedList");

class FindMiddleOfLinkedList extends LinkedList {

    slowPtr;

    constructor () {
        super();
        this.slowPtr = null;
    }

    getMiddle () {
        let count = 0;
        let curr = this.head;

        while( curr !== null ) {
            count++;
            if ( count % 2 == 0 ) {
                this.slowPtr = this.slowPtr === null ? this.head : this.slowPtr.next;
            }
            curr = curr.next;
        }

        return this.slowPtr ? this.slowPtr.next.data : count === 1 ? this.head.data : -1;
    }
}

const ins = new FindMiddleOfLinkedList();
ins.createList();
ins.printList();
const data = ins.getMiddle();
console.log("data", data);
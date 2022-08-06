const Node = require("../geeks4geeks/Node");
const LinkedList = require("./../geeks4geeks/LinkedList");

class DeleteAllDuplicateNodes extends LinkedList {

    constructor () {
        super();
    }

    delete () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let currPtr = this.head;
        let prevPtr = null;
        let lastRemovedData = null;

        while ( currPtr !== null ) {
            console.log("currPtr", currPtr.data);
            console.log("prevPtr", prevPtr?.data);
            const nextCurrPtr = currPtr.next;
            console.log("nextCurrPtr", nextCurrPtr?.data);
            if ( (currPtr.data === lastRemovedData) || ( nextCurrPtr && (currPtr.data === nextCurrPtr.data) ) ) {
                currPtr.next = null;
                lastRemovedData = currPtr.data;
                if ( prevPtr ) {
                    prevPtr.next = nextCurrPtr;
                }
                if ( currPtr === this.head ) {
                    this.head = nextCurrPtr;
                }
            } else {
                prevPtr = currPtr;
            }
            
            currPtr = nextCurrPtr;
        }
    }
}

const ll = new DeleteAllDuplicateNodes();
ll.createList();
ll.printList();
ll.delete();
ll.printList();

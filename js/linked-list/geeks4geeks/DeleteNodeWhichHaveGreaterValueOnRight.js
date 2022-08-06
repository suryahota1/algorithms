const LinkedList = require("./LinkedList");

class DeleteNodeWhichHaveGreaterValueOnRight extends LinkedList {

    constructor () {
        super();
    }

    delete () {
        if ( !this.head || !this.head.next ) {
            return this.head;
        }

        let currPtr = this.head;
        const ptrStack = [];

        while ( currPtr ) {
            const nextNode = currPtr.next;
            console.log("currPtr", currPtr.data);
            const isNxtGreaterThanCurr = nextNode ? currPtr.data < nextNode.data : false;
            if ( isNxtGreaterThanCurr ) {
                console.log("Next is greater");
                if ( ptrStack.length === 0 ) {
                    currPtr.next = null;
                    currPtr = nextNode;
                } else {
                    ptrStack[ptrStack.length - 1].next = nextNode;
                    currPtr = nextNode;
                }
            } else {
                if ( ptrStack.length === 0 ) {
                    ptrStack.push(currPtr);
                } else {
                    while ( ptrStack.length && ptrStack[ptrStack.length - 1].data < currPtr.data ) {
                        ptrStack.pop();
                    }
                    if ( ptrStack.length ) {
                        ptrStack[ptrStack.length - 1].next = currPtr;
                    }
                    ptrStack.push(currPtr);
                }
                currPtr = nextNode;
            }
        }   
        this.head = ptrStack[0];
    }
}

const ll = new DeleteNodeWhichHaveGreaterValueOnRight();
ll.createList();
ll.printList();
ll.delete();
ll.printList();

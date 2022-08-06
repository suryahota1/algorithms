const LinkedList = require("./LinkedList");

class DeleteAlternateNodes extends LinkedList {

    constructor () {
        super();
    }

    delete () {
        if ( !this.head || !this.head.next ) {
            return null;
        }
        let curr = this.head;

        while( curr !== null && curr.next !== null ) {
            const nextNode = curr.next;
            curr.next = nextNode.next;
            nextNode.next = null;
            curr = curr.next;
        }
    }
}

const ll = new DeleteAlternateNodes();
ll.createList();
ll.printList();
ll.delete();
ll.printList();

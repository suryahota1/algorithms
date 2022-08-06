const LinkedList = require("./LinkedList");

class DeleteNode extends LinkedList {
    constructor () {
        super();
    }

    deleteNode ( x ) {
        let i = 0;
        let curr = this.head;
        let prev = null;

        while ( curr !== null ) {
            i++;
            if ( i === x ) {
                if ( !prev ) {
                    const nextNode = curr.next;
                    curr.next = null;
                    this.head = nextNode;
                } else if ( !curr.next ) {
                    prev.next = null
                } else {
                    prev.next = curr.next;
                    curr.next = null;
                }
            } else {
                curr = curr.next;
                if ( !prev ) {
                    prev = this.head;
                } else {
                    prev = prev.next;
                }
            }
        }
    }
}

const ll = new DeleteNode();
ll.createList();
ll.printList();

ll.deleteNode(7);
ll.printList();
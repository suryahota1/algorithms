const LinkedList = require("./LinkedList");

class RemoveDuplicatesFromSortedList extends LinkedList {

    constructor () {
        super();
    }

    removeDuplicates () {
        if ( this.head === null ) {
            return;
        }
        let ref = this.head;
        let curr = this.head.next;
        let count = 0;

        while ( curr !== null ) {
            if ( curr.data !== ref.data ) {
                if ( count >= 1 ) {
                    ref.next = curr;
                    count = 0;
                }
                ref = curr;
            } else {
                count++;
            }
            curr = curr.next;
        }
        ref.next = null;
    }
}

// const ll = new RemoveDuplicatesFromSortedList();
// ll.createList();
// ll.printList();
// ll.removeDuplicates();
// ll.printList();

module.exports = RemoveDuplicatesFromSortedList;

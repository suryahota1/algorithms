const LinkedList = require("./LinkedList");

class RemoveDuplicatesUnsortedListUseHashing extends LinkedList {

    constructor () {
        super();
    }

    removeDuplicates () {
        let curr = this.head;
        const itemMap = new Map();
        let prev = null;

        while ( curr !== null ) {
            const key = curr.data;
            const count = itemMap.get(key);
            if ( count ) {
                prev.next = curr.next;
            } else {
                itemMap.set(key, 1);
                if ( prev === null ) {
                    prev = this.head;
                } else {
                    prev = prev.next;
                }
            }
            curr = curr.next;
        }
    }
}

const ll = new RemoveDuplicatesUnsortedListUseHashing();
ll.createList();
ll.printList();
ll.removeDuplicates();
ll.printList();

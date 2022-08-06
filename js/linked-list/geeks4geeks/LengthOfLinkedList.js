const LinkedList = require("./LinkedList");

class LengthOfLinkedList extends LinkedList {
    constructor () {
        super();
    }

    getLengthIterative () {
        let curr = this.head;
        let count = 0;
        while ( curr !== null ) {
            count++;
            curr = curr.next;
        }
        return count;
    }

    #getRecLength ( curr ) {
        if ( curr === null ) {
            return 0;
        }
        return 1 + this.#getRecLength(curr.next);
    }

    getLengthRecursive () {
        return this.#getRecLength(this.head);
    }
}

const ll = new LengthOfLinkedList();
ll.createList();
ll.printList();

const il = ll.getLengthIterative();
console.log("il", il);

const ir = ll.getLengthRecursive();
console.log("ir", ir);
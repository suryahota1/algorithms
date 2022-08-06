const LinkedList = require("./LinkedList");

class ReverseLinkedListRecursive extends LinkedList {

    constructor () {
        super();
    }

    #reverse ( curr ) {
        if ( curr === null || curr.next === null ) {
            this.head = curr;
            return curr;
        }
        const next = this.#reverse(curr.next);
        next.next = curr;
        return curr;
    }

    reverseList () {
        const ref = this.#reverse(this.head);
        if ( ref ) ref.next = null;
    }
}

const ll = new ReverseLinkedListRecursive();
ll.createList();
ll.printList();
ll.reverseList();
ll.printList();
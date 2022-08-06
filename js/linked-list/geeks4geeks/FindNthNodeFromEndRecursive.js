const LinkedList = require("./LinkedList");

class FindNthNodeFromEndRecursive extends LinkedList {

    count;

    constructor () {
        super();
        this.count = 0;
    }

    #printRec ( n, curr ) {
        if ( curr === null ) {
            return -1;
        }
        const data = this.#printRec(n, curr.next);
        this.count += 1;
        return data !== -1 ? data : this.count === n ? curr.data : -1;
    }

    getNthFromEnd ( n ) {
        const curr = this.head;
        const t = this.#printRec(n, curr);
        console.log("t", t);
    }
}

const ins = new FindNthNodeFromEndRecursive();
ins.createList();
ins.printList();
ins.getNthFromEnd(6);
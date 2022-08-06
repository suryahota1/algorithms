const LinkedList = require("./LinkedList");

class SwappingNodesWithoutSwappingData extends LinkedList {
    
    constructor() {
        super();
    }

    swapNodes ( data1, data2 ) {
        let prev1 = null;
        let prev2 = null;

        let found1 = false;
        let found2 = false;

        let curr = this.head;

        while( curr !== null ) {
            if ( curr.data === data1 || curr.data === data2 ) {
                if ( !found1 ) found1 = true;
                else found2 = true;
            }

            if ( !found1 ) prev1 = prev1 === null ? this.head : prev1.next;
            if ( !found2 ) prev2 = prev2 === null ? this.head : prev2.next;

            if ( found1 && found2 ) break;
            curr = curr.next;
        }

        if ( found1 && found2 ) {
            const next1 = prev1?.next || this.head;
            const next2 = prev2.next;
            const next11 = next1?.next;
            const next22 = next2.next;
            

            if ( prev1 === null ) {
                this.head = next2;
            } else {
                prev1.next = next2;
            }
            if ( prev2 === next1 ) {
                next2.next = next1;
                next1.next = next22;
            } else {
                prev2.next = next1;
                next1.next = next2.next;
                next2.next = next11;
            }
        }
    }
}

const ll = new SwappingNodesWithoutSwappingData();
ll.createList();
ll.printList();
ll.swapNodes(1, 8);
ll.printList();
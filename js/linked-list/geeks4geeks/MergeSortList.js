const LinkedList = require("./LinkedList");

class MergeSortList extends LinkedList {

    constructor () {
        super();
    }

    #getMidOfList ( head ) {
        let slowPtr = null;
        let fastPtr = head;

        while ( fastPtr !== null && fastPtr.next !== null ) {
            fastPtr = fastPtr.next.next;
            slowPtr = slowPtr === null ? head : slowPtr.next;
        }

        return slowPtr;
    }

    mergeSortedLists ( head1, head2 ) {
        let ref1 = head1;
        let ref2 = head2;
        let curr = null;

        const newHead = head1.data <= head2.data ? head1 : head2;

        while ( ref1 !== null && ref2 !== null ) {
            if ( ref1.data <= ref2.data ) {
                if ( curr === null ) {
                    curr = ref1;
                } else {
                    curr.next = ref1;
                    curr = ref1;
                }
                ref1 = ref1.next;
            } else {
                if ( curr === null ) {
                    curr = ref2;
                } else {
                    curr.next = ref2;
                    curr = ref2;
                }
                ref2 = ref2.next;
            }
        }

        if ( ref1 === null && ref2 !== null ) {
            curr.next = ref2;
        } else if ( ref1 !== null && ref2 === null ) {
            curr.next = ref1;
        }

        return newHead;
    }

    mergeSort ( curr ) {
        if ( curr === null || curr.next === null ) {
            return curr;
        }
        const mid = this.#getMidOfList(curr);
        // console.log("mid.data", mid.data);
        const nextHead = mid.next;
        mid.next = null;
        // console.log("curr.data", curr.data);
        // console.log("nextHead.data", nextHead.data);
        const newHead1 = this.mergeSort(curr);
        const newHead2 = this.mergeSort(nextHead);
        const newHead = this.mergeSortedLists(newHead1, newHead2);

        return newHead;
    }

    sort () {
        const headVal = this.mergeSort(this.head);
        this.head = headVal;
        console.log("headVal.data", headVal.data);
    }
}

// const ll = new MergeSortList();
// ll.createList();
// ll.printList();
// ll.sort();
// ll.printList();

module.exports = MergeSortList;

const LinkedList = require("./LinkedList");

class MergeSortedListResultInReverseOrder extends LinkedList {

    constructor () {
        super();
    }

    mergeReverse () {
        let nextNode = null;
        let firstRef = this.head1;
        let secondRef = this.head2;
        let currFirst = null;
        let currSecond = null;

        while ( firstRef || secondRef ) {
            if ( firstRef && secondRef && firstRef.data === secondRef.data ) {
                currFirst = firstRef.next;
                currSecond = secondRef.next;

                firstRef.next = nextNode;
                secondRef.next = firstRef;

                nextNode = secondRef;

                firstRef = currFirst;
                secondRef = currSecond;
            } else if ( (firstRef && secondRef && firstRef.data < secondRef.data) || (firstRef && !secondRef) ) {
                currFirst = firstRef.next;
                firstRef.next = nextNode;
                nextNode = firstRef;

                firstRef = currFirst;
            } else if ( (firstRef && secondRef && firstRef.data > secondRef.data) || (!firstRef && secondRef) ) {
                currSecond = secondRef.next;
                secondRef.next = nextNode;
                nextNode = secondRef;

                secondRef = currSecond;
            }
        }
        console.log("nextNode", nextNode);
        this.head = nextNode;
    }
}

const ll = new MergeSortedListResultInReverseOrder();
ll.createTwoLl();
ll.printList();
ll.mergeReverse();
ll.printList();

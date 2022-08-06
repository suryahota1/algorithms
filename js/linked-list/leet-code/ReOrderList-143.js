const LinkedList = require("../geeks4geeks/LinkedList");

class ReOrderList extends LinkedList {

    constructor () {
        super();
    }

    reOrder () {
        if ( !this.head || !this.head.next || !this.head.next.next ) {
            return this.head;
        }
        const stack = [ this.head ];
        let fastPtr = this.head;
        let slowPtr = this.head;
        let isCountOdd = true;

        while ( fastPtr && fastPtr.next ) {
            if ( fastPtr.next && !fastPtr.next.next ) {
                isCountOdd = false;
                break;
            }

            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;

            stack.push(slowPtr);
        }
        console.log("stack", stack);
        console.log("isCountOdd", isCountOdd);
        let nextNode;
        let nextList;

        nextList = stack.pop();
        nextNode = nextList;

        if ( isCountOdd ) {
            nextList = nextList.next;
            nextNode.next = null
        } else {
            nextList = nextList.next.next;
            nextNode.next.next = null;
        }

        console.log("nextList", nextList);
        console.log("nextNode", nextNode);

        while ( stack.length !== 0 ) {
            const poppedNode = stack.pop();
            poppedNode.next = nextList;
            nextList = nextList.next;
            poppedNode.next.next = nextNode;
            nextNode = poppedNode;
        }
    }
}

const ll =  new ReOrderList();
ll.createList();
ll.printList();
ll.reOrder();
ll.printList();

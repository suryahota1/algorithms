const LinkedList = require("../geeks4geeks/LinkedList");

class MaximunTwinSum extends LinkedList {

    constructor () {
        super();
    }

    getMaxSum () {
        let fastPtr = this.head;
        let slowPtr = this.head;
        let stack = [ this.head ];

        while ( fastPtr && fastPtr.next && fastPtr.next.next ) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            stack.push(slowPtr);
        }
        slowPtr = slowPtr.next;
        let maxSum = 0;
        while( stack.length !== 0 ) {
            const sum = stack.pop().data + slowPtr.data;
            slowPtr = slowPtr.next;
            if ( sum > maxSum ) {
                maxSum = sum;
            }
        }
        return maxSum;
    }
}

const ll = new MaximunTwinSum();
ll.createList();
ll.printList();
const sum = ll.getMaxSum();
console.log("sum", sum);

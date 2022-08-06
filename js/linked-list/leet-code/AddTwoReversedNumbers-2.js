const Node = require("../geeks4geeks/Node");
const LinkedList = require("./../geeks4geeks/LinkedList");

class AddTwoReversedNumbers2 extends LinkedList {

    constructor () {
        super();
    }

    add () {
        let node1 = this.head1;
        let node2 = this.head2;
        let result = null;
        let headVal = null;

        if ( !node1 && !node2 ) {
            return null;
        }
        let carry = 0;

        while ( node1 || node2 ) {
            let sum = 0;
            if ( node1 ) {
                console.log("node1.data", node1.data);
                sum += node1.data;
            }
            if ( node2 ) {
                console.log("node2.data", node2.data);
                sum += node2.data;
            }
            if ( carry ) {
                console.log("carry", carry);
                sum += carry;
            }
            console.log("sum", sum);

            carry = Math.floor(sum / 10);
            const data = sum % 10;
            const newNode = new Node(data);
            let newNode2;

            if ( !node1?.next && !node2?.next ) {
                if ( carry !== 0 ) {
                    newNode2 = new Node(1);
                }
            } else {

            }
            
            

            if ( result === null ) {
                headVal = newNode;
            } else {
                result.next = newNode;
            }
            result = newNode;
            if ( newNode2 ) {
                result.next = newNode2;
            }

            node1 = node1?.next;
            node2 = node2?.next
        }
        this.head = headVal;
    }
}

const ll = new AddTwoReversedNumbers2();
ll.createTwoLl();
ll.printList();
ll.add();
ll.printList();

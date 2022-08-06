const LinkedList = require("../geeks4geeks/LinkedList");
const Node = require("../geeks4geeks/Node");

class MergeNodesBetweenZeroes extends LinkedList {

    constructor () {
        super();
    }

    merge () {
        let headNode = null;
        let prevNode = null;
        let currNode = this.head.next;
        
        let sum = 0;

        while ( currNode !== null ) {
            if ( currNode.data === 0 ) {
                const newNode = new Node(sum);
                sum = 0;
                if ( headNode === null ) {
                    headNode = prevNode = newNode;
                } else {
                    prevNode.next = newNode;
                    prevNode = newNode;
                }
            } else {
                sum += currNode.data;
            }
            currNode = currNode.next;
        }
        this.head = headNode;
    }
}

const ll = new MergeNodesBetweenZeroes();
ll.createList();
ll.printList();
ll.merge();
ll.printList();

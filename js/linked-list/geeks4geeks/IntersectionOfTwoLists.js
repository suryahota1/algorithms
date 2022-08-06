const LinkedList = require("./LinkedList");

class IntersectionOfTwoLists extends LinkedList {

    constructor () {
        super();
    }

    #getLength ( refNode ) {
        let length = 0;

        while ( refNode !== null) {
            length++;
            refNode = refNode.next;
        }

        return length;
    }

    findIntersection ( node1, node2 ) {
        if ( node1 && node2 ) {
            const list1Length = this.#getLength(node1);
            const list2Length = this.#getLength(node2);
            let count = 0;

            console.log("list1Length", list1Length);
            console.log("list2Length", list2Length);

            if ( list1Length > list2Length ) {
                while ( count < ( list1Length - list2Length) ) {
                    count++;
                    node1 = node1.next;
                }
            } else if ( list1Length < list2Length ) {
                while ( count < ( list2Length - list1Length) ) {
                    count++;
                    node2 = node2.next;
                }
            }
            console.log("node1.data", node1.data);
            console.log("node2.data", node2.data);

            while ( node1 && node2 ) {
                if ( node1 === node2 ) break;
                node1 = node1.next;
                node2 = node2.next;
            }

            if ( node1 === node2 ) {
                return node1.data;
            }
            return -1;
        }
    }
}

const ll = new IntersectionOfTwoLists();
ll.createTwoLl();
ll.printList();

const node1 = ll.head1;
const node2 = ll.head2;

const val = ll.findIntersection(node1, node2);
console.log("val", val);
const LinkedList = require("./LinkedList");
const Node = require("./Node");

class IntersectionOfTwoSortedLists extends LinkedList {

    constructor () {
        super();
    }

    getIntersection ( head1, head2 ) {
        let firstPtr = head1;
        let secondPtr = head2;

        let newList = null;
        let newHead = null;

        while( firstPtr && secondPtr ) {
            if ( firstPtr.data === secondPtr.data ) {
                if ( newList === null ) {
                    newList = new Node(firstPtr.data);
                    newHead = newList;
                } else {
                    if ( newList.data !== firstPtr.data ) {
                        newList.next = new Node(firstPtr.data);
                        newList = newList.next;
                    }
                }
                firstPtr = firstPtr.next;
                secondPtr = secondPtr.next;
            } else if ( firstPtr.data < secondPtr.data ) {
                firstPtr = firstPtr.next;
            } else {
                secondPtr = secondPtr.next;
            }
        }

        return newHead;
    }
}

const ll = new IntersectionOfTwoSortedLists();
ll.createList();
ll.printList();
ll.getIntersection();

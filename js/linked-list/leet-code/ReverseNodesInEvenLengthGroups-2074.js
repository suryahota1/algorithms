const LinkedList = require("../geeks4geeks/LinkedList");

class ReverseNodesInEvenLengthGroups extends LinkedList {
    
    constructor () {
        super();
    }

    reverse ( node, maxCount ) {
        console.log("reverse node", node);
        console.log("reverse maxCount", maxCount);
        let count = 1;
        let curr = node;
        let prev = null;
        let next = null;

        while ( curr !== null && count <= maxCount ) {
            console.log("reverse curr", curr.data);
            next = curr.next;
            curr.next = prev;
            prev = curr;
            if ( next !== null && count < maxCount ) {
                console.log("reverse next", next.data);
                curr = next;
            } else {
                break;
            }
            count++;
        }

        console.log("reverse count", count);
        console.log("reverse curr", curr);
        console.log("reverse node", node);
        console.log("reverse next", next);

        return { node, next, curr, count };
    }

    oddTraverse ( node, maxCount ) {
        console.log("oddTraverse node", node);
        console.log("oddTraverse maxCount", maxCount);

        let curr = node;
        let next;
        let count = 1;

        while ( curr != null && count <= maxCount ) {
            next = curr.next;
            if ( next !== null && count < maxCount ) {
                curr = next;
            } else {
                break;
            }
            count++;
        }

        return { node, curr, next, count: count };
    }

    reverseInGroups () {
        if ( !this.head || !this.head.next || !this.head.next.next ) {
            return this.head;
        }

        let prevConn = this.head;
        let curr = this.head.next;
        let groupCount = 2;

        let countRef = 0;

        while ( curr !== null ) {
            countRef++;
            if ( groupCount % 2 === 0 ) {
                let data = this.reverse(curr, groupCount);
                console.log("groupCount even data before", data);
                if ( data.count % 2 !== 0 ) {
                    data = this.reverse(data.curr, groupCount);
                    console.log("groupCount even data after", data);
                }
                prevConn.next = data.curr;
                data.node.next = data.next;
                prevConn = data.node;
                groupCount++;
                curr = data.next;
            } else {
                let data = this.oddTraverse(curr, groupCount);
                console.log("groupCount odd oddTraverse before", data);
                // break;
                if ( data.count % 2 === 0 ) {
                    data = this.reverse(data.node, data.count);
                    console.log("groupCount odd oddTraverse reverse after", data);
                    prevConn.next = data.curr;
                    data.node.next = data.next;
                    curr = data.next;
                } else {
                    prevConn = data.curr;
                    groupCount++;
                    curr = data.next;
                }
            }

            if ( countRef >= 15 ) {
                break;
            }
        }
    }
}

const ll = new ReverseNodesInEvenLengthGroups();
ll.createList();
ll.printList();
ll.reverseInGroups();
ll.printList();

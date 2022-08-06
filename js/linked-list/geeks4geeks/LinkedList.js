const Node = require("./Node");

class LinkedList {
    head;
    head1;
    head2;

    constructor () {
        this.head = null;
    }

    createList () {
        const headVal = new Node(5);
        const next1 = new Node(2);
        const next2 = new Node(6);
        const next3 = new Node(3);
        const next4 = new Node(9);
        const next5 = new Node(1);
        const next6 = new Node(7);
        const next7 = new Node(3);
        const next8 = new Node(8);
        const next9 = new Node(4);

        next8.next = next9;
        next7.next = next8;
        next6.next = next7;
        next5.next = next6;
        next4.next = next5;
        next3.next = next4;
        next2.next = next3;
        next1.next = next2;
        headVal.next = next1;

        this.head = headVal;
    }

    createTwoLl () {
        let headVal = new Node(9);
        let next1 = new Node(9);
        let next2 = new Node(9);
        let next3 = new Node(9);
        let next4 = new Node(9);
        let next5 = new Node(9);
        let next6 = new Node(9);

        // next5.next = next6;
        // next4.next = next5;
        // next3.next = next4;
        // next2.next = next3;
        // next1.next = next2;
        // headVal.next = next1;

        this.head1 = headVal;

        let headVal2 = new Node(9);
        let next12 = new Node(9);
        let next22 = new Node(9);
        let next32 = new Node(9);
        let next42 = new Node(9);

        // next32.next = next42;
        // next22.next = next32;
        // next12.next = next22;
        // headVal2.next = next12;

        this.head2 = headVal2;
    }

    printStr ( head ) {
        let temp = head;
        let str = "";
        while ( temp !== null ) {
            if ( temp === head ) {
                str += temp.data;
            } else {
                str += " " + temp.data;
            }
            
            temp = temp.next;
        }
        console.log(str);
    }

    printList() {
        if ( this.head ) {
            this.printStr(this.head);
        }
        if ( this.head1 ) {
            this.printStr(this.head1);
        }
        if ( this.head2 ) {
            this.printStr(this.head2);
        }
    }
}

module.exports = LinkedList;
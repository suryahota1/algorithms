const DoubleNode = require("./DoubleNode");

class DoubleLinkedList {
    head;
    tail;

    constructor () {
        this.head = null;
        this.tail = null;
    }

    insertNodeAtStart ( data, key ) {
        const newNode = new DoubleNode(data, key);
        if ( this.head === null ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const ref = this.head;
            ref.prev = newNode;
            newNode.next = ref;
            this.head = newNode;
        }
        return newNode;
    }

    moveItemToStart ( node ) {
        if ( this.head !== node ) {
            node.prev.next = node.next;
            if ( this.tail === node ) {
                this.tail = node.prev;
            } else {
                node.next.prev = node.prev;
            }
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }
    }

    evictItem () {
        this.printList();
        const key = this.tail.key;
        if ( this.head === this.tail ) {
            this.head = this.tail = null;
            return key;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        return key;
    }

    updateData ( node, data ) {

    }

    printStr ( head = this.head ) {
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
    }
}

module.exports = DoubleLinkedList;
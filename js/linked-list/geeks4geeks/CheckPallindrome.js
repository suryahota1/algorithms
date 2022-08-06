const LinkedList = require("../LinkedList");

class CheckPallindrome extends LinkedList {

    headPtr;

    constructor () {
        super();
    }

    pallRec ( curr ) {
        if ( curr === null ) {
            return true;
        }
        if ( this.pallRec(curr.next) ) {
            if ( curr.data === this.headPtr.data ) {
                this.headPtr = this.headPtr.next;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    isPallindrome () {
        this.headPtr = this.head;
        return this.pallRec(this.head);
    }
}

const ll = new CheckPallindrome();
ll.createList();
const isP = ll.isPallindrome();
console.log("isP", isP);
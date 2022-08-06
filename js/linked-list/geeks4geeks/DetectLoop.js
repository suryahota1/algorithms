const LinkedList = require("./LinkedList");

class FloydAlgoForDetectingLoop extends LinkedList {

    #loopNode;

    constructor () {
        super();
    }

    detectLoop () {
        let slowPtr = this.head, fastPtr = this.head;

        while ( slowPtr !== null && fastPtr !== null && fastPtr.next !== null ) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;

            if ( slowPtr === fastPtr ) {
                this.#loopNode = slowPtr;
                return true;
            }
        }

        return false;
    }

    getLoopNode () {
        return this.#loopNode;
    }
}

const ll = new FloydAlgoForDetectingLoop();
ll.createList();
// ll.printList();
const isL = ll.detectLoop();
console.log("isL", isL);

module.exports = FloydAlgoForDetectingLoop;
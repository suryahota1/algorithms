const FloydAlgoForDetectingLoop = require("./DetectLoop");

class LengthOfLoop extends FloydAlgoForDetectingLoop {

    constructor () {
        super();
    }

    getLengthOfLoop () {
        if ( this.detectLoop() ) {
            const loopNode = this.getLoopNode();
            let temp = loopNode.next;
            let count = 1;
            while ( temp !== loopNode ) {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
}

const ll = new LengthOfLoop();
ll.createList();
const len = ll.getLengthOfLoop();
console.log("len", len);
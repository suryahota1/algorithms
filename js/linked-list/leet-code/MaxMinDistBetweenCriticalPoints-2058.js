const LinkedList = require("../geeks4geeks/LinkedList");

class MaxMinDistBetweenCriticalPoints extends LinkedList {
    
    constructor () {
        super();
    }

    getMaxMin () {
        const distArr = [-1, -1];
        if ( this.head === null || this.head.next === null || this.head.next.next === null || this.head.next.next.next === null ) {
            return distArr;
        }
        
        let lastPos = -1;
        let curr = this.head.next;
        let prev = this.head;
        let count = 0;
        while ( curr.next !== null ) {
            count++;
            const nextCurr = curr.next;
            if ( ( curr.data > prev.data && curr.data > nextCurr.data ) || ( curr.data < prev.data && curr.data < nextCurr.data ) ) {
                if ( lastPos !== -1 ) {
                    if ( distArr[1] === -1 ) {
                        distArr[0] = distArr[1] = count - lastPos;
                    } else {
                        distArr[1] += count - lastPos;
                        const newMin = count - lastPos;
                        if ( newMin < distArr[0] ) {
                            distArr[0] = newMin;
                        }
                    }
                    
                }
                lastPos = count;
            }
            prev = curr;
            curr = nextCurr;
        }
        return distArr;
    }
}

const ll = new MaxMinDistBetweenCriticalPoints();
ll.createList();
ll.printList();
const dist = ll.getMaxMin();
console.log("dist", dist);

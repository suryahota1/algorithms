class Node {
    parent;
    key = null;
    degree;
    child;
    sibling;

    constructor ( key ) {
        this.key = key;
        this.parent = null;
        this.degree = 0;
        this.child = null;
        this.sibling = null;
    }
}

class BinomialHeap {

    minNode;
    count;
    head;

    constructor () {
        this.count = 0;
        this.minNode = null;
        this.head = null;
    }

    getMin () {
        if ( this.minNode ) return this.minNode.key;
        return null;
    }

    extractMin () {

    }

    mergeAnotherHeap ( newHeap ) {
        let runningHead, otherHead, resultHead;
        if ( this.head && newHeap.head ) {
            if ( this.head.degree <= newHeap.head.degree ) {
                resultHead = runningHead = this.head;
                otherHead = newHeap.head;
            } else {
                resultHead = runningHead = newHeap.head;
                otherHead = this.head;
            }
            while ( runningHead && otherHead ) {
                if ( runningHead.sibling && runningHead.sibling.degree <= otherHead.degree ) {
                    runningHead = runningHead.sibling;
                } else {
                    const runningHeadSibing = runningHead.sibling;
                    runningHead.sibling = otherHead;
                    runningHead = otherHead;
                    otherHead = runningHeadSibing;
                }
            }
        } else if ( this.head ) {
            resultHead = this.head;
        } else {
            resultHead = newHeap.head;
        }
        return resultHead;
    }

    union ( newHeap ) {
        this.head = this.mergeAnotherHeap(newHeap);
        let x = this.head, nx = this.head.sibling, snx = this.head.sibling?.sibling;
        while ( x && nx ) {
            if ( x.degree !== nx.degree || ( snx && x.degree === nx.degree && nx.degree === snx.degree )) {
                x = nx;
                nx = snx;
            } else if ( x.degree === nx.degree ) {
                if ( x.key <= nx.key ) {
                    const prevChild = x.child;
                    x.child = nx;
                    nx.sibling = prevChild;

                    x.sibling = snx;
                    nx = snx;
                    snx = nx?.sibling;
                } else {
                    const prevChild = n.child;
                    nx.child = x;
                    x.sibling = prevChild;

                    x = nx;
                    nx = nx.sibling;
                    snx = nx.sibling?.sibling;
                }
            }
        }
    }

    delete ( node ) {
        
    }

    decreaseKey ( node, newKey ) {
        node.key = newKey;
        this.bubbleUp(node);
    }

    insert ( key ) {
        const newNode = new Node(key);
        const newHeap = new BinomialHeap();
        newHeap.count++;
        newHeap.head = newNode;
        newHeap.minNode = newNode;
        this.union(newHeap);
    }

    bubbleUp ( node ) {
        let parent = node.parent;
        while ( parent && node.key < parent.key ) {
            const grandParent = parent.parent;
            const child = node.child;
            const nodeSibling = node.sibling;
            const parentSibling = parent.sibling;

            node.parent = grandParent;
            node.sibling = parentSibling;
            node.child = parent;
            node.degree = parent.degree;

            parent.parent = node;
            parent.sibling = nodeSibling;
            parent.child = child;
            parent.degree = node.degree;
        }
    }
}
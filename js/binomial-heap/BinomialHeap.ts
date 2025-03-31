type NodeOrNull<T> = BinomialNode<T> | null;

class BinomialNode<T> {
    key: T;
    parent: NodeOrNull<T>;
    left: NodeOrNull<T>;
    sibling: NodeOrNull<T>;
    degree: number;

    constructor ( key: T ) {
        this.key = key;
        this.parent = null;
        this.left = null;
        this.sibling = null;
        this.degree = 0;
    }
}

class BinomialHeap<T> {
    private head: NodeOrNull<T>;
    private minNode: NodeOrNull<T>;
    private minEle: T;

    constructor ( minEle: T ) {
        this.head = null;
        this.minNode = null;
        this.minEle = minEle;
    }

    getHead (): NodeOrNull<T> {
        return this.head;
    }

    private orderNodes ( heap1Head: BinomialNode<T>, heap2Head: BinomialNode<T> ): BinomialNode<T> {
        let h1: NodeOrNull<T> = heap1Head, h2: NodeOrNull<T> = heap2Head;
        let head: BinomialNode<T>;
        let prev: BinomialNode<T>;
        if ( h1.degree <= h2.degree ) {
            head = h1;
            h1 = h1.sibling;
        } else {
            head = h2;
            h2 = h2.sibling;
        }
        prev = head;
        while ( h1 !== null && h2 !== null ) {
            if ( h1.degree <= h2.degree ) {
                prev.sibling = h1;
                h1 = h1.sibling;
            } else {
                prev.sibling = h2;
                h2 = h2.sibling;
            }
            prev = prev.sibling;
        }
        if ( h1 !== null ) {
            prev.sibling = h1;
        } else if ( h2 !== null ) {
            prev.sibling = h2;
        }
        return head;
    }

    private linkTwoTrees ( node1: BinomialNode<T>, node2: BinomialNode<T> ): BinomialNode<T> {
        let parent: BinomialNode<T>;
        let child: BinomialNode<T>;

        if ( node1.key <= node2.key ) {
            parent = node1;
            child = node2;
        } else {
            parent = node2;
            child = node1;
        }

        const currParentsleft = parent.left;
        parent.left = child;
        child.sibling = currParentsleft;
        child.parent = parent;
        parent.degree++;

        return parent;
    }

    private mergeSameDegreeNodes ( headNode: BinomialNode<T> ): BinomialNode<T> {
        let newHead: BinomialNode<T> = headNode, prev: NodeOrNull<T> = null;
        let curr: BinomialNode<T> = headNode;
        let next: NodeOrNull<T> = curr.sibling;

        while ( next !== null ) {
            if ( (curr.degree !== next.degree) || ( next.sibling !== null && curr.degree === next.sibling.degree ) ) {
                prev = curr;
                curr = next;
                next = next.sibling;
            } else {
                const nextSibling = next.sibling;
                const mergedParent = this.linkTwoTrees(curr, next);
                mergedParent.sibling = nextSibling;
                if ( prev === null ) {
                    newHead = mergedParent;
                }
                curr = mergedParent;
                next = mergedParent.sibling;
            }
        }

        return newHead;
    }

    public merge ( otherHeapNode: BinomialNode<T> ) {
        if ( otherHeapNode === null ) {
            return;
        }
        if ( this.head === null ) {
            this.head = otherHeapNode;
            return;
        }
        const headNode = this.orderNodes(this.head, otherHeapNode!);
        this.head = this.mergeSameDegreeNodes(headNode);
        this.restoreMin();

    }

    private restoreMin () {
        if ( this.head === null ) {
            this.minNode = null;
            return;
        }
        this.minNode = this.head;
        const node = this.head.sibling;
        
        while ( node !== null ) {
            if ( node.key < this.minNode.key ) {
                this.minNode = node;
            }
        }
    }

    private reverseLinks ( node: NodeOrNull<T> ): NodeOrNull<T> {
        let prev: NodeOrNull<T> = null, curr: NodeOrNull<T> = node;
        while ( curr !== null ) {
            const next = curr.sibling;
            curr.sibling = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public getMin (): T | undefined {
        return this.minNode?.key;
    }

    public extractMin (): T | undefined {
        if ( this.head === null ) {
            return;
        }
        let prevMinNode: NodeOrNull<T> = null, minNode = this.head, curr = this.head.sibling, prev = this.head;
        while ( curr !== null ) {
            if ( curr.key < minNode.key ) {
                minNode = curr;
                prevMinNode = prev;
            }
            prev = curr;
            curr = prev.sibling;
        }
        const newHeapNode = this.reverseLinks(minNode.left);
        if ( prevMinNode === null ) {
            this.head = this.minNode!.sibling;
        } else {
            prevMinNode.sibling = minNode.sibling;
        }
        if ( newHeapNode !== null ) {
            this.merge(newHeapNode);
        }
        return minNode.key;
    }

    public insert ( key: T ) {
        const newNode = new BinomialNode(key);
        this.merge(newNode);
    }

    public decreaseKey ( node: BinomialNode<T>, newValue: T ) {
        let parentNode = node.parent;
        while ( parentNode !== null && node.key < node.key ) {
            [node.key, parentNode.key] = [parentNode.key, node.key];
            node = parentNode;
            parentNode = node.parent;
        }
    }

    public delete ( node: BinomialNode<T> ) {
        this.decreaseKey(node, this.minEle);
        this.extractMin();
    }
}
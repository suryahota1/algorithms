class Node {
    constructor ( item ) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor ( item ) {
        this.root = item ? new Node(item) : null;
        this.queue = [];
    }

    createTree () {
        this.root.left = new Node("B");
        this.root.right = new Node("C");
        this.root.left.left = new Node("D");
        this.root.left.right = new Node("E");
        this.root.right.left = new Node("F");
        this.root.right.right = new Node("G");
        this.root.left.right.right = new Node("H");
        this.root.left.right.right.right = new Node("L");
        this.root.right.left.left = new Node("I");
        this.root.right.left.left.left = new Node("M");
        this.root.right.left.left.right = new Node("N");
        this.root.right.right.left = new Node("J");
        this.root.right.right.right = new Node("K");
        this.root.right.right.left.left = new Node("O");
        this.root.right.right.left.right = new Node("P");
        this.root.right.right.left.right.left = new Node("S");
        this.root.right.right.left.right.right = new Node("T");
        this.root.right.right.right.left = new Node("Q");
        this.root.right.right.right.right = new Node("R");
    }

    insertNodeInorder ( node, item ) {
        // console.log("insertNodeInorder node", node);
        if ( node === null ) {
            this.root = new Node(item);
            return;
        }

        this.queue.push(node);

        while( this.queue.length !== 0 ) {
            const temp = this.queue[0];
            console.log("temp", temp);
            this.queue.shift();

            if ( temp.left === null ) {
                temp.left = new Node(item);
                console.log("new temp", temp);
                break;
            } else {
                this.queue.push(temp.left);
            }

            if ( temp.right === null ) {
                temp.right = new Node(item);
                break;
            } else {
                this.queue.push(temp.right);
            }
        }
    }

    traverseTreeInorder ( node ) {
        if ( node === null ) {
            return;
        }

        this.traverseTreeInorder(node.left);
        console.log(node.key + " ");
        this.traverseTreeInorder(node.right);
    }
}

const bt = new BinaryTree("A");
bt.createTree();
bt.traverseTreeInorder(bt.root);
bt.insertNodeInorder(bt.root, "X");
console.log("after");
bt.traverseTreeInorder(bt.root);
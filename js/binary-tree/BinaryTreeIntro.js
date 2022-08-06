class Node {
    constructor ( item ) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor ( rootItem ) {
        this.root = new Node(rootItem ? rootItem : null);
    }

    createTree () {
        this.root = new Node(2);
        this.root.left = new Node(2);
        this.root.right = new Node(2);
        // this.root.left.left = new Node(3);
        // this.root.left.right = new Node(5);

        // this.root.right.left = new Node(5);
        // this.root.right.right = new Node(7);
        // this.root.left.left.left = new Node(1);
        // this.root.left.left.right = new Node(2);
        // this.root.left.right.left = new Node(6);

        // this.root = new Node(1);
        // this.root.left = new Node(2);
        // this.root.right = new Node(3);
        // this.root.left.left = new Node(4);
        // this.root.left.right = new Node(5);
        // this.root.right.left = new Node(6);
        // this.root.right.right = new Node(7);
    }

    printTree () {

    }
}

module.exports.Node = Node;
module.exports.BinaryTree = BinaryTree;

// const bt = new BinaryTree();
// bt.createTree();
// console.log("bt.root.key", bt.root.right.right.key);
class Node {
    constructor ( item ) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

class TreeTraversal {
    constructor ( item ) {
        this.root = item ? new Node(item) : null;
    }

    createTree () {
        this.root.left = new Node("2");
        this.root.right = new Node("9");
        this.root.left.left = new Node("10");
        this.root.left.right = new Node("7");
        this.root.right.left = new Node("8");
        this.root.right.right = new Node("4");
    }

    traverseInOrder ( node ) {
        if ( node === null ) {
            return;
        }

        this.traverseInOrder(node.left);
        console.log(node.key);
        this.traverseInOrder(node.right);
    }

    traversePreOrder ( node ) {
        if ( node === null ) {
            return;
        }

        console.log(node.key);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
    }

    traversePostOrder ( node ) {
        if ( node === null ) {
            return;
        }

        this.traversePostOrder(node.left);
        this.traversePostOrder(node.right);
        console.log(node.key);
    }
}

const treeObj = new TreeTraversal(1);
treeObj.createTree();
treeObj.traverseInOrder();
treeObj.traversePreOrder();
treeObj.traversePostOrder();
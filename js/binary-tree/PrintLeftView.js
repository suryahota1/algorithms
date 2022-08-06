class Node {
    constructor ( item ) {
        this.key = item;
        this.left = null;
        this.right = null;
        this.traversed = false;
    }
}

class BinaryTree {
    constructor ( rootItem ) {
        this.root = new Node(rootItem ? rootItem : null);
        this.printLevel = -1;
    }

    createTree () {
        this.root = new Node("A");
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

    printLeftView ( currNode, depth ) {
        if ( !currNode ) {
            return;
        }
        if ( depth >= this.printLevel ) {
            console.log(currNode.key);
            this.printLevel = this.printLevel + 1;
        }

        const val = this.printLeftView(currNode["left"], (depth + 1));
        const val2 = this.printLeftView(currNode["right"], (depth + 1));
    }
}

const bt = new BinaryTree();
bt.createTree();
bt.printLeftView(bt.root, 0);

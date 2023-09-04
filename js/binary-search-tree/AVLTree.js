class AVLNode {

    key;
    left;
    right;
    height;

    constructor ( key ) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {

    root;

    constructor () {
        this.root = null;
    }

    getBalanceFactor ( root ) {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    getHeight ( root ) {
        return root === null ? 0 : root.height;
    }

    leftRotate ( root ) {
        const rightOfRoot = root.right;
        const leftOfRightOfRoot = rightOfRoot.left;

        rightOfRoot.left = root;
        root.right = leftOfRightOfRoot;

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        rightOfRoot.height = Math.max(this.getHeight(rightOfRoot.left), this.getHeight(rightOfRoot.right)) + 1;

        return rightOfRoot;
    }

    rightRotate ( root ) {
        const leftOfRoot = root.left;
        const rightOfLeftOfRoot = leftOfRoot.right;

        leftOfRoot.right = root;
        root.left = rightOfLeftOfRoot;

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        leftOfRoot.height = Math.max(this.getHeight(leftOfRoot.left), this.getHeight(leftOfRoot.right)) + 1;

        return leftOfRoot;
    }

    restoreHeightAndBalance ( root, key ) {
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
        const bf = this.getBalanceFactor(root);

        if ( bf > 1 && key < root.left.key ) return this.rightRotate(root);
        if ( bf < -1 && key > root.right.key ) return this.leftRotate(root);
        if ( bf > 1 && key > root.left.key ) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
        if ( bf < -1 && key < root.right.key ) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    insert ( root, key ) {
        if ( root === null ) return new AVLNode(key);

        if ( key < root.key ) root.left = this.insert(root.left, key);
        else if ( key > root.key ) root.right = this.insert(root.right, key);
        else return root;

        return this.restoreHeightAndBalance(root, key);
    }

    delete ( root, key ) {
        if ( root === null ) return root;
        if ( key < root.key ) root.left = this.delete(root.left, key);
        else if ( key > root.key ) root.right = this.delete(root.right, key);
        else {
            if ( root.left === null && root.right === null ) {
                root.key = null;
                root.height = null;
                return null;
            } else if ( root.left === null ) {
                const temp = root.right;
                root.right = null;
                root.key = null;
                root.height = null;
                return temp;
            } else if ( root.right === null ) {
                const temp = root.left;
                root.left = null;
                root.key = null;
                root.height = null;
                return temp;
            } else {
                const inOrderSuccessor = root.right;
                while( inOrderSuccessor.left !== null ) inOrderSuccessor = inOrderSuccessor.left;
                root.key = inOrderSuccessor.key;
                root.right = this.delete(root.right, inOrderSuccessor.key);
            }
        }
        if ( root === null ) return root;
        return this.restoreHeightAndBalance(root, key);
    }

    preOrder ( root ) {
        if ( root === null ) return;
        console.log(root.key);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}

// Driver code
(function () {
    const tree = new AVLTree();
 
    // tree.root = tree.insert(tree.root, 10);
    // tree.root = tree.insert(tree.root, 20);
    // tree.root = tree.insert(tree.root, 30);
    // tree.root = tree.insert(tree.root, 40);
    // tree.root = tree.insert(tree.root, 50);
    // tree.root = tree.insert(tree.root, 25);

    tree.root = tree.insert(tree.root, 9);
    tree.root = tree.insert(tree.root, 5);
    tree.root = tree.insert(tree.root, 10);
    tree.root = tree.insert(tree.root, 0);
    tree.root = tree.insert(tree.root, 6);
    tree.root = tree.insert(tree.root, 11);
    tree.root = tree.insert(tree.root, -1);
    tree.root = tree.insert(tree.root, 1);
    tree.root = tree.insert(tree.root, 2);

    tree.root = tree.delete(tree.root, 10);

    tree.preOrder(tree.root);
}());

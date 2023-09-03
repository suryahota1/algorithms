class BSTNode {

    key;
    left;
    right;

    constructor ( key ) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {

    root;

    constructor () {
        this.root = null;
    }

    #insertRec ( root, key ) {
        if ( root === null ) return new BSTNode(key);
        if ( key < root.key ) root.left = this.#insertRec(root.left, key);
        else if ( key > root.key ) root.right = this.#insertRec(root.right, key);
        return root;
        // No duplicates
    }

    // Inserting node into BST
    insert ( key ) {
        this.root = this.#insertRec(this.root, key);
    }

    // Inorder traversal of BST
    inOrder ( root=this.root ) {
        if ( root === null ) return;
        this.inOrder(root.left);
        console.log(root.key);
        this.inOrder(root.right);
    }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n) because of recursive calls
*/


// Driver code

(function main () {
    const bst = new BST();
    bst.insert(50);
    bst.insert(60);
    bst.insert(70);
    bst.insert(30);
    bst.insert(20);
    bst.insert(10);

    bst.inOrder();
}());
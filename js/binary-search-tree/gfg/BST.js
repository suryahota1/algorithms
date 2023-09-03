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

    preOrder ( root=this.root ) {
        if ( root === null ) return;
        console.log(root.key);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    postOrder ( root=this.root ) {
        if ( root === null ) return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.key);
    }

    heiht ( root=this.root ) {
        if ( root === null ) return 0;
        return Math.max(1 + this.heiht(root.left), 1 + this.heiht(root.right));
    }

    printGivenLevel ( root, level ) {
        if ( root === null || level === 0) return [];
        if ( level !== 1 ) {
            let resp = [];
            resp = resp.concat(this.printGivenLevel(root.left, level - 1));
            resp = resp.concat(this.printGivenLevel(root.right, level - 1));
            return resp;
        } else if ( level === 1 ) return [root.key];
    }

    levelOrder () {
        const height = this.heiht();
        for ( let i = 1; i <= height; i++ ) {
            const val = this.printGivenLevel(this.root, i);
            console.log(val.join(", "));
        }
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
    bst.insert(30);
    bst.insert(20);
    bst.insert(40);
    bst.insert(70);
    bst.insert(60);
    bst.insert(80);

    bst.levelOrder();
}());
const { BinaryTree } = require("../BinaryTreeIntro");

class InOrderTraversalRecursive extends BinaryTree {

    res;

    constructor () {
        super();
        this.res = [];
    }

    inOrder ( root ) {
        if ( root === null ) {
            return;
        }
        this.inOrder(root.left);
        this.res.push(root.key);
        this.inOrder(root.right);
    }
}

const tr = new InOrderTraversalRecursive();
tr.createTree();
tr.inOrder(tr.root);
console.log("ino", tr.res);

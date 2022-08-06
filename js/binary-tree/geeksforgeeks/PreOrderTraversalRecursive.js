const { BinaryTree } = require("../BinaryTreeIntro");

class PreOrderTraversalRecursive extends BinaryTree {

    res;

    constructor () {
        super();
        this.res = [];
    }

    postOrder ( root ) {
        if ( root === null ) {
            return;
        }
        this.res.push(root.key);
        this.postOrder(root.left);
        this.postOrder(root.right);
    }
}

const tr = new PreOrderTraversalRecursive();
tr.createTree();
tr.postOrder(tr.root);
console.log("ino", tr.res);

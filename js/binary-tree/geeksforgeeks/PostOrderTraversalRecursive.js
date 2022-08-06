const { BinaryTree } = require("../BinaryTreeIntro");

class PostOrderTraversalRecursive extends BinaryTree {

    res;

    constructor () {
        super();
        this.res = [];
    }

    postOrder ( root ) {
        if ( root === null ) {
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        this.res.push(root.key);
    }
}

const tr = new PostOrderTraversalRecursive();
tr.createTree();
tr.postOrder(tr.root);
console.log("ino", tr.res);

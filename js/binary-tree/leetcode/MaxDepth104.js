const { BinaryTree } = require("../BinaryTreeIntro");

class MaxDepth extends BinaryTree {
    constructor () {
        super();
    }

    getMaxDepth ( root ) {
        if ( root === null ) return 0;
        const leftDepth = 1 + this.getMaxDepth(root.left);
        const rightDepth = 1 + this.getMaxDepth(root.right);
        return leftDepth > rightDepth ? leftDepth : rightDepth;
    }
}
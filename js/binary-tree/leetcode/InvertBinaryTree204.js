const { BinaryTree } = require("../BinaryTreeIntro");

class InvertBinaryTree extends BinaryTree {
    constructor () {
        super();
    }

    invert ( root ) {
        if ( root === null ) {
            return null;
        }
        const leftInvert = this.invert(root.left);
        const rightInvert = this.invert(root.right);
        root.right = leftInvert;
        root.left = rightInvert;
        return root;
    }
}
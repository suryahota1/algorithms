const { BinaryTree } = require("../BinaryTreeIntro");

class TreeTilt extends BinaryTree {
    constructor () {
        super();
    }

    findTilt ( root ) {
        if ( root === null ) return 0;
        const lTilt = this.findTilt(root.left);
        const rTilt = this.findTilt(root.right);
        const leftSum = root.left !== null ? root.left.key : 0;
        const rightSum = root.right !== null ? root.right.key : 0;
        const newVal = leftSum + rightSum + root.key;
        root.key = newVal;
        return lTilt + rTilt + Math.abs(leftSum - rightSum);
    }
}

const un = new TreeTilt();
un.createTree();
const t = un.findTilt(un.root);
console.log(t);

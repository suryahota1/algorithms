const { BinaryTree } = require("../BinaryTreeIntro");

class FindSecondMinimum extends BinaryTree {
    constructor () {
        super();
    }

    findSecondMinimumValue ( root ) {
        if ( root.left === null && root.right === null ) return -1;
        if ( root.left.key !== root.right.key ) return Math.max(root.left.key, root.right.key);
        return Math.min(this.findSecondMinimumValue(root.left), this.findSecondMinimumValue(root.right));
    }
}

const uj = new FindSecondMinimum();
uj.createTree();
const bn = uj.findSecondMinimumValue(uj.root);
console.log(bn);
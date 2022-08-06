const { BinaryTree, Node } = require("../BinaryTreeIntro");

class MergeTwoBinaryTrees extends BinaryTree {
    constructor () {
        super();
    }

    mergeTrees ( root1, root2 ) {
        let node = null;
        if ( root1 === null && root2 === null ) {
            return node;
        }
        if ( root1 !== null && root2 !== null ) {
            node = new Node(root1.key + root2.key);
        } else {
            node = new Node(root1 ? root1.key : root2.key);
        }
        const leftN = this.merge(root1 ? root1.left : null, root2 ? root2.left : null);
        const rightN = this.merge(root1 ? root1.right : null, root2 ? root2.right : null);
        node.left = leftN;
        node.right = rightN;
        return node;
    }
}
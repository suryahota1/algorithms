const { BinaryTree } = require("../BinaryTreeIntro");

class MorrisPreOrderTraversal extends BinaryTree {
    constructor () {
        super();
    }

    getInOrderPreDecessor ( node, curr ) {
        while ( node.right !== null ) {
            if ( node.right == curr ) {
                node.right = null;
                return null;
            }
            node = node.right;
        }
        return node;
    }

    preOrder ( root ) {
        let curr = root;
        const res = [];
        while ( curr !== null ) {
            if ( curr.left !== null ) {
                const inPred = this.getInOrderPreDecessor(curr.left, curr);
                if ( inPred ) {
                    res.push(curr.key);
                    inPred.right = curr;
                    curr = curr.left;
                } else {
                    curr = curr.right;
                }
            } else {
                res.push(curr.key);
                curr = curr.right;
            }
        }
        console.log(res);
    }
}

const iu = new MorrisPreOrderTraversal();
iu.createTree();
iu.preOrder(iu.root);

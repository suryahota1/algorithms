const { BinaryTree } = require("../BinaryTreeIntro");

class MorrisInOrderTraversal extends BinaryTree {
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

    inOrder ( root ) {
        let curr = root;
        let res = [];
        while ( curr !== null ) {
            if ( curr.left !== null ) {
                const inPred = this.getInOrderPreDecessor(curr.left, curr);
                if ( inPred ) {
                    inPred.right = curr;
                    curr = curr.left;
                } else {
                    res.push(curr.key);
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

const iu = new MorrisInOrderTraversal();
iu.createTree();
iu.inOrder(iu.root);
